import { readFileSync, writeFileSync } from 'node:fs'

export function modifyJsonFile(path: string, cd: (data: Record<PropertyKey, any>) => Record<PropertyKey, any>) {
  const packageJson = JSON.parse(readFileSync(path, { encoding: 'utf-8' }))
  const modified = cd(packageJson)
  writeFileSync(path, `${JSON.stringify(modified, null, 2)}\n`)
}

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
