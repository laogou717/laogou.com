---
title: "本地部署 DeepSeek R1 无审查版本"
description: "详细介绍如何在本地部署 Ollama 和 DeepSeek R1 模型，包括环境配置、模型管理和 WebUI 对接等内容"
date: "2025-02-10"
cover: https://raw.githubusercontent.com/JonasTech0/Jonas-imgs-240211/main/images跳过审查.jpg
categories: AI纪元
color: '#568B35'
tags:
  - DeepSeek R1
  - Ollama
  - 部署
ai_text: "给出在 Windows/Linux/macOS 安装与配置 Ollama、下载与运行 DeepSeek R1 的步骤，含硬件建议、模型清理与 WebUI 对接要点，帮助搭建本地、可控、无审查的大模型环境。"
---

> 相关链接：
> - YouTube：<https://www.youtube.com/embed/_2EK2CmU-SU?si=fj5UNDdDGus8frvI>
> - B站：<https://player.bilibili.com/player.html?isOutside=true&bvid=BV12k4y197v6&autoplay=0>
> - 附件：/attachments/nextjs-app-router.mdx

## 一、项目概述

### 1.1 背景与优势

- **本地部署优势**  
  - **数据隐私**：所有数据和推理均在本地运行，无需上传云端。  
  - **响应速度**：降低网络延迟，快速响应用户请求。  
  - **成本节约**：避免高昂的云服务费用。  

- **Ollama 简介**  
  Ollama 是一个开源的本地大模型运行框架，其操作方式类似 Docker（支持 pull、run、list、rm、cp 等命令），能够以统一标准管理模型包（Modelfile），支持多种主流大模型（如 DeepSeek R1、Llama 系列、Gemma 等）。

- **示例选择：DeepSeek R1**  
  作为近年来开源领域中表现优异的模型之一，DeepSeek R1 在数学、代码和推理任务上具有出色性能。不同参数规模（例如 1.5B、7B、8B 等）对硬件资源需求不同，本文将给出详细建议。

### 1.2 目标

- 提供 Windows、Linux、macOS 下 Ollama 的安装与环境配置详细指南  
- 讲解如何下载、运行 DeepSeek R1 模型，并提供不同模型尺寸的硬件配置推荐  
- 补充说明如何清理（删除）已安装的模型  
- 介绍如何将 Ollama 部署的模型对接 WebUI 前端，并列出当前主流的 WebUI 解决方案

---

## 二、硬件与系统要求

各型号配置要求：

| 版本    | 内存           | CPU              | GPU                 | 适用场景                   |
|---------|----------------|-------------------|----------------------|----------------------------|
| 1.5B    | 8GB+           | i5/Ryzen 5        | 集成显卡或低端独显   | 基础对话、简单文本生成      |
| 7B/8B   | 16GB+（建议24GB）| i7/Ryzen 7       | RTX 3060及以上       | 通用对话、代码生成          |
| 14B     | 32GB+          | i9/Ryzen 9        | RTX 3080/4070        | 长文本推理、专业应用        |
| 32B     | 64GB+          | 高性能多核服务器  | 双卡专业级GPU        | 科研计算、复杂检索          |
| 70B     | 128GB+         | 服务器级多核系统  | 多卡GPU集群          | 企业级私有化部署            |

> **提示**：实际配置需根据模型文件大小、使用场景和系统 I/O 性能进行合理规划。

---

## 三、安装与配置 Ollama

下面分别介绍 Windows、Linux、macOS 平台下 Ollama 的安装及环境配置，包括如何修改默认模型存放路径。

### 3.1 Windows 环境

#### 3.1.1 安装 Ollama

