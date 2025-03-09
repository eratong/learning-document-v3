---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "记录编程学习之旅,分享实用工具框架"
  text: "XUTONGTONG"
  tagline: There is no best, only better!
  actions:
    - theme: brand
      text: 快速开始
      link: /data/架构/架构
    - theme: alt
      text: 了解更多
      link: /data/readme

features:
  - title: 后端
    link: /data/后端/架构/架构
    linkText: 立即前往
  - title: 前端
    link: /data/前端/javascript
    linkText: 立即前往
  - title: 工具
    link: /data/工具/工具

#  - title: 架构
#    details: 架构思想、设计、工具等
#    link: /data/架构/架构
#    linkText: 立即前往
#    # icon: 
#    #   src: ./.vitepress/img/底层架构.png
#  - title: 前端语言
#    link: http://localhost:5173/learning-document-v3/
#  - title: 后端语言
#    details: js、java、python、go等
#    link: /data/编程语言/js/js
#    # 图片
#    # icon: xx
#    # icon:
#    #   src: ./.vitepress/img/编程.png
#    # rel: ss
#
#  - title: 微服务框架
#    details: 微服务相关组件框架
#    link: /data/微服务框架/elasticsearch
#
#  - title: 部署
#    details: docker、tomcat、nginx等
#    link: /data/部署/部署
#    # icon:
#    #   src: ./.vitepress/img/编程.png
#
#  - title: 代码管理
#    details: git相关
#    link: /data/代码管理/git
#
#  - title: 工具
#    details: 抓包、压测等工具
#    link: /data/工具/工具
#    # icon: 🛠️
#
#
#
#
#  - title: 接口管理
#    details: swagger之类的
#    link: /data/接口管理/swagger
#    # icon:
#    #   src: ./.vitepress/img/编程.png
#
#  - title: 数据库
#    details: mysql、postgresql等
#    link: /data/数据库/mysql
#    # icon:
#    #   src: ./.vitepress/img/编程.png
#
#  - title: 面试
#    details: 面试技巧、题目
#    link: /data/面试


---

<!-- ???????不知道 -->
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>