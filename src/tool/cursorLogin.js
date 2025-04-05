const crypto = require('crypto');
const { v4: uuidv4, v5: uuidv5 } = require('uuid');

function generatePkcePair() {
  const verifier = crypto.randomBytes(43).toString('base64url');
  const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');    
  return { verifier, challenge };
}

function getLoginUrl(uuid, challenge) {
  const loginUrl = `https://www.cursor.com/cn/loginDeepControl?challenge=${challenge}&uuid=${uuid}&mode=login`
  return loginUrl
}

async function queryAuthPoll(uuid, verifier){
  const authPolllUrl = `https://api2.cursor.sh/auth/poll?uuid=${uuid}&verifier=${verifier}`;
  const response = await fetch(authPolllUrl, {
    method: 'GET',
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/0.48.6 Chrome/132.0.6834.210 Electron/34.3.4 Safari/537.36",
        "Accept": "*/*"
    },
    timeout: 5000
  });

  let token = undefined;
  if (response.status === 200) {
    const data = await response.json();
    const accessToken = data.accessToken || undefined;
    const authId = data.authId || "";
    if (authId.split("|").length > 1) {
      const userId = authId.split("|")[1];
      token = `${userId}%3A%3A${accessToken}`;
    } else {
      token = accessToken;
    }  
  }

  return token;
}

if (require.main === module) {

  async function main(){
    const { verifier, challenge } = generatePkcePair();
    const uuid = uuidv4();
    const loginUrl = getLoginUrl(uuid, challenge);
    console.log("[Log] Please open the following URL in your browser to login:");
    console.log(loginUrl);

    const retryAttempts = 60;

    for (let i = 0; i < retryAttempts; i++) {
      console.log(`[Log] Waiting for login... (${i + 1}/${retryAttempts})`);
      const token = await queryAuthPoll(uuid, verifier);
      if (token) {
        console.log("[Log] Login successfully. Your Cursor cookie:");
        console.log(token)
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 5000));

      if (i === retryAttempts - 1) {
        console.log("Login timeout, please try again.");
      }
    }
  }

  main().catch((error) => {
    console.error("Error:", error);
  });

}
