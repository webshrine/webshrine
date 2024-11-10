import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import PACKAGE from '../../package.json'
import GeneratedApiSidebar from '../api/gen/typedoc-sidebar.json'
import { capitalCase, item, sidebarItem, sidebarItemRootless } from './helpers.mts'

const DefaultSidebar: DefaultTheme.Sidebar = [
  sidebarItemRootless('Guide', null, () => [
    item('Installation'),
  ]),
  sidebarItemRootless('Basic aspects', { link: '/guide' }, () => [
    item('Error handling'),
  ]),
]
const CodeStyleSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Code style', null, () => [
    item('Main', '/'),
  ]),
]
const ApiSidebar: DefaultTheme.Sidebar = [
  sidebarItemRootless('Globals', { link: 'api/gen' }, () => [
    item('stdlib', '/stdlib/src'),
    item('stdtyp', '/stdtyp/src'),
  ]),
  sidebarItem('stdlib', null, GeneratedApiSidebar.find(i => i.text === 'stdlib')?.items?.[0].items || []),
  sidebarItem('stdtyp', null, GeneratedApiSidebar.find(i => i.text === 'stdtyp')?.items?.[0].items || []),
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
