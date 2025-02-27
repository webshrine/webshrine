import type { Theme } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import DefaultTheme from 'vitepress/theme' // https://vitepress.dev/guide/custom-theme
import { h } from 'vue'

import ApiLink from '../components/ApiLink.vue'
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
    app.component('ApiLink', ApiLink)
    enhanceAppWithTabs(app)
  },
} satisfies Theme
