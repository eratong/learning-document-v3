// import { link } from 'fs'
import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config

export default defineConfig({
  title: "导航",
  // 打包资源路径
  // base: '/',
  base: '/learning-document-v3',
  // 没效果 todo
  lang: 'zh-CN',
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh'
    }
  },
  // head: [['meta', { name: 'keywords', content: 'HTML, CSS, JavaScript' }]],
  head: [['link', { rel: 'icon', href: '.vitepress/img/米饭.png' }]],
  description: "个人博客",
  // 最下面显示最后更新时间
  lastUpdated: true,
  // 不显示地址栏的.html
  cleanUrls: true,
  themeConfig: {
    // 左上角导航边上的图片
    logo: '',
    // 搜索功能
    search: {
      provider: 'local',
      // 没效果 todo
      // options: {
      //   locales: {
      //     zh: {
      //       translations: {
      //         button: {
      //           buttonText: '搜索文档',
      //           buttonAriaLabel: '搜索文档'
      //         },
      //         modal: {
      //           noResultsText: '无法找到相关结果',
      //           resetButtonTitle: '清除查询条件',
      //           footer: {
      //             selectText: '选择',
      //             navigateText: '切换'
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    },
    // 右上导航
    nav: [
      { text: '首页', link: '/' },
      { text: '联系方式', link: '/data/link' },
      // { text: '联系方式', link: '/data/link' , activeMatch: '/data/link'}
    ],
    // 左边导航
    // sidebar: [
    //   {
    //     text: '后端',
    //     items: [
    //       { text: 'java', link: '/data/后端/java' },
    //       { text: 'python', link: '/data/后端/python' }
    //     ],
    //     // 是否支持折叠
    //     collapsed: true
    //   },
    //   {
    //     text: '架构',
    //     items: [
    //       { text: '架构', link: '/data/架构/架构' }
    //     ]
    //   },
    //   {
    //     text: 'apollo',
    //     items: [
    //       { text: 'apollo', link: '/data/apollo' }
    //     ]
    //   },
    //   {
    //     text: 'nacos',
    //     items: [
    //       { text: 'nacos', link: '/data/nacos' }
    //     ]
    //   },
    //   {
    //     text: 'kafka',
    //     items: [
    //       { text: 'kafka', link: '/data/kafka' }
    //     ]
    //   },
    //   {
    //     text: 'es',
    //     items: [
    //       { text: 'es', link: '/data/es' }
    //     ]
    //   },
    //   {
    //     text: '消息中间件',
    //     items: [
    //       { text: 'rabbitmq', link: '/data/消息中间件/rabbitmq' }
    //     ]
    //   },
    //   {
    //     text: '数据库',
    //     items: [
    //       { text: 'mysql', link: '/data/数据库/mysql' },
    //       { text: 'redis', link: '/data/数据库/redis' }
    //     ]
    //   }, {
    //     text: 'xxljob',
    //     items: [
    //       { text: 'xxljob', link: '/data/xxljob' }
    //     ]
    //   },
    //   {
    //     text: '接口管理',
    //     items: [
    //       { text: 'swagger', link: '/data/接口管理/swagger' },
    //       { text: 'smart-doc', link: '/data/接口管理/smart-doc' },
    //       { text: 'yapi', link: '/data/接口管理/yapi' },
    //     ]
    //   },
    //   {
    //     text: '工具',
    //     items: [
    //       { text: '抓包', link: '/data/工具/工具' },
    //       { text: '操作系统', link: '/data/工具/操作系统' }
    //     ]
    //   },
    //   {
    //     text: 'markdown',
    //     items: [
    //       { text: 'markdown', link: '/data/markdown' }
    //     ]
    //   },
    //   {
    //     text: '了解更多',
    //     items: [
    //       { text: '了解更多', link: '/data/readme' }
    //     ]
    //   },
    //   {
    //     text: '联系方式',
    //     items: [
    //       { text: '联系方式', link: '/data/link' }
    //     ]
    //   },
    //   {
    //     text: 'Config & API Reference',
    //     base: '/data/reference/',
    //     link: 'test'
    //   },
    // ],


    sidebar: {
      '/data': { base: '/data', items: sidebarGuide() },
      '/data/前端': { base: '/data/前端', items: sidebarWeb() },
      '/data/后端': { base: '/data/后端', items: sidebarServer() },
      '/data/工具': { base: '/data/工具', items: sidebarTool() },
      '/data/后端/编程语言/java': { base: '/data/后端/编程语言/java', items: sidebarJava() },
      '/data/link': { base: '/data', items: sidebarLink() },
      '/data/readme': { base: '/data', items: sidebarReademe() },
    },

    // 是否显示右边导航
    aside: true,
    // 右边导航树
    outlineTitle: "当前页导航",
    outline: "deep",
    // 右上角logo
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      { icon: { svg: '<svg t="1693494709184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6615" width="200" height="200"><path d="M99 679.1c-7.2 0-14-4.4-16.8-11.5-5.1-13.1-9.6-26.6-13.5-40.2-2.7-9.6 2.8-19.5 12.4-22.3 9.6-2.7 19.5 2.8 22.3 12.4 3.6 12.5 7.8 25 12.4 37.1 3.6 9.3-1 19.7-10.3 23.3-2.1 0.8-4.3 1.2-6.5 1.2z" fill="" p-id="6616"></path><path d="M512 953.4c-86.2 0-165.4-20-235.4-59.4-66-37.2-121.5-91.5-160.6-157-5.1-8.5-2.3-19.6 6.2-24.7 8.5-5.1 19.6-2.3 24.7 6.2C222.4 844.9 355.4 917.4 512 917.4c240.8 0 417.2-170.5 425.7-408H86.4c0.5 12.7 1.5 25.3 2.9 37.7 1.2 9.9-5.9 18.8-15.7 20-9.9 1.2-18.8-5.9-20-15.8-2.3-19.7-3.5-39.8-3.5-59.9 0-9.9 8.1-18 18-18h888c9.9 0 18 8.1 18 18 0 125.2-45.3 241-127.6 326.1-41.4 42.8-90.6 76.3-146.2 99.5-58 24.1-121.4 36.4-188.3 36.4zM693.1 285.9c-7.8 0-15.1-5.2-17.3-13.1-21-74.1-89.5-125.8-166.6-125.8s-145.6 51.7-166.6 125.8c-2.7 9.6-12.7 15.1-22.2 12.4-9.6-2.7-15.1-12.7-12.4-22.2 12.2-42.9 38.5-81.6 74.1-108.9 36.8-28.2 80.8-43.1 127.2-43.1 46.4 0 90.4 14.9 127.2 43.1 35.6 27.3 61.9 66 74.1 108.9 2.7 9.6-2.8 19.5-12.4 22.2-1.8 0.5-3.4 0.7-5.1 0.7z" fill="" p-id="6617"></path><path d="M908.7 509.4H116.3c-7.9 0-14.9-5.2-17.2-12.7-4.4-14.4-6.6-29.3-6.6-44.4 0-37.7 13.9-73.8 39.2-101.8 21.9-24.3 50.9-40.6 82.6-47 6.6-32.1 23.1-61.5 47.4-84 25.9-24 59.1-38.6 94.1-41.5 39.6-42.6 95-66.9 153.4-66.9 59.3 0 115.3 24.9 154.9 68.7 35.3 1.8 69 15.3 95.7 38.6 25.2 21.9 42.7 51.1 50.2 83.3 32 7.5 61 25 82.8 50.1 24.9 28.6 38.6 65.3 38.6 103.3 0 13.9-1.8 27.8-5.4 41.1-2.1 7.7-9.2 13.2-17.3 13.2z m-778.3-36h763.7c0.9-6.1 1.4-12.3 1.4-18.4 0-59.7-44.5-111.5-103.5-120.3-7.8-1.2-14-7.3-15.1-15.2-8.8-59.3-60.7-104-120.7-104h-0.3-0.1c-5.3 0-10.4-2.4-13.8-6.4-33-39.4-81.4-62-132.8-62-50.5 0-98.3 21.9-131.3 60.2-3.3 3.8-8 6.1-13 6.2-59.9 2-110.2 48.4-117.1 107.9-1 8.4-7.6 15-16 15.8-58.9 6.3-103.3 55.8-103.3 115.1 0 7.1 0.7 14.1 1.9 21.1z" fill="" p-id="6618"></path><path d="M416.4 288.8m-25.3 0a25.3 25.3 0 1 0 50.6 0 25.3 25.3 0 1 0-50.6 0Z" fill="" p-id="6619"></path><path d="M551.5 244.6m-25.3 0a25.3 25.3 0 1 0 50.6 0 25.3 25.3 0 1 0-50.6 0Z" fill="" p-id="6620"></path><path d="M666.8 387.6m-25.3 0a25.3 25.3 0 1 0 50.6 0 25.3 25.3 0 1 0-50.6 0Z" fill="" p-id="6621"></path><path d="M507.3 372.6m-25.3 0a25.3 25.3 0 1 0 50.6 0 25.3 25.3 0 1 0-50.6 0Z" fill="" p-id="6622"></path><path d="M323.2 387.6m-25.3 0a25.3 25.3 0 1 0 50.6 0 25.3 25.3 0 1 0-50.6 0Z" fill="" p-id="6623"></path></svg>' }, link: '' }
      //  { icon: {svg:''}, link: '' }
    ],
    lastUpdatedText: "最近更新时间",
    docFooter: { prev: '上一篇', next: '下一篇' },
    // 网页底部描述
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Evan You'
    },
  },

  // 站点地图 ????
  sitemap: {
    hostname: 'http://localhost:5173/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  // 打包输出的目录
  outDir: '../dist'
})
// function navGuide(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: '联系方式',
//       items: [
//         { text: '联系方式', link: '/link' },
//       ],
//     }]
// }

