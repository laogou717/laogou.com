---
title: 一篇非常啰嗦的Hexo搭建教程
cover: https://img.laogou717.com/file/e32c629a206fa62eb12ea.jpg
categories: 搭建网站
date: 2024/07/31 00:30:00
color: '#007acc'
tags:
  - 网站搭建
  - GitHub
  - 部署
  - Hexo
  - 热门
ai_text: 一篇关于搭建网站的文章,但也不那么详细
---
## 前言

>本来想写一篇长文的,但精神不济,所以各位就凑活看视频吧

### 一些链接
- [Node.js](https://nodejs.org/) 必需的环境 安装最新版Node.js。
- [git](http://git-scm.com/) 必需的环境 版本控制，管理代码。
- [watt toolkit](https://watt-toolkit.org/)国内访问GitHub就靠它了
- [npmmirror](https://npmmirror.com/)源淘宝NPM镜像源
- [Hexo](https://hexo.io)博客官网,可以查找更多主题
- [GitHub](GitHub.conm)需要有一个GitHub账号，用来保存你的代码。
- [Vscode](https://code.visualstudio.com/)方便后续操作非必需

### 一些命令
#### 验证Node.js和npm版本
  ```bash
  node -v
  npm -v
  git -v
  ```
  如果显示版本号，则代表安装成功。
#### 安装Hexo
  ```bash
  npm install -g hexo-cli
  ```
  如果网络被阉，可以使用阿里云镜像源进行安装：
  ```bash
  npm install -g cnpm --registry=https://registry.npmmirror.com
  cnpm install -g hexo-cli
  ```

#### 初始化Hexo项目
  选择一个位置创建Hexo项目文件夹：
  ```bash
  hexo init laogou
  ```
  卡死了可以直接按下 **CTRL+C** 终止。
  然后CD进入项目目录：
  ```bash
  cd laogou
  ```
  手动切换阿里镜像源安装项目依赖：
  ```bash
  cnpm install
  ```

#### 出现SSL错误,可绕过证书验证（仅用于开发环境）：
  ```bash
  git config --global http.sslVerify false
  ```

#### 选择并安装主题
- 选择一个Hexo主题，例如Butterfly。
- 访问主题的GitHub页面，点击Code，下载压缩包。解压缩包到Hexo项目的`themes`目录下。或者直接通过git进行克隆
- 修改Hexo根目录配置文件`_config.yml`(非主题的_config.yml)
设置主题：
  ```yaml
  theme: butterfly
  ```

#### 本地生成和预览
- 清理缓存：
  ```bash
  hexo clean
  # 或者简写为 hexo c 或 hexo cl
  ```
- 生成静态文件：
  ```bash
  hexo generate
  # 或者简写为 hexo g
  ```
- 启动本地服务器进行预览：
  ```bash
  hexo server
  # 或者简写为 hexo s
  ```
  在浏览器中访问`http://localhost:4000`查看效果。

#### 推送或部署到GitHub
- 确保已经在GitHub上创建了一个仓库。
- 安装Hexo部署插件：
  ```bash
  官方源
  npm install hexo-deployer-git --save  
  阿里源
  cnpm install hexo-deployer-git --save
  ```
- 配置Hexo部署信息，在`_config.yml`文件中的规范写法：
  ```yaml
  deploy:
    type: git
    repo: https://<你的访问令牌>@github.com/你的用户名/你的仓库名.git
    branch: main
  ```
  例如：
  ```yaml
  deploy:
    type: git
    repo: https://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@github.com/GGB60/blog.git
    branch: main
  ```
- 推到GitHub：
  ```bash
  hexo deploy
  # 或者简写为 hexo d
  ```


### 使用免费容器进行部署
- 例如:https://zeabur.com
- 用GitHub账户进行授权 
- 从GitHub仓库中进行同步

### 总结
通过以上步骤，你应该已经成功安装并配置了Hexo博客，并且能轻易将其部署到互联网。
