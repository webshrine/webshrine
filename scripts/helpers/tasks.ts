import { execSync } from 'node:child_process'
import { PACKAGES } from '../constants'
import { modifyJsonFile } from './helpers'

export function setVersionsForAllPackages(version: string) {
  PACKAGES.forEach(({ path }) => {
    modifyJsonFile(`${path}/package.json`, (srcData) => {
      srcData.version = version
      return srcData
    })
  })
}

export function gitCheckClean() {
  const status = execSync('git status --porcelain', { encoding: 'utf8' })
  if (status.trim() !== '')
    throw new Error('Git working directory is not clean')
}

export function gitCommitAll(message: string) {
  execSync(`git add -A`)
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' })
}

export function gitSetTag(tag: string) {
  execSync(`git tag ${tag}`, { stdio: 'inherit' })
}