// function reademeGuide(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: '了解更多',
//       items: [
//         { text: '了解更多', link: '/reademe' },
//       ],
//     }]
// }

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '前端',
      items: [
        { text: 'vue', link: '/前端/vue/vue' },
      ],
    },
    {
      text: '后端',
      items: [
        { text: '架构', link: '/后端/架构/架构' },
      ],
    },
    {
      text: '工具',
      items: [
        { text: '工具', link: '/工具/工具' },
      ],
    }
  ]
  //   return [
  //     {
  //       text: '架构',
  //       items: [
  //         { text: '架构设计', link: '/架构/架构' },
  //         { text: '算法逻辑', link: '/架构/算法' },
  //         { text: '设计模式', link: '/架构/设计模式' },
  //         { text: '操作系统', link: '/架构/操作系统' }
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },
  //     {
  //       text: '后端语言',
  //       items: [
  //         { text: 'js', link: '/编程语言/js/js' },
  //         { text: 'java', link: '/编程语言/java/java' },
  //         { text: 'python', link: '/编程语言/python/python' },
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },
  //     {
  //       text: '微服务框架',
  //       items: [
  //         { text: 'elasticsearch', link: '/微服务框架/elasticsearch' },
  //         {
  //           text: '配置中心',
  //           base: '/data/微服务框架',
  //           items: [
  //             { text: 'apollo', link: '/配置中心/apollo' },
  //             { text: 'nacos', link: '/注册中心/nacos' },
  //           ]
  //         },
  //         {
  //           text: '注册中心',
  //           base: '/data/微服务框架',
  //           items: [
  //             { text: 'eureka', link: '/注册中心/eureka' },
  //             { text: 'nacos', link: '/注册中心/nacos' },
  //           ]
  //         },
  //         {
  //           text: '消息中间件',
  //           base: '/data/微服务框架/消息中间件',
  //           items: [
  //             { text: 'rabbitmq', link: '/rabbitmq' },
  //             { text: 'rocketmq', link: '/rocketmq' },
  //             { text: 'kafka', link: '/kafka' },
  //           ]
  //         },
  //         {
  //           text: '定时任务',
  //           base: '/data/微服务框架',
  //           items: [
  //             { text: 'xxljob', link: '/定时任务/xxljob' },
  //           ]
  //         },
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },
  //     {
  //       text: '部署',
  //       items: [
  //         { text: '部署', link: '/部署/部署' },
  //         { text: 'tomcat', link: '/部署/tomcat' },
  //         { text: 'nginx', link: '/部署/nginx' },
  //         { text: 'docker', link: '/部署/docker' },
  //         { text: 'elk', link: '/部署/elk' },
  //         { text: 'kubernetes', link: '/部署/kubernetes' },
  //         { text: 'zookeeper', link: '/部署/zookeeper' },
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },
  //     {
  //       text: '代码管理',
  //       items: [
  //         { text: 'git', link: '/代码管理/git' },
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },
  //     {
  //       text: '工具',
  //       items: [
  //         { text: '工具', link: '/工具/工具' },
  //         { text: '操作系统', link: '/工具/操作系统' },
  //         { text: 'markdown', link: '/工具/markdown' }
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },

  //     {
  //       text: '接口管理',
  //       items: [
  //         { text: 'swagger', link: '/接口管理/swagger' },
  //         { text: 'smart-doc', link: '/接口管理/smart-doc' },
  //         { text: 'yapi', link: '/接口管理/yapi' },
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },
  //     {
  //       text: '数据库',
  //       items: [
  //         { text: 'mysql', link: '/数据库/mysql' },
  //         { text: 'redis', link: '/数据库/redis' },
  //         { text: 'mongodb', link: '/数据库/mongodb' },
  //         { text: 'postgresql', link: '/数据库/postgresql' },
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     }, 
  //     {
  //       text: '面试',
  //       items: [
  //         { text: '面试', link: '/面试' },
  //         { text: '面试题2024', link: '/面试题2024' },
  //       ],
  //       // 是否支持折叠
  //       collapsed: true
  //     },
  //     // {
  //     //   text: '了解更多',
  //     //   items: [
  //     //     { text: '了解更多', link: '/readme' }
  //     //   ]
  //     // },
  //     // {
  //     //   text: '联系方式',
  //     //   items: [
  //     //     { text: '联系方式', link: '/link' }
  //     //   ]
  //     // },

  //   ]
}
function sidebarWeb(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '前端',
      items: [
        { text: 'javascript', link: '/javascript' },
        { text: 'typescript', link: '/typescript' },
        { text: 'vue', link: '/vue' },
        { text: 'uniapp', link: '/uniapp' },
        { text: 'webpack', link: '/webpack' },
        { text: 'vscode', link: '/vscode' },
        { text: '关于前端', link: '/关于前端' },
      ]
    }
  ]
}

function sidebarServer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '架构',
      items: [
        { text: '架构设计', link: '/架构/架构' },
        { text: '算法逻辑', link: '/架构/算法' },
        { text: '设计模式', link: '/架构/设计模式' },
        { text: '操作系统', link: '/架构/操作系统' }
      ],
      // 是否支持折叠
      collapsed: true
    },
    {
      text: '后端语言',
      items: [
        { text: 'java', link: '/编程语言/java/java' },
        { text: 'python', link: '/编程语言/python/python' },
        { text: 'go', link: '/编程语言/go/go' },
      ],
      // 是否支持折叠
      collapsed: true
    },
    {
      text: '微服务框架',
      items: [
        { text: 'elasticsearch', link: '/微服务框架/elasticsearch' },
        {
          text: '配置中心',
          base: '/data/后端/微服务框架',
          items: [
            { text: 'apollo', link: '/配置中心/apollo' },
            { text: 'nacos', link: '/注册中心/nacos' },
          ]
        },
        {
          text: '注册中心',
          base: '/data/后端/微服务框架',
          items: [
            { text: 'eureka', link: '/注册中心/eureka' },
            { text: 'nacos', link: '/注册中心/nacos' },
          ]
        },
        {
          text: '消息中间件',
          base: '/data/后端/微服务框架/消息中间件',
          items: [
            { text: 'rabbitmq', link: '/rabbitmq' },
            { text: 'rocketmq', link: '/rocketmq' },
            { text: 'kafka', link: '/kafka' },
            { text: 'mqtt', link: '/mqtt' },
          ]
        },
        {
          text: '定时任务',
          base: '/data/后端/微服务框架',
          items: [
            { text: 'xxljob', link: '/定时任务/xxljob' },
          ]
        },
      ],
      // 是否支持折叠
      collapsed: true
    },
    {
      text: '部署',
      items: [
        { text: '部署', link: '/部署/部署' },
        { text: 'tomcat', link: '/部署/tomcat' },
        { text: 'nginx', link: '/部署/nginx' },
        { text: 'docker', link: '/部署/docker' },
        { text: 'elk', link: '/部署/elk' },
        { text: 'kubernetes', link: '/部署/kubernetes' },
        { text: 'zookeeper', link: '/部署/zookeeper' },
      ],
      // 是否支持折叠
      collapsed: true
    },
    {
      text: '接口管理',
      items: [
        { text: 'swagger', link: '/接口管理/swagger' },
        { text: 'smart-doc', link: '/接口管理/smart-doc' },
        { text: 'yapi', link: '/接口管理/yapi' },
        { text: 'knife4j', link: '/接口管理/knife4j' },
      ],
      // 是否支持折叠
      collapsed: true
    },
    {
      text: '数据库',
      items: [
        { text: 'mysql', link: '/数据库/mysql' },
        { text: 'redis', link: '/数据库/redis' },
        { text: 'mongodb', link: '/数据库/mongodb' },
        { text: 'postgresql', link: '/数据库/postgresql' },
      ],
      // 是否支持折叠
      collapsed: true
    },{
      text: '人工智能',
      items: [
        { text: '人工智能', link: '/人工智能/人工智能' },
      ],
      // 是否支持折叠
      collapsed: true
    },
    {
      text: '面试',
      items: [
        { text: '面试', link: '/面试' },
        { text: '面试题2024', link: '/面试题2024' },
      ],
      // 是否支持折叠
      collapsed: true
    },
  ]
}

