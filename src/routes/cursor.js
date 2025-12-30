const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const { generatePkcePair, queryAuthPoll } = require('../tool/cursorLogin.js');

router.get("/loginDeepControl", async (req, res) => {
  let bearerToken = req.headers.authorization?.replace('Bearer ', '');
  const { verifier, challenge } = generatePkcePair();
  const uuid = uuidv4();
  const resposne = await fetch("https://www.cursor.com/api/auth/loginDeepCallbackControl", {
    method: 'POST',
    headers: {
      "Accept": "*/*",
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.6834.210 Safari/537.36',
      'Cookie': `WorkosCursorSessionToken=${bearerToken}`
    },
    body: JSON.stringify({
      "uuid": uuid,
      "challenge": challenge
    })
  })

  const retryAttempts = 20
  for (let i = 0; i < retryAttempts; i++) {
    const data = await queryAuthPoll(uuid, verifier);
    if (data) {
      return res.json(data)
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return res.status(500).json({
    error: 'Get cookie timeout, please try again.',
  });
})

module.exports = router;
