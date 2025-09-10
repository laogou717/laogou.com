---
date: 2024-02-27T08:45:48.976Z
updated: 2024-02-27T08:47:02.527Z
title: 一行代码本地运行 AI 模型
categories: AI纪元
cover: https://img.laogou717.com/file/bd45246b0536b4bc3879c.jpg
main_color: '#000000'
tags:
  - AI
  - Ollama
  - 本地模型
keywords: AI,Ollama,部署AI模型,Llama
ai_text: >-
  Ollama： 一款能够在本地运行 AI 模型的工具，提供简便的命令行接口和模型库支持，同时支持自定义模型和提示。 LMStudio： 一款无需代码即可下载运行模型的工具，拥有自带聊天页面，用户可以直接进行交互。 Open WebUI：
  提供了前端页面，可以通过 Docker 快速启动，提供了简单易用的界面来访问 Ollama。
---


![一行代码本地运行 AI 模型](https://cdn.jsdelivr.net/gh/laogou717/IMG@main/LAOGOU/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png)

## Ollama 

![](https://cdn.jsdelivr.net/gh/laogou717/IMG@main/LAOGOU/20240227163844.png)

>一行代码下载运行模型

- https://ollama.com

### Ollama 运行代码

1. **运行并与 Llama 2 交互：**

```
ollama run llama2
```

2. **模型库：**

Ollama 支持一系列模型，可以在 [invalid URL removed] 下载。

3. **自定义模型：**

* **从 GGUF 导入：**

    1. 创建名为 `Modelfile` 的文件，其中包含 `FROM` 指令，指定要导入的模型的本地文件路径。
    2. 创建模型：
        ```
        ollama create example -f Modelfile
        ```
    3. 运行模型：
        ```
        ollama run example
        ```

* **从 PyTorch 或 Safetensors 导入：**

    请参阅导入模型的 指南：URL ollama import model ON Hugging Face ollama.ai 了解更多信息。

4. **自定义提示：**

```
ollama pull llama2

# 创建 Modelfile
FROM llama2

# 设置温度 (越高越具创意，越低越连贯)
PARAMETER temperature 1

# 设置系统消息
SYSTEM """
你是超级马里奥兄弟中的马里奥。仅以助手身份回答，就像马里奥一样。
"""

# 创建并运行模型
ollama create mario -f ./Modelfile
ollama run mario
>>> hi
你好！我是你的朋友马里奥。
```

  
## LMStudio

![](https://cdn.jsdelivr.net/gh/laogou717/IMG@main/LAOGOU/20240227163401.png)

>无需代码下载运行模型，自带聊天页面

- https://lmstudio.ai



## Open WebUI 

![](https://cdn.jsdelivr.net/gh/laogou717/IMG@main/LAOGOU/20240227164346.png)

> 前端页面

https://github.com/open-webui/open-webui


### docker 拉取并链接本地 Ollama

 **使用 Docker 快速启动 **


使用 Docker 安装 Open WebUI 时，请务必在 Docker 命令中包含 `-v open-webui:/app/backend/data` 参数。这一步至关重要，因为它可以确保正确挂载数据库并防止数据丢失。

**如果 Ollama 在您的计算机上，请使用以下命令：**

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

**如果 Ollama 在另一台服务器上，请使用以下命令：**

要连接到另一台服务器上的 Ollama，请将 `OLLAMA_API_BASE_URL` 更改为服务器的 URL：

```bash
docker run -d -p 3000:8080 -e OLLAMA_API_BASE_URL=https://example.com/api -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

**安装完成后，您可以通过 `http://localhost:3000` 访问 Open WebUI。尽情使用吧！**