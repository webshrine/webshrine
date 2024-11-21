import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme' // https://vitepress.dev/guide/custom-theme
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { h } from 'vue'

import './style.css'
import './custom/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  },
} satisfies Theme
