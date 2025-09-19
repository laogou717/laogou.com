---
title: 两个免费无限制使用ChatGPT模型API！
cover: https://img.laogou717.com/file/9311cc5527a8f4e644586.jpg
categories: AI纪元
date: 2024-04-06T22:55:00.000Z
color: '#4c87d9'
hide_in_home: true
tags:
  - GPT3.5
  - 开源项目
  - 逆向
  - AURORA
ai_text: >-
  本文介绍了两个开源项目：FreeGPT35-Vercel和AURORA，它们允许用户通过OpenAI接口转发站服务，免费且高效地使用GPT-3.5模型。FreeGPT35-Vercel提供一键部署简便方式，而AURORA则提供丰富的功能和多样化部署选项，适合不同用户的需求。
---
## 引言

>
>OpenAI开放了免登录聊天的功能之后,**FreeGPT35-Vercel** 和 **AURORA** 两个开源项目应运而生。
>**FreeGPT35-Vercel** 项目利用 Vercel 平台，可以让您一键部署免费的 GPT-3.5 接口，无需登录或注册。
>**AURORA** 项目则提供了更加丰富的功能和设置，支持多种部署方式，满足不同用户的个性化需求。同时带有简单的前端面板。{% inline_img https://img.laogou717.com/file/2666f3fae8ea44f8f9f7c.png '' 30px %}


## FreeGPT35-Vercel 简介

**FreeGPT35-Vercel**利用Vercel平台的强大功能，允许用户一键部署GPT-3.5接口，免去了繁琐的登录或注册流程。项目的高光特点包括：

- **简易部署**：通过[一键部署到Vercel平台](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcliouo%2FFreeGPT35-Vercel)，您可以轻松启动自己的GPT-3.5服务。
- **自定义访问**：用户可以设置自己的域名，方便地访问部署的接口。
- **环境变量配置**：通过设置`AUTH_TOKEN`环境变量，您将获得一个独特的API密钥，保障了访问的安全性。

![](https://img.laogou717.com/file/135aabe589869d625f0fa.png)

## AURORA 简介

与FreeGPT35-Vercel项目相比，**AURORA**提供了更多的功能和部署选项，满足了不同用户的个性化需求。其特点包括：

- **多元化部署**：支持包括编译部署、Docker部署在内的多种方式，为用户提供了广泛的选择空间。
- **丰富的部署平台**：除了传统的Docker和Render，AURORA还支持Koyeb、Railway等新兴的云平台，给用户提供了更多的灵活性。
- **前端面板支持**：AURORA带有简洁明了的前端面板，使用户能够更加便捷地管理和使用服务。

>
>由于**DockerRender部署过于繁琐**,同时被官网所限制,因此我们可以选择时用**Koyeb**、**Railway**、**huggingface**等部署方式。

### Vercel、Zeabur部署

由于vercel不支持流式，如果在vercel部署请在STREAM_MODE中填False，不支持任何默认流式的客户端，支持沉浸式翻译。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faurora-develop%2Faurora&env=STREAM_MODE&project-name=aurora&repository-name=aurora)
[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/JF3EFW)

### Koyeb部署
地区选美国
[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=docker&name=aurora&ports=8080;http;/&image=ghcr.io/aurora-develop/aurora)
![](https://img.laogou717.com/file/c187611f850351814d932.png)

### RaiLway部署
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/jcl2Es?referralCode=XXqY_5)
![Railway](https://img.laogou717.com/file/dd9a3b3838d49cbd7a5cc.png)

### huggingface部署
以下镜像来自群友:早起的虫被鸟吃
[一键克隆镜像](https://huggingface.co/spaces/ykl45/aa)
![huggingface](https://img.laogou717.com/file/6065b9135a26a7ef427da.png)
### 访问Web端
访问 http://你的服务器ip:8080/web 即可 在web设置页面的填写服务器的http://你的服务器ip:8080

**注：仅ip属地支持免登录使用ChatGpt可以使用(也可以自定义Baseurl来绕过限制)**
### AURORA环境变量

| 环境变量名    | 描述                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| BASE_URL      | 设置代理网关的URL，所有请求将通过这个网关转发。例如，`https://auroraxf.glitch.me/api`表示所有的API请求都将通过这个地址进行转发。 |
| Authorization | 用于用户认证的key。在发送请求时，这个key将用于验证用户的身份，确保请求的合法性。                                                 |
| TLS_CERT      | 指向TLS证书的路径。这个证书用于HTTPS通信，保证数据传输的安全。                                                                   |
| TLS_KEY       | 指向TLS密钥的路径。这个密钥与TLS证书配合使用，用于加密通信，保护数据传输过程中的隐私和完整性。                                   |
| PROXY_URL     | 设置代理池的URL。通过使用代理池，可以改变请求的来源IP地址，用于绕过IP限制或增强隐私保护。                                        |

## 其他前端UI
* [Lobe-Chat](https://github.com/lobehub/lobe-chat)

![Lobe-Chat](https://img.laogou717.com/file/178405f4cacdf8a484481.png)
![Lobe-Chat](https://img.laogou717.com/file/b76c228eb67c780c8e7b9.png)



## 参考链接

* **FreeGPT35-Vercel 项目地址:** [https://github.com/cliouo/FreeGPT35-Vercel](https://github.com/cliouo/FreeGPT35-Vercel)
* **AURORA 项目地址:** [https://github.com/aurora-develop/aurora](https://github.com/aurora-develop/aurora)

>
>如果对您有所帮助,希望各位不要吝啬手里的点赞🎉