function sidebarTool(): DefaultTheme.SidebarItem[] {
  return [
     {
      text: '工具',
      items: [
        { text: '工具', link: '/工具' },
        { text: '操作系统', link: '/操作系统' },
        { text: 'markdown', link: '/markdown' }
      ],
    },{
      text: '代码管理',
      items: [
        { text: 'git', link: '/代码管理/git' },
      ],
      // 是否支持折叠
      collapsed: true
    },
  ]
}


function sidebarJava(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '',
      items: [
        { text: 'java', link: '/java' },
        { text: 'jdk', link: '/jdk' },
        { text: 'spring', link: '/spring' },
        { text: 'orm', link: '/orm' },
        {
          text: '开发工具',
          base: '/data/后端/编程语言/java/开发工具',
          items: [
            { text: 'idea', link: '/idea' },
            { text: 'ai', link: '/ai' },
            { text: '包管理工具', link: '/包管理工具' },
            ///data/后端/编程语言/java/开发工具/idea.md
            ///data/编程语言/java/开发工具/idea
          ]
        },
      ]
    }
  ]
}

function sidebarLink(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '联系方式',
      items: [
        { text: '联系方式', link: '/link' },
      ]
    }
  ]
}

function sidebarReademe(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '了解更多',
      items: [
        { text: '了解更多', link: '/readme' },
      ]
    }
  ]
}