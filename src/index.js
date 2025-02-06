const express = require('express');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const { generateCursorBody, chunkToUtf8String, generateCursorChecksum } = require('./utils.js');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(morgan(process.env.MORGAN_FORMAT ?? 'tiny'));

app.post('/v1/chat/completions', async (req, res) => {
  // o1开头的模型，不支持流式输出
  if (req.body.model.startsWith('o1-') && req.body.stream) {
    return res.status(400).json({
      error: 'Model not supported stream',
    });
  }

  try {
    const { model, messages, stream = false } = req.body;
    let bearerToken = req.headers.authorization?.replace('Bearer ', '');
    const keys = bearerToken.split(',').map((key) => key.trim());

    // Randomly select one key to use
    let authToken = keys[Math.floor(Math.random() * keys.length)]

    if (authToken && authToken.includes('%3A%3A')) {
      authToken = authToken.split('%3A%3A')[1];
    }
    if (authToken && authToken.includes('::')) {
      authToken = authToken.split('::')[1];
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0 || !authToken) {
      return res.status(400).json({
        error: 'Invalid request. Messages should be a non-empty array and authorization is required',
      });
    }

    const checksum = req.headers['x-cursor-checksum'] 
      ?? process.env['x-cursor-checksum'] 
      ?? generateCursorChecksum(authToken.trim());

    const sessionid = uuidv4()
    const clientKey = '???'   // 256-bit hex value, not sure what's that

    // Request the CheckFeatureStatus before StreamChat. It may helps to bypass the account ban.
    // If you remove the await here, it will improve performance, but I'm not sure if it will cause your account to be banned.
    const checkFeatureStatusResponse = await fetch("https://api2.cursor.sh/aiserver.v1.AiService/CheckFeatureStatus", {
      method: 'POST',
      headers: {
        'accept-encoding': 'gzip',
        'authorization': `Bearer ${authToken}`,
        'connect-protocol-version': '1',
        'content-type': 'application/proto',
        'user-agent': 'connect-es/1.6.1',
        //'x-client-key': clientKey,
        'x-cursor-checksum': checksum,
        'x-cursor-client-version': '0.45.9',
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'false',
        'x-session-id': sessionid,
        'Host': 'api2.cursor.sh',
      },
      // 0x0A 0x1D cppExistingUserMarketingPopup
      body: Buffer.from('0A1D6370704578697374696E67557365724D61726B6574696E67506F707570', 'hex')
    })

    const cursorBody = generateCursorBody(messages, model);
    const response = await fetch('https://api2.cursor.sh/aiserver.v1.AiService/StreamChat', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${authToken}`,
        'connect-accept-encoding': 'gzip',
        'connect-content-encoding': 'gzip',
        'connect-protocol-version': '1',
        'content-type': 'application/connect+proto',
        'user-agent': 'connect-es/1.6.1',
        'x-amzn-trace-id': `Root=${uuidv4()}`,
        //'x-client-key': clientKey,
        'x-cursor-checksum': checksum,
        'x-cursor-client-version': '0.45.9',
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'false',
        'x-request-id': uuidv4(),
        'x-session-id': sessionid,
        'Host': 'api2.cursor.sh',
      },
      body: cursorBody,
      timeout: {
        connect: 5000,
        read: 30000
      }
    });

    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const responseId = `chatcmpl-${uuidv4()}`;

      try {
        for await (const chunk of response.body) {
          let text = chunkToUtf8String(chunk);

          if (text.length > 0) {
            res.write(
              `data: ${JSON.stringify({
                id: responseId,
                object: 'chat.completion.chunk',
                created: Math.floor(Date.now() / 1000),
                model: req.body.model,
                choices: [
                  {
                    index: 0,
                    delta: {
                      content: text,
                    },
                  },
                ],
              })}\n\n`
            );
          }
        }
      } catch (streamError) {
        console.error('Stream error:', streamError);
        if (streamError.name === 'TimeoutError') {
          res.write(`data: ${JSON.stringify({ error: 'Server response timeout' })}\n\n`);
        } else {
          res.write(`data: ${JSON.stringify({ error: 'Stream processing error' })}\n\n`);
        }
      } finally {
        res.write('data: [DONE]\n\n');
        res.end();
      }
    } else {
      try {
        let text = '';
        for await (const chunk of response.body) {
          text += chunkToUtf8String(chunk);
        }
        // 对解析后的字符串进行进一步处理
        text = text.replace(/^.*<\|END_USER\|>/s, '');
        text = text.replace(/^\n[a-zA-Z]?/, '').trim();
        // console.log(text)

        return res.json({
          id: `chatcmpl-${uuidv4()}`,
          object: 'chat.completion',
          created: Math.floor(Date.now() / 1000),
          model,
          choices: [
            {
              index: 0,
              message: {
                role: 'assistant',
                content: text,
              },
              finish_reason: 'stop',
            },
          ],
          usage: {
            prompt_tokens: 0,
            completion_tokens: 0,
            total_tokens: 0,
          },
        });
      } catch (error) {
        console.error('Non-stream error:', error);
        if (error.name === 'TimeoutError') {
          return res.status(408).json({ error: 'Server response timeout' });
        }
        throw error;
      }
    }
  } catch (error) {
    console.error('Error:', error);
    if (!res.headersSent) {
      const errorMessage = {
        error: error.name === 'TimeoutError' ? 'Request timeout' : 'Internal server error'
      };

      if (req.body.stream) {
        res.write(`data: ${JSON.stringify(errorMessage)}\n\n`);
        return res.end();
      } else {
        return res.status(error.name === 'TimeoutError' ? 408 : 500).json(errorMessage);
      }
    }
  }
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`The server listens port: ${PORT}`);
});
