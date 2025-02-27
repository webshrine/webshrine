/* eslint-disable no-console */
import type { DefaultTheme } from 'vitepress'
import GeneratedApiSidebar from '../api/gen/typedoc-sidebar.json'

interface ItemLike {
  text: string
  link: string
}

export const capitalCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
export const kebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W+/g, '-').toLowerCase()

let currentSidebarItemContext: { basePath: string } | null = null
export function sidebarItem(
  text: string,
  options: Omit<DefaultTheme.SidebarItem, 'items' | 'text'> | null,
  createItems: (() => DefaultTheme.SidebarItem[]) | DefaultTheme.SidebarItem[],
) {
  if (typeof createItems !== 'function') {
    return {
      ...options,
      text,
      items: createItems,
    }
  }

  const link = options?.link || `/${kebabCase(text)}`
  currentSidebarItemContext = { basePath: link }
  const items = createItems()
  currentSidebarItemContext = null

  return {
    ...options,
    link,
    text,
    items,
  }
}

export function sidebarItemRootless(
  text: string,
  options: Omit<DefaultTheme.SidebarItem, 'items' | 'text'> | null,
  createItems: (() => DefaultTheme.SidebarItem[]) | DefaultTheme.SidebarItem[],
) {
  const item = sidebarItem(text, options, createItems)
  item.link = item.items[0].link
  return item
}

export function item(text: string, link?: string): ItemLike {
  const actualLink = link || `/${kebabCase(text)}`
  return {
    text,
    link: currentSidebarItemContext ? currentSidebarItemContext.basePath + actualLink : actualLink,
  }
}

export function logPaths(title: string, items?: Array<ItemLike & { items?: ItemLike[] }>, depth = 0) {
  if (!items?.length)
    return
  if (depth === 0)
    console.log(title)
  items.forEach((item) => {
    if (item.link)
      console.log(item.link)
    if (item.items?.length) {
      logPaths(title, item.items, depth + 1)
    }
  })
}

export const createApiSidebar = name => sidebarItem(
  name,
  { link: `api/gen/${name}/src` },
  GeneratedApiSidebar.find(i => i.text === name)?.items?.[0].items || [],
)
