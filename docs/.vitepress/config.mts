import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import PACKAGE from '../../package.json'
import typedocSidebar from '../api/typedoc-sidebar.json'
import { capitalCase, item, sidebarItem } from './helpers.mts'

const DefaultSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Guide', null, () => [
    item('Installation'),
  ]),
  sidebarItem('Basic aspects', { link: '/guide' }, () => [
    item('Error handling'),
  ]),
]
const CodeStyleSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Code style', null, () => [
    item('Main', '/'),
  ]),
]
const ApiSidebar: DefaultTheme.Sidebar = [sidebarItem('API', null, typedocSidebar)]

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  title: `⛩️ ${capitalCase(PACKAGE.name)}`,
  description: PACKAGE.description,
  themeConfig: {
    nav: [
      item('Guide'),
      item('Code style'),
      item('API'),
    ],
    sidebar: {
      '/': DefaultSidebar,
      '/code-style/': CodeStyleSidebar,
      '/api/': ApiSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/webshrine/webshrine' },
    ],
  },
})

// DEBUG
// logPaths('Nav paths:', config.themeConfig?.nav)
// logPaths('Sidebar paths:', config.themeConfig?.sidebar)

export default config
