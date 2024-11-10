import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import PACKAGE from '../../package.json'
import typedocSidebar from '../api/gen/typedoc-sidebar.json'
import { capitalCase, item, sidebarItem, sidebarItemLinked } from './helpers.mts'

const DefaultSidebar: DefaultTheme.Sidebar = [
  sidebarItemLinked('Guide', null, () => [
    item('Installation'),
  ]),
  sidebarItem('Basic aspects', { link: '/guide' }, () => [
    item('Error handling'),
  ]),
]
const CodeStyleSidebar: DefaultTheme.Sidebar = [
  sidebarItemLinked('Code style', null, () => [
    item('Main', '/'),
  ]),
]
const ApiSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Globals', { link: 'api/gen' }, () => [
    item('stdlib', '/stdlib/src'),
    item('stdtyp', '/stdtyp/src'),
  ]),
  sidebarItemLinked('stdlib', null, typedocSidebar.find(i => i.text === 'stdlib')?.items?.[0].items || []),
  sidebarItemLinked('stdtyp', null, typedocSidebar.find(i => i.text === 'stdtyp')?.items?.[0].items || []),
]

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  title: `⛩️ ${capitalCase(PACKAGE.name)}`,
  description: PACKAGE.description,
  themeConfig: {
    nav: [
      item('Guide'),
      item('Code style'),
      item('API', '/api/gen'),
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
