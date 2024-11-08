import { defineConfig } from 'vitepress'
import PACKAGE from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: `⛩️ ${PACKAGE.name.replace(/^\w/, s => s.toUpperCase())}`,
  description: PACKAGE.description,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' },
    ],

    sidebar: [
      {
        text: 'Libraries',
        items: [
          { text: 'stdtyp', link: '/libs/stdtyp' },
          { text: 'stdlib', link: '/libs/stdlib' },
          { text: 'stddom', link: '/libs/stddom' },
        ],
      },
      {
        text: 'Basic aspects',
        items: [
          { text: 'Error handling', link: '/guide/error-handling.md' },
          // { text: 'Examples', link: '/examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webshrine/webshrine' },
    ],
  },
})
