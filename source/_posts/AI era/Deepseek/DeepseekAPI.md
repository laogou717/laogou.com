---
title: "Deepseek满血版API"
description: "深入介绍 Deepseek API 的本地部署、知识库搭建以及各种开源 AI 模型的使用方法"
date: "2025-02-10"
cover: https://tvax1.sinaimg.cn/large/006yNU4zly1i57won2u6oj30k408mweu.jpg
categories: AI纪元
color: '#686DF5'
tags:
  - Deepseek
  - API
  - Ollama
  - Cherry Studio
ai_text: "对 Cherry Studio 客户端与多平台 Deepseek API（硅基流动、腾讯云 LKE、阿里云百炼、GitHub Models）以及本地 Ollama 部署做了手把手说明，包含配置步骤、调用示例与注意事项，适合想快速上手一站式模型管理与本地/云端混合调用的同学。"
---

> 相关链接：
> - YouTube：<https://www.youtube.com/embed/tvSeIZ-NCOo?si=8Mz_zX7mlZ-DcdBW>
> - B站：<https://player.bilibili.com/player.html?isOutside=true&aid=113976553772978&bvid=BV1cJNQeSEC7&cid=28305392564&p=1&autoplay=0>
> - 附件下载：<https://pan.baidu.com/s/12tHb-jRw3brGBehUnQI4Yg?pwd=6666>

## Cherry Studio 客户端

Cherry Studio 是一个现代化的 AI 模型管理和调用工具：

1. **下载安装**
   - 官网：[https://cherry-ai.com/](https://cherry-ai.com/)
   - GitHub：[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)
   - 网盘下载：支持百度网盘和 123 网盘

2. **配置说明**
   - 支持多种模型源配置：
     - 硅基流动
     - 腾讯云 LKE
     - 阿里云百炼
     - GitHub Models
     - Ollama
   - 知识库功能：
     - 支持文档导入和量化
     - 可选择不同的嵌入模型
     - 支持多知识库管理

3. **使用步骤**
   - 添加模型源：
     1. 点击左下角设置按钮
     2. 选择或添加模型源
     3. 配置 API 密钥和端点
     4. 添加所需模型
   - 知识库配置：
     1. 点击左侧知识库按钮
     2. 创建新知识库
     3. 选择嵌入模型
     4. 导入文档等待量化
     5. 在聊天时勾选知识库即可使用

## DeepseekAPI平台

以下是一些可以快速体验和部署 AI 模型的平台：

1. **硅基流动**
   - 访问地址：[https://cloud.siliconflow.cn/i/Oj0qFpgb](https://cloud.siliconflow.cn/i/Oj0qFpgb)
   - 特点：
     - 通过邀请链接注册可获得 2,000 万 TOKEN
     - 支持知识库构建和 API 调用
     - 提供完整的 API 接口和文档
   - 使用步骤：
     1. 通过链接注册（可选择是否使用邀请码）
     2. 进入控制台创建 API 密钥
     3. 在应用中配置并开始使用

2. **腾讯云 LKE**
   - API 配置：[控制台设置](https://console.cloud.tencent.com/lkeap/settings)
   - 在线体验：[体验中心](https://lke.cloud.tencent.com/lke#/experience-center/home?origin=knowledge_engine)
   - API 端点：`https://api.lkeap.cloud.tencent.com`
   - 可用模型：
     - `deepseek-r1`: Deepseek 基础对话模型
     - `deepseek-v3`: Deepseek 增强版对话模型
   - 特点：
     - 提供 1,000 万免费 TOKEN
     - 支持联网搜索能力
     - 可创建自定义应用和知识库
   - 调用示例：
     ```bash
     curl -X POST "https://api.lkeap.cloud.tencent.com/v1/chat/completions" \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer YOUR_API_KEY" \
       -d '{
         "model": "deepseek-v3",
         "messages": [
           {"role": "user", "content": "你好，请介绍一下你自己"}
         ],
         "temperature": 0.7
       }'
     ```

3. **阿里云百炼**
   - 访问地址：[百炼控制台](https://bailian.console.aliyun.com/#/home)
   - 特点：
     - 提供 1,000 万免费 TOKEN
     - 支持 Deepseek 模型调用
     - 简单的 API 接入流程
   - 使用步骤：
     1. 登录控制台
     2. 选择 Deepseek 模型
     3. 创建并获取 API 密钥

4. **GitHub Models**
   - 访问地址：[GitHub Marketplace](https://github.com/marketplace?type=models)
   - 特点：
     - 提供多种开源模型，包括 O3 mini、O1 和 Deepseek
     - 支持 API 调用
     - 可设置 TOKEN 有效期
   - 使用步骤：
     1. 登录 GitHub 账户
     2. 选择需要的模型（如 Deepseek R1）
     3. 创建 API TOKEN（可设置有效期）
     4. 在应用中配置并使用

## 本地部署 - Ollama

Ollama 提供了便捷的本地 AI 模型部署方案：

1. **安装方法**
   - 官方下载：[https://ollama.com/](https://ollama.com/)
   - 国内加速：[百度网盘下载](https://pan.baidu.com/s/12tHb-jRw3brGBehUnQI4Yg?pwd=6666)

2. **模型部署**
   ```bash
   # 查看已安装模型
   ollama list
   
   # 安装新模型
   ollama pull deepseek-coder:7b-instruct-q4_K_M
   ```

3. **Cherry Studio 集成**
   - 无需 API 密钥（可随意填写）
   - 添加模型时使用 `ollama list` 显示的模型名称
   - 支持与知识库结合使用

## 注意事项

1. **网络问题**
   - Ollama 下载可能遇到速度慢或中断问题
   - 建议使用网盘下载离线包

2. **资源占用**
   - 本地部署需要考虑硬件配置
   - 70B 模型需要较高配置支持

3. **API 限制**
   - 各平台 TOKEN 额度不同
   - 建议合理使用免费额度

*文章和视频会持续更新，欢迎关注！如有问题可在评论区留言。*