1. **下载安装**
   - 访问 [Ollama 下载页面](https://ollama.com/download)，选择 Windows 版下载安装包。
   - 双击安装程序，根据提示完成安装。

2. **验证安装**
   打开 CMD 或 PowerShell，输入：

```bash
ollama -v
```

如果输出版本信息（如 `ollama version is 0.3.7`），说明安装成功。

#### 3.1.2 修改默认模型存放路径

默认模型存储路径为 `C:\Users\{username}\.ollama\models`。为避免 C 盘空间不足，建议修改至其他盘符（如 D:）。

1. **创建新目录**
   确保在 D 盘创建目录，例如 `D:\ollama_models`。

2. **设置系统环境变量**
   在 CMD（以管理员身份运行）执行：

```shell
setx OLLAMA_MODELS "D:\ollama_models" /M
```

此命令会将环境变量写入系统，重启后生效。

3. **重启 Ollama 服务**
   关闭 Ollama 相关进程，再重新启动。

#### 3.1.3 其他配置

如需让局域网内其他设备访问，可在系统环境变量中设置：

```shell
setx OLLAMA_HOST "0.0.0.0" /M
```

这将使 Ollama 绑定到所有网络接口。

### 3.2 Linux 环境

#### 3.2.1 安装 Ollama

1. 使用一键安装脚本：
   ```bash
   curl -fsSL https://ollama.com/install.sh | sh
   ```
2. 验证安装：
   ```bash
   ollama -v
   ```

#### 3.2.2 配置模型存放路径

默认路径可能为 `/usr/share/ollama/.ollama/models`。若需修改：

1. 创建目标目录（例如 `/data/ollama/models`）：
   ```bash
   sudo mkdir -p /data/ollama/models
   sudo chown -R $(whoami):$(whoami) /data/ollama/models
   sudo chmod -R 775 /data/ollama/models
   ```
2. 编辑 systemd 服务文件 `/etc/systemd/system/ollama.service`，在 `[Service]` 部分添加：
   ```ini
   Environment="OLLAMA_MODELS=/data/ollama/models"
   Environment="OLLAMA_HOST=0.0.0.0"
   ```
3. 重载 systemd 并重启服务：
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart ollama
   ```

#### 3.2.3 清理已安装模型

- **通过命令行删除单个模型**  
  使用 `ollama rm 模型名称` 命令删除不需要的模型。例如：
  ```bash
  ollama rm deepseek-r1:1.5b
  ```
  该命令将会从本地清除指定模型的数据【citeturn1search2】。

- **手动清理全部模型文件**  
  若要彻底清理所有模型，可以删除模型存放目录下的内容，但请谨慎操作：
  ```bash
  rm -rf /data/ollama/models/*
  ```
  注意：删除前请确认备份重要数据。

#### 3.2.4 卸载 Ollama（可选）

如果需要卸载 Ollama，执行以下步骤：
```bash
sudo systemctl stop ollama
sudo systemctl disable ollama
sudo rm /etc/systemd/system/ollama.service
sudo rm $(which ollama)
sudo rm -rf /data/ollama/models
```
同时删除创建的 ollama 用户和组（如果已创建）。

### 3.3 macOS 环境

#### 3.3.1 安装 Ollama

1. 访问 [Ollama 下载页面](https://ollama.com/download) ，下载 macOS 版安装包（通常为 ZIP 格式），解压后将应用拖入 Applications 文件夹。
2. 启动 Ollama 应用后，打开终端输入：
   ```bash
   ollama -v
   ```
   验证安装成功。

#### 3.3.2 修改默认模型存放路径

macOS 默认存放路径为 `~/.ollama/models`。若希望修改为其他位置，例如：
1. 在终端执行：
   ```bash
   mkdir -p /Users/your_username/CustomOllamaModels
   launchctl setenv OLLAMA_MODELS "/Users/your_username/CustomOllamaModels"
   ```
2. 重启 Ollama 应用以使配置生效。

#### 3.3.3 清理模型

与 Linux 类似，可以在终端使用：
```bash
ollama rm deepseek-r1:1.5b
```
或手动删除 `~/.ollama/models` 目录下不需要的文件（建议先备份）。

---

## 四、下载与运行 DeepSeek R1 模型

在 Ollama 环境配置完成后，您可以使用以下命令下载并运行 DeepSeek R1 模型：

- **下载 DeepSeek R1 1.5B 模型**
  ```bash
  ollama run deepseek-r1:1.5b
  ```
- **下载 DeepSeek R1 7B 模型**
  ```bash
  ollama run deepseek-r1:7b
  ```

运行命令后，Ollama 会自动检测本地是否存在对应模型，如不存在则从模型库下载，下载完成后进入交互模式。退出时输入 `/bye`。

---

## 五、对接 WebUI 前端

本地部署模型后，为了提升交互体验，可以使用 WebUI 前端对接 Ollama 模型。以下是常见的 WebUI 项目介绍和接入方法。

### 5.1 常见可接入 Ollama 模型的 WebUI 项目

1. **Open WebUI**  
   - **简介**：Open WebUI 是一个功能丰富、完全开源的自托管 Web 用户界面，支持离线运行和与 Ollama 及 OpenAI API 兼容的模型对接。  
   - **项目地址**：[GitHub – open-webui/open-webui](https://github.com/open-webui/open-webui)  
   - **特点**：界面直观、支持 Markdown/LaTeX、可扩展性强、支持 RAG 功能等。  
   - **部署方式**：支持 Docker 部署（见下方示例）及 pip 安装。

2. **Ollama-webui-lite（LobeChat）**  
   - **简介**：这是一个轻量级的 WebUI，专为与 Ollama 后端对接设计，操作简单、启动快，适合资源有限的设备。  
   - **项目地址**：[GitHub – ollama-webui/ollama-webui-lite](https://github.com/ollama-webui/ollama-webui-lite)  
   - **特点**：简单易用，直接显示模型列表与对话界面。

3. **ChatGPT-Next-Web**  
   - **简介**：虽然主要面向 ChatGPT API，但经过配置后也可以兼容 Ollama 部署的模型，提供桌面客户端风格的交互体验。  
   - **项目地址**：[GitHub – ChatGPT-Next-Web](https://github.com/paradigmxyz/chatgpt-next-web)  
   - **特点**：支持多轮对话、历史记录、直观的界面，适合需要 ChatGPT 风格体验的用户。

4. **Lollms-webui**  
   - **简介**：另一个开源 WebUI 项目，专为本地部署 LLM 设计，可与 Ollama 后端对接，支持自定义模型和参数调优。  
   - **项目地址**：[GitHub – ParisNeo/lollms-webui](https://github.com/ParisNeo/lollms-webui)  
   - **特点**：灵活性高，支持多模型切换和深度定制。

> **注意**：虽然 Dify 平台也支持模型接入，但其主要定位于云端服务，且本地调用 Ollama 模型的配置较复杂，不在本文重点讨论范围内。

### 5.2 WebUI 部署示例

以 Open WebUI 为例，通过 Docker 部署的方法如下：

```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main
```

- **解释**：
  - `-p 3000:8080`：将容器内 8080 端口映射到主机 3000 端口。  
  - `--add-host=host.docker.internal:host-gateway`：使容器能够访问宿主机资源（尤其在 macOS/Windows 下常用）。  
  - `-v open-webui:/app/backend/data`：挂载数据卷以保存 WebUI 配置和历史数据。  
  - `OLLAMA_BASE_URL` 环境变量：如果 Ollama 部署在其他主机或自定义 IP 上，可通过 `-e OLLAMA_BASE_URL=http://<your-ip>:11434` 指定。

启动后，在浏览器中访问 [http://localhost:3000](http://localhost:3000) 即可看到 WebUI 界面。  
在 WebUI 的"模型设置"中，可自动检测到 Ollama 后台的模型列表（如 DeepSeek R1），选择后即可开始对话。

### 5.3 对接注意事项

- **网络配置**：确保 WebUI 容器能够访问 Ollama 服务。如果两者部署在不同主机或 Docker 网络中，建议设置合适的 `OLLAMA_BASE_URL` 或使用 Docker 网络模式（如 `--network=host`）。
- **权限与认证**：部分 WebUI 支持用户认证和角色管理，可根据实际需求配置相关参数。  
- **界面自定义**：大部分 WebUI 项目均支持自定义界面和交互提示词，建议根据业务需求进行调整。

---

## 六、清理与管理已安装模型

### 6.1 使用 Ollama 命令删除模型

- 删除单个模型：  
  使用 `ollama rm 模型名称` 命令删除不需要的模型。例如：
  ```bash
  ollama rm deepseek-r1:1.5b
  ```
  此命令会清除对应模型的所有文件和缓存数据【citeturn1search2】。

### 6.2 手动清理模型目录

- 如果需要彻底清理所有模型（注意：操作前请备份重要数据），可以手动删除模型存放目录中的内容。例如，在 Linux 下：
  ```bash
  rm -rf /data/ollama/models/*
  ```
- 在 Windows 或 macOS 上，则需要进入指定的存放路径（如 `D:\ollama_models` 或 `~/CustomOllamaModels`），删除不需要的文件夹和数据。

### 6.3 定期维护建议

- 建议定期检查 `ollama list` 命令输出，确认是否有旧版本或不再使用的模型占用存储空间。  
- 如有更新需求，可使用 `ollama pull` 命令进行增量更新；不再需要的模型应及时删除以释放磁盘空间。

---

## 七、总结

本文详细讲解了如何在本地部署大模型，以 DeepSeek R1 为例，从环境准备、跨平台安装与配置、模型下载、运行调优，到如何清理已安装模型，以及如何对接 WebUI 前端实现交互。主要内容包括：

1. **硬件与系统要求**：根据模型尺寸给出详细的内存、CPU、GPU 推荐配置。  
2. **安装与配置 Ollama**：分别针对 Windows、Linux、macOS 介绍安装方法、修改模型存放路径、设置监听地址，以及删除模型的方法。  
3. **下载与运行 DeepSeek R1 模型**：演示不同参数规模模型的下载与交互操作。  
4. **对接 WebUI 前端**：详细介绍可与 Ollama 集成的 WebUI 项目，如 Open WebUI、Ollama-webui-lite（LobeChat）、ChatGPT-Next-Web、Lollms-webui 等，附上部署示例与注意事项。  
5. **清理与维护**：提供使用命令行删除单个模型和手动清理模型目录的方法，以及定期维护建议。

希望这篇全面的教程能为您提供真正实用的干货，帮助您从零开始构建、管理和优化本地大模型部署系统，并通过直观的 WebUI 实现更佳的交互体验。如有任何疑问或改进建议，欢迎在评论区交流，共同进步！
