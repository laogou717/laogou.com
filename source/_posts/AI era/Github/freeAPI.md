---
title: 免费领取GPT4、Claude3免费API！
cover: https://img.laogou717.com/file/bc42ac5bbbf835f97b401.jpg
categories: AI纪元
date: 2024-04-06T00:55:00.000Z
color: '#014FE0'
tags:
  - GPT4
  - Claude3.5
  - 头顶冒火
ai_text: >-
  这篇文章介绍了一个名为OpenAI接口转发站的服务，它提供了一个稳定的渠道来使用OpenAI的多种模型，包括GPT4和Claude3，并支持高并发。
  用户可以通过在GitHub上创建一个令牌来使用这项服务，并且还提供了API调用的示例，包括如何设置请求头和请求体。
---

## 引言

>
>OpenAI 接口转发站
 **正规渠道，稳定使用**，所有模型均支持高并发
 支持 OpenAI **大部分模型**
 如遇问题可以在 [GitHub](https://github.com/BurnHair/issues) 上提issue

---


## 使用指南
### 进入网站

- [头顶冒火](https://burn.hair/register?aff=9iZ5) — GPT4、Claude3免费API
  
  ![头顶冒火](https://img.laogou717.com/file/d72147cc06ba5fa8b1014.png)

### GitHub 登录与令牌创建

为了使用本服务，您需要通过以下步骤获取和使用 GitHub 登录及创建令牌：

1. **GitHub 登录：** 确保您已拥有一个 GitHub 账号；如果没有，您可以轻松地在 [GitHub 官网](https://github.com/) 注册一个。
2. **创建令牌：** 登录后，在设置区域寻找到“令牌”或“API Tokens”的部分，并选择“添加新的令牌”来创建一个新的 API 令牌。
![](https://img.laogou717.com/file/f7680e87426e17deb2d56.png)
3. **复制令牌：** 令牌创建后，请确保复制您的令牌（Token），以便在 API 请求中使用。
![](https://img.laogou717.com/file/2b28f77c30777b5d24363.png)

### API 调用示例

要通过 API 与服务进行交云，您需要准备适当的请求，这包括设置请求头和请求体：

- **接口 URL:** `https://burn.hair/v1/chat/completions`
- **请求头:** 应包括 `Authorization: Bearer sk-您的令牌`，以便系统验证您的请求。
- **请求体示例:**

```json
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "重复我说的话：我是我，你是你。"
    }
  ],
  "temperature": 0.7
}
```

请根据需要替换模型名称或调整请求体的其他参数。

### Claude 模型支持

本服务同时支持 Claude 模型，您可以按照如下格式进行调用：

```json
{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {"role": "user", "content": "Hello, world"}
  ]
}
```

### 签到及充值

- **签到:** 您可以通过网站或机器人进行签到，机器人签到可能会获得额外奖励。
- **充值:** 访问指定的充值页面进行兑换码购买，并通过支持的支付方式完成交易。购买后，使用获得的兑换码在充值页面进行激活。
![](https://img.laogou717.com/file/4091ea7303706de9c74b2.png)

### Midjourney 支持

- 目前，本服务尚不支持 Midjourney 模型。

### 模型变化解释

- 如果您发现日志中模型名称频繁变动，这可能是因为您使用的是 NextChat 功能，它会根据需要自动选择最合适的模型进行响应。

---
# 文章参考
- https://burn.hair