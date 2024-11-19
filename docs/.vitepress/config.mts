import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { npmCommandsMarkdownPlugin } from 'vitepress-plugin-npm-commands'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import PACKAGE from '../../package.json'
import GeneratedApiSidebar from '../api/gen/typedoc-sidebar.json'
import { capitalCase, item, sidebarItem, sidebarItemRootless } from './helpers.mts'

const DefaultSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Guide', null, () => [
    item('Get Started', '/'),
    item('Terms'),
  ]),
  sidebarItemRootless('Basic aspects', null, () => [
    item('Error handling'),
  ]),
  sidebarItemRootless('Migration', null, () => [
    item('Other packages'),
  ]),
]
const CodeStyleSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Code style', null, () => [
    item('Main', '/'),
  ]),
]

const ApiSidebar: DefaultTheme.Sidebar = [
  sidebarItem('stdlib', { link: 'api/gen/stdlib/src' }, GeneratedApiSidebar.find(i => i.text === 'stdlib')?.items?.[0].items || []),
  sidebarItem('stdtyp', { link: 'api/gen/stdtyp/src' }, GeneratedApiSidebar.find(i => i.text === 'stdtyp')?.items?.[0].items || []),
]

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  title: `⛩️ ${capitalCase(PACKAGE.name)}`,
  description: PACKAGE.description,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(npmCommandsMarkdownPlugin)
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
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
