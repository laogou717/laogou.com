---
title: Grok2使用流程 玩转Grok-2！免费25美元额度
description: 玩转Grok-2！免费25美元额度
date: 2024-11-20T00:00:00.000Z
cover: https://i.111666.best/image/PzigGwbxKPtJVIJvQz37YG.png
tags:
  - AI
  - grok2
  - 马斯克
  - X
keywords:
  - AI
  - grok2
  - 马斯克
  - X
  - OneAPI
  - LibreChat
categories: AI纪元
color: '#000'
---

## 模型信息
| 模型名(Model)    | 输入(Input) | 输出(Output) | 上下文长度 (Context) | 每秒请求数 (RPS) | 每分钟请求数 (RPM) | 每小时请求数 (RPH) |
| ---------------- | ----------- | ------------ | -------------------- | ---------------- | ------------------ | ------------------ |
| grok-beta        | TEXT        | TEXT         | 131072               | 1                | 60                 | 1200               |
| grok-vision-beta | TEXT/IMAGE  | TEXT         | 8192                 | 1                | 3                  | 60                 |

## 访问地址


Grok2公测地址：[https://x.ai/api](https://x.ai/api)
模型名称：`grok-beta`、`grok-vision-beta`
API请求端点：`https://api.x.ai`

### 调用工具
| 调用工具名称 | 链接                                    |
| ------------ | --------------------------------------- |
| Chatbox      | https://chatboxai.app/zh                |
| OneAPI       | https://github.com/songquanpeng/one-api |
| LibreChat    | https://www.librechat.ai                |

1. 创建 xAI 账户并获取 API 密钥

首先，访问 xAI 控制台 https://x.ai/api 注册账户。完成注册后，前往“API 密钥”页面，创建新的 API 密钥。请妥善保存该密钥，并确保其安全性。 ￼

2. 请求端点

xAI 的 API 基础 URL 为：

https://api.x.ai/v1

在此基础上，您可以访问不同的端点。例如，进行聊天补全的端点为：

https://api.x.ai/v1/chat/completions

3. 模型名称

Grok-2 模型的名称为：

grok-beta

在 API 请求中，您需要在 model 参数中指定此名称。 ￼

4. 发送请求

以下是使用 curl 发送请求的示例：

curl https://api.x.ai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_XAI_API_KEY" \
  -d '{
    "messages": [
      { "role": "system", "content": "You are Grok, a chatbot inspired by the Hitchhikers Guide to the Galaxy." },
      { "role": "user", "content": "What is the meaning of life, the universe, and everything?" }
    ],
    "model": "grok-beta",
    "stream": false,
    "temperature": 0
  }'




