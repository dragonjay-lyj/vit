await import('vitepress')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "游戏打蛋机",
  description: "一个游戏资源网站",
  lang: 'zh-CN',
  themeConfig: {
    head: [
      [
        'link',
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ],
      [
        'link',
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      [
        'link',
        { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
      ]
    ],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '游戏', link: '/games' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '游戏',
        items: [
          { text: '塞尔达传说 王国之泪', link: '/games/Zelda' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    logo: '/logo.svg',
    siteTitle: '游戏打蛋机',
    aside: true,
    outlineTitle: '游戏打蛋机',
  },
  externalLinkIcon: true,
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present Evan You'
  },
  carbonAds: {
    code: 'your-carbon-code',
    placement: 'your-carbon-placement'
  },
  docFooter: {
    prev: 'Pagina prior',
    next: 'Proxima pagina'
  }
})
