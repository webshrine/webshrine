import { defineConfig } from 'vitepress'
import PACKAGE from '../../package.json'
import typedocSidebar from '../api/typedoc-sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/webshrine/',
  title: `⛩️ ${PACKAGE.name.replace(/^\w/, s => s.toUpperCase())}`,
  description: PACKAGE.description,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: [
      {
        text: 'Basic aspects',
        items: [
          { text: 'Error handling', link: '/guide/error-handling.md' },
          // { text: 'Examples', link: '/examples' },
        ],
      },
      {
        text: 'Libraries',
        items: [
          { text: 'stdtyp', link: '/libs/stdtyp' },
          { text: 'stdlib', link: '/libs/stdlib' },
          { text: 'stddom', link: '/libs/stddom' },
        ],
      },
      {
        text: 'API',
        items: typedocSidebar,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webshrine/webshrine' },
    ],
  },
})
