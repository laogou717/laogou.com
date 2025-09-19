---
title: Lobe Chat：开源、高性能的聊天机器人框架
cover: https://image.laogou717.com/file/image/blog/2024/WEMLEUo7.jpg
categories: AI纪元
date: 2023/10/26 08:00:00
color: '#FDD528'
tags:
  - LobeChat
  - 开源项目
  - WebUI
ai_text: >-
  本文介绍了一个开源的、高性能的聊天机器人框架——LobeChat。LobeChat为开发者提供强大的工具和功能，以便快速且有效地创建和部署聊天机器人。
  该框架支持一键免费部署私人ChatGPT/LLM网页应用程序，核心功能包括快速部署、精致UI设计、流畅的对话体验、插件支持、隐私安全、自定义助手角色和角色市场。
  项目地址包括官网地址和GitHub开源地址，可以在Vercel和Zeabur平台部署项目。此外，还提供了环境变量配置信息和参考链接。作者鼓励读者在底部评论区留言交流，如果您有安装或使用上的问题，可以在评论区留言。希望这篇文章对您有所帮助！
---

![lobe.png](https://img.laogou717.com/file/0d23a91ad3c5cff53b436.png)

# 简介

<aside>
<img src="https://img.laogou717.com/file/5a18ff550bb373be2540b.png" alt="https://img.laogou717.com/file/5a18ff550bb373be2540b.png" width="40px" /> LobeChat 是一个开源的、高性能的聊天机器人框架，为开发者提供了强大的工具和功能，以便快速且有效地创建和部署聊天机器人。这个框架支持一键免费部署私人 ChatGPT/LLM 网页应用程序，为开发者带来前所未有的便捷。

</aside>

![](https://img.laogou717.com/file/cbebb96ad6102fa9e0c66.png)

# 核心功能

- **快速部署**：支持使用 Vercel 平台一键部署。
- **精致 UI 设计**：具有优雅的外观和流畅的交互效果，支持亮暗色主题。
- **流畅的对话体验**：支持流式响应和完整的 Markdown 渲染。
- **插件支持**：可安装和使用各种插件，同时支持自定义插件开发。
- **隐私安全**：所有数据保存在用户浏览器本地。
- **自定义助手角色**：允许创建和分享个性化的对话助手角色。
- **角色市场**：提供角色市场，丰富对话内容和风格。

# 用户体验

LobeChat 为用户提供了一系列独特的功能，包括：

- **主题模式选择**：提供明亮模式和暗黑模式，以及丰富的颜色定制选项。
- **移动设备适配**：针对移动设备进行了优化，支持渐进式 Web 应用（PWA）技术。
 

![](https://img.laogou717.com/file/11097c2d930ebfd775386.png)

# 项目地址

> 官网地址和开源地址
> 

[LobeChat](https://chat-preview.lobehub.com/welcome#session=inbox)

[Lobe Chat - 一个开源、现代设计的法学硕士/人工智能聊天框架。支持多AI提供商（OpenAI / Claude 3 / Gemini / Perplexity / Bedrock / Azure / Mistral / Ollama），多模态（Vision / TTS）和插件系统。一键免费部署您的私人 ChatGPT 聊天应用程序。](https://github.com/lobehub/lobe-chat)

# 项目部署与环境变量

## 部署项目

- **Vercel 部署**：简单几步即可在 Vercel 上部署服务。[中国大陆的免费域名污染严重,需要绑定域名]

[点击在Vercel部署](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flobehub%2Flobe-chat&env=OPENAI_API_KEY&envDescription=Find%20your%20OpenAI%20API%20Key%20by%20click%20the%20right%20Learn%20More%20button.&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=lobe-chat&repository-name=lobe-chat)

- **Zeabur 部署**：方便在私有设备上部署服务。但目前zeabur正在更新，会报错[中国大陆免费域名可用,无需购买域名也可以直连]
    
    需在变量里设置`EXPERIMENTAL_SERVERLESS=1`
    
    [点击在Zeabur部署](https://zeabur.com/zh-CN)
    
    ```jsx
    OPENAI_API_KEY=你的key
    OPENAI_PROXY_URL=端点如果是官方的api可以不去填写
    ACCESS_CODE=访问密码,如果你在变量里设置key,未来你账号的安全必须填写密码,6位
    ```
    

## 环境变量

本项目提供了一些额外的配置项，使用环境变量进行设置：

| 环境变量         | 类型 | 描述                                                                           | 示例                              |
| ---------------- | ---- | ------------------------------------------------------------------------------ | --------------------------------- |
| OPENAI_API_KEY   | 必选 | 在 OpenAI 账户页面申请的 API 密钥                                              | sk-xxxxxx...xxxxxx                |
| OPENAI_PROXY_URL | 可选 | 如果手动配置了 OpenAI 接口代理，可用此配置项覆盖默认的 OpenAI API 请求基础 URL | 默认值: https://api.openai.com/v1 |
| ACCESS_CODE      | 可选 | 访问此服务所需的密码，应为 6 位数字或字母                                      | awCT74 或 e3@09!                  |

# 📎参考链接
{% link "项目主页" "[官方文档](https://github.com/lobehub/lobe-chat/wiki)" https://github.com/lobehub/lobe-chat %}
- [提交问题](https://github.com/lobehub/lobe-chat/issues)

<aside>
💡 有关安装或者使用上的问题，欢迎您在底部评论区留言，一起交流~
如果觉得文章还不错可以请博主喝杯饮料🥤

</aside>