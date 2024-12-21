import type { DefaultTheme } from 'vitepress'
import path from 'node:path'
import { defineConfig } from 'vitepress'
import { npmCommandsMarkdownPlugin } from 'vitepress-plugin-npm-commands'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import PACKAGE from '../../package.json'
import { capitalCase, createApiSidebar, item, sidebarItem, sidebarItemRootless } from './helpers.mts'

const DefaultSidebar: DefaultTheme.Sidebar = [
  sidebarItemRootless('Guide', null, () => [
    item('Get Started', '/'),
  ]),
  // sidebarItemRootless('Concepts', null, () => [
  //   item('Namings'),
  // ]),
  sidebarItemRootless('Utils', null, () => [
    item('Common'),
    item('Loops'),
    item('Cloning'),
    item('Error handling'),
  ]),
  sidebarItemRootless('Aspects', null, () => [
    item('Matchers'),
    item('Guards'),
    item('Transformers'),
    item('Wrappers'),
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
  createApiSidebar('stdlib'),
  createApiSidebar('stdtyp'),
  createApiSidebar('stdfmt'),
]

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  ignoreDeadLinks: true, // FIXME: Research solution for root docs links
  title: `⛩️ ${capitalCase(PACKAGE.name)}`,
  description: PACKAGE.description,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(npmCommandsMarkdownPlugin)
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../packages/stdlib/src'),
      },
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
