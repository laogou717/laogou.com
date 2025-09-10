---
title: Chat ttsAI语音项目-发布十天狂砍20K⭐️!
cover: https://img.laogou717.com/file/ce9b9909ff9fe1d453b79.jpg
categories: AI纪元
tags:
  - chattts
  - GitHub
  - 部署
date: 2024/06/6 05:00:00
color: '#fbbe11'
ai_text: >-
  GitHub 上的 ChatTTS 项目火爆，支持多说话人自然对话语音合成，获得 20K star。 ChatTTS 能预测和控制语音中的笑声和停顿，让语音更加生动自然，效果超越大多数开源 TTS 模型。
  本文介绍了在线体验、快速本地部署、Docker 部署 ChatTTS，以及通过 FastAPI 本地生成音频的详细步骤。
---
![](https://img.laogou717.com/file/d3aeab11e0f7a814593ad.jpg)
## 前言
> 
> 🤔 最近GitHub上一个叫做[Chattts](https://github.com/2noise/ChatTTS)的超酷项目非常火,短短十天就在GitHub上收获了**20K的star**,今天我们就来看看怎么样去使用它吧。
## 亮点

### 对话语音合成
ChatTTS 能支持多说话人互动对话，效果非常自然，像真人聊天一样。还能预测和控制语音中的笑声、停顿等细节，让语音更加生动。
在语调上，ChatTTS 真的超越了大多数开源的 TTS 模型，听起来更加自然和有表现力。

## 如何快速开始使用

### 在线体验
访问[chattts.com](https://chattts.com)即可进行在线操作体验。
![](https://img.laogou717.com/file/f23cd0dd2f722edf047b5.png)
<iframe src="https://dzkaka-chattts.hf.space/" width="100%" height="600px"></iframe>

## 本地部署
说实话非常**不推荐**在本地部署,因为**太tm卡了**{% inline_img https://img.laogou717.com/file/818be20f77a753b2a9790.png '' 40px %} 不过如果你想的话,可以通过以下步骤在本地安装和运行ChatTTS。


{% fold 点击查看部署教程😁 %}

### 步骤1：从GitHub下载代码

打开终端并运行以下命令来克隆ChatTTS代码库：

```sh
git clone https://github.com/2noise/ChatTTS
```

### 步骤2：安装依赖项

确保你已经安装了Python和pip。接着运行以下命令来安装必要的依赖项：

```sh
pip install torch ChatTTS
```

### 步骤3：导入所需的库

在你的Python脚本中导入必要的库：

```python
import torch
import ChatTTS
from IPython.display import Audio
```

### 步骤4：初始化ChatTTS

创建一个ChatTTS类的实例并加载预训练的模型：

```python
chat = ChatTTS.Chat()
chat.load_models()
```

### 步骤5：准备你的文本

定义你想要转换为语音的文本：

```python
texts = ["Hello, welcome to ChatTTS!"]
```

### 步骤6：生成语音

使用infer方法从文本生成语音。设置use_decoder=True以启用解码器：

```python
wavs = chat.infer(texts, use_decoder=True)
```

### 步骤7：播放音频

使用IPython.display中的Audio类播放生成的音频。将采样率设置为24,000 Hz并启用自动播放：

```python
Audio(wavs[0], rate=24_000, autoplay=True)
```

{% endfold %}


## 本地、Docker部署API
这个方法来源于“https://github.com/ultrasev/ChatTTS ” , 支持docker一键部署成API,然后通过其他应用或者curl调用。


{% fold 点击查看部署教程😁 %}

### FastAPI 服务本地部署和使用指南

#### 本地部署

1. 安装依赖：
```sh
pip3 install -r requirements.txt
```

2. 启动服务：
```sh
uvicorn main:app --host "0.0.0.0" --port 8000
```

#### 使用示例

发送 POST 请求，生成音频并保存到本地：

```sh
curl -X POST -H 'content-type: application/json' -d \
'{"text":"朋友你好啊，今天天气怎么样？", "output_path": "abc.wav", "seed":232}' \
http://localhost:8000/tts
```

参数说明：
- `text`: 要转换的文本
- `output_path`: 音频保存路径
- `seed`: 音色种子，不同种子会产生不同音色，默认值为697

#### Docker 部署

运行 Docker 容器：

```sh
docker run -d --name chattts -p8000:8000 -v /tmp/audio:/audio ghcr.io/ultrasev/chattts:latest
```

注意：
- `/tmp/audio` 为本地音频文件存储路径
- `/audio` 为容器内音频文件存储路径

发送 POST 请求，生成音频并保存到 Docker 容器中：

```sh
curl -X POST -H 'content-type: application/json' -d \
'{"text":"朋友你好啊，今天天气怎么样？", "output_path": "/audio/abc.wav", "seed":232}' \
http://localhost:8000/tts
```

{% endfold %}


## 整合包打开即用
逛B站时发现了一个UP主[嘟嘟实验室](https://www.bilibili.com/video/BV1pM4m1z7h9)做的整合包,支持Win系统、Mac系统。
![](https://img.laogou717.com/file/f45dd6af6fc696ed8560e.png)
{% link "原作者链接" "[转存链接](https://pan.baidu.com/s/1FihkQU3j8pRoo7eoq68zOA?pwd=6666)" https://pan.baidu.com/s/1t3XddrF8KBJ2dYqmwvqOQw?pwd=nmhx %}

## 最后叨叨
如果上述的一些环节出现问题,可以选择询问ChatGPT来寻求帮助,或者直接使用在线演示网站。假设你不知道怎么使用GPT4,可以访问我的 [AI导航网站](https://nav.laogou717.com)。

## 引用链接
- https://github.com/2noise/ChatTTS
- https://github.com/ultrasev/ChatTTS
- [嘟嘟实验室](https://www.bilibili.com/video/BV1pM4m1z7h9)