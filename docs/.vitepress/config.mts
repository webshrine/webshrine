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
  ]),
  // sidebarItemRootless('Concepts', null, () => [
  //   item('Namings'),
  // ]),
  sidebarItemRootless('Aspects', null, () => [
    // item('Common utils'),
    // item('Matching'),
    // item('Guarding / Filtering'),
    // item('Loops'),
    item('Data transforming'),
    // item('Function wrapping'),
    item('Error handling'),
  ]),
  sidebarItem('Migration', null, () => [
    item('Associations'),
    item('Other packages'),
  ]),
]

const TermsSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Terms', null, () => [
    item('Main', '/'),
  ]),
]

const CodeStyleSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Code style', null, () => [
    item('Main', '/'),
  ]),
]

const ApiSidebar: DefaultTheme.Sidebar = [
  sidebarItem('Overview', { link: 'api' }, []),
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
      item('Terms'),
      item('Code style'),
      item('API'),
    ],
    sidebar: {
      '/': DefaultSidebar,
      '/terms/': TermsSidebar,
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
