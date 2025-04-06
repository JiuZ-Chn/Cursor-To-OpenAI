# Cursor To OpenAI

Convert the Cursor Editor to an OpenAI API interface service.

## Introduction

This project provides a proxy service that converts the AI chat of the Cursor Editor into an OpenAPI API, allowing you to reuse the LLM of the Cursor in other applications.

## Preparsuitue

1. Visit [Cursor](https://www.cursor.com) and register a account.
    - 150 fast premium requests are given, which can be reset by deleting the account and then registering again
    - Suggest to use gmail/outlook email, some temp emails have been disabled by Cursor.


## Get Cursor client cookie

The cookie from Cursor webpage does not work in Cursor-To-OpenAI server. You need to get the Cursor client cookie following these steps:

1. Run `npm install` to initialize the environment。
2. Run `npm run login`. Open the URL shows in the log, and then login your account.
3. The cookie shows in your command is the `Curosr Cookie` value. Copy and save it to your notepad.

The log of this command looks like:
```
[Log] Please open the following URL in your browser to login:
https://www.cursor.com/cn/loginDeepControl?challenge=6aDBevuHkK-HLiZ<......>k2lEjbVRMpg&uuid=5147ac09<....>5fe5f3aeb&mode=login      <-- Copy the url and open it in your browser.
[Log] Waiting for login... (1/60)
[Log] Waiting for login... (2/60)
[Log] Waiting for login... (3/60)
[Log] Waiting for login... (4/60)
[Log] Login successfully. Your Cursor cookie:
user_01JJF<.....>K3F4T8%3A%3AeyJhbGciOiJIUzI1NiIsInR5cCI6Ikp<...................>AsCpbPfnlHy022WxmlKIt4Q7Ll0     <-- This is the Cursor cookie, please save it.
```

## How to Run

### Run in docker
```
docker run -d --name cursor-to-openai -p 3010:3010 ghcr.io/jiuz-chn/cursor-to-openai:latest
```

### Run in npm
```
npm install
npm run start
```

## How to use the server

1. Get models
    - Url：`http://localhost:3010/v1/models`
    - Request：`GET`
    - Authentication：`Bearer Token`（The value of `Cursor Cookie`)

2. Chat completion
    - Url：`http://localhost:3010/v1/chat/completions`
    - Request：`POST`
    - Authentication：`Bearer Token`（The value of `Cursor Cookie`，supports comma-separated values）

 for the response body, please refer to the OpenAI interface

### Python demo
```
from openai import OpenAI

client = OpenAI(api_key="{{{Replace by the Cursor cookie of your account. It starts with user_...}}}",
                base_url="http://localhost:3010/v1")

response = client.chat.completions.create(
    model="claude-3-7-sonnet",
    messages=[
        {"role": "user", "content": "Hello."},
    ],
    stream=False
)

print(response.choices)
```

## Notes

- Please keep your Cursor cookie properly and do not disclose it to others
- This project is for study and research only, please abide by the Cursor Terms of Use

## Acknowledgements

- This project is based on [cursor-api](https://github.com/zhx47/cursor-api)(by zhx47).
- This project integrates the commits in [cursor-api](https://github.com/lvguanjun/cursor-api)(by lvguanjun).
