# Cursor To OpenAI

将 Cursor 编辑器转换为 OpenAI 兼容的 API 接口服务。

## 项目简介

本项目提供了一个代理服务，可以将 Cursor 编辑器的 AI 能力转换为与 OpenAI API 兼容的接口，让您能够在其他应用中复用 Cursor 的 AI 能力。
- 支持同时传入多个Cookie，使用多个英文逗号分隔

## 使用前准备

1. 访问 [www.cursor.com](https://www.cursor.com) 并完成注册登录（赠送 150 次快速响应，可通过删除账号再注册重置）
2. 在浏览器中打开开发者工具（F12）
3. 找到 应用-Cookies 中名为 `WorkosCursorSessionToken` 的值并保存(相当于 openai 的密钥)



## 接口说明

### 基础配置

- 接口地址：`http://localhost:3010/v1/chat/completions`
- 请求方法：POST
- 认证方式：Bearer Token（使用 WorkosCursorSessionToken 的值，支持英文逗号分隔的 key 入参）

### 请求格式和响应格式参考 openai


## 运行和部署

### Docker 部署

```
docker run -d --name cursor-to-openai -p 3010:3010 ghcr.io/jiuz-chn/cursor-to-openai:latest
```

### 本地开发

```
cd Cursor-To-OpenAI
npm install
npm run start
```

## 注意事项

- 请妥善保管您的 WorkosCursorSessionToken，不要泄露给他人
- 本项目仅供学习研究使用，请遵守 Cursor 的使用条款

## 致谢

- 本项目基于 [cursor-api](https://github.com/zhx47/cursor-api)(by zhx47) 进行优化。
- 本项目整合 [cursor-api](https://github.com/lvguanjun/cursor-api)(by lvguanjun) 中的改进。
