import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "About John",
  description: "This is a site about me",
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config

    logo: '/JM-Logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/life/'},
      { text: 'My projects', link: '/projects/' }
    ],

    sidebar: {
      '/life/': [
        {
          text: 'My life',
          items: [
            { text: 'Overview', link: '/life/' }
          ]
        }
      ],

      '/projects/': [
        { text: 'About my projects', link: '/projects/' },
        {
          text: 'My personal projects',
          collapsed: false,
          items: [
            { text: 'Overview - Personal', link: '/projects/personal/' },
            { text: 'Home Assistant', link: '/projects/personal/home-assistant' },
            { text: 'VPS', link: '/projects/personal/vps' },
            { text: 'ChronoDiff', link: '/projects/personal/chronodiff'}
          ]
        },
        {
          text: 'My work projects',
          collapsed: false,
          items: [
            { text: 'Overview - Work', link: '/projects/work/'},
            { text: 'PalletPilot', link: '/projects/work/palletpilot' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InfiiiinitY' },
      { icon: 'nextdotjs', link: 'https://aboutjohn.info'},
      { icon: 'aboutdotme', link: 'https://about.me/john.mattheus'}
    ],

    footer: {
      message: 'Powered by VitePress'
    }
  }
})
