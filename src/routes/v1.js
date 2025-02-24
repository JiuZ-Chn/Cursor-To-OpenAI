const express = require('express');
const router = express.Router();

const $root = require('../proto/message.js');
const { v4: uuidv4, v5: uuidv5 } = require('uuid');
const { generateCursorBody, chunkToUtf8String, generateHashed64Hex, generateCursorChecksum } = require('../utils/utils.js');

router.get("/models", async (req, res) => {
  try{
    let bearerToken = req.headers.authorization?.replace('Bearer ', '');
    let authToken = bearerToken.split(',').map((key) => key.trim())[0];
    if (authToken && authToken.includes('%3A%3A')) {
      authToken = authToken.split('%3A%3A')[1];
    }
    else if (authToken && authToken.includes('::')) {
      authToken = authToken.split('::')[1];
    }

    const checksum = req.headers['x-cursor-checksum'] 
      ?? process.env['x-cursor-checksum'] 
      ?? generateCursorChecksum(authToken.trim());
    const cursorClientVersion = "0.45.11"

    const availableModelsResponse = await fetch("https://api2.cursor.sh/aiserver.v1.AiService/AvailableModels", {
      method: 'POST',
      headers: {
        'accept-encoding': 'gzip',
        'authorization': `Bearer ${authToken}`,
        'connect-protocol-version': '1',
        'content-type': 'application/proto',
        'user-agent': 'connect-es/1.6.1',
        'x-cursor-checksum': checksum,
        'x-cursor-client-version': cursorClientVersion,
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'true',
        'Host': 'api2.cursor.sh',
      },
    })
    const data = await availableModelsResponse.arrayBuffer();
    const buffer = Buffer.from(data);
    try{
      const models = $root.AvailableModelsResponse.decode(buffer).models;

      return res.json({
        object: "list",
        data: models.map(model => ({
          id: model.name,
          created: Date.now(),
          object: 'model',
          owned_by: 'cursor'
        }))
      })
    } catch (error) {
      const text = buffer.toString('utf-8');
      throw new Error(text);      
    }
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
})

router.post('/chat/completions', async (req, res) => {
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
    else if (authToken && authToken.includes('::')) {
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

    const sessionid = uuidv5(authToken,  uuidv5.DNS);
    const clientKey = generateHashed64Hex(authToken)
    const cursorClientVersion = "0.45.11"

    // Request the AvailableModels before StreamChat.
    const availableModelsResponse = await fetch("https://api2.cursor.sh/aiserver.v1.AiService/AvailableModels", {
      method: 'POST',
      headers: {
        'accept-encoding': 'gzip',
        'authorization': `Bearer ${authToken}`,
        'connect-protocol-version': '1',
        'content-type': 'application/proto',
        'user-agent': 'connect-es/1.6.1',
        'x-amzn-trace-id': `Root=${uuidv4()}`,
        'x-client-key': clientKey,
        'x-cursor-checksum': checksum,
        'x-cursor-client-version': cursorClientVersion,
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'true',
        "x-request-id": uuidv4(),
        "x-session-id": sessionid,
        'Host': 'api2.cursor.sh',
      },
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
        'x-client-key': clientKey,
        'x-cursor-checksum': checksum,
        'x-cursor-client-version': cursorClientVersion,
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'true',
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

module.exports = router;
