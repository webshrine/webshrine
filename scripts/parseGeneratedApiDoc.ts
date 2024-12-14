import Bun from 'bun'
import API_DOC from '../docs/api/gen/typedoc-sidebar.json'

const NAMES_TO_LINKS: Record<string, string> = {}

API_DOC.forEach((pkg) => {
  pkg.items.forEach((src) => {
    src.items.forEach((category) => {
      category.items.forEach((item) => {
        NAMES_TO_LINKS[item.text] = item.link
          .replace(/\\/g, '/')
          .replace(/.\w+$/, '')
      })
    })
  })
})

Bun.write('./docs/api/gen/names-to-links.json', `${JSON.stringify(NAMES_TO_LINKS)}\n`)
