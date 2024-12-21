import { execSync } from 'node:child_process'
import { PACKAGES } from '../constants'
import { modifyJsonFile } from './helpers'

export function setVersionsForAllPackages(version: string) {
  PACKAGES.forEach(({ path }) => {
    modifyJsonFile(`${path}/package.json`, (srcData) => {
      srcData.version = version

      for (const packageName in Object.keys(srcData.dependencies)) {
        if (!PACKAGES.some(p => p.fullname === packageName))
          continue

        if (srcData.dependencies[packageName].startsWith('link:'))
          continue

        srcData.dependencies[packageName] = version
      }
      return srcData
    })
  })
}

export function gitCheckClean(ignore: string[]) {
  const status = execSync('git status --porcelain', { encoding: 'utf8' })
  const modifiedFiles = status.trim().split('\n').filter((line) => {
    const [_, path] = line.trim().split(' ')
    return !ignore.includes(path)
  })
  if (modifiedFiles.length)
    throw new Error('Git working directory is not clean')
}

export function gitCommitAll(message: string) {
  execSync(`git add -A`)
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' })
}

export function gitSetTag(tag: string) {
  execSync(`git tag ${tag}`, { stdio: 'inherit' })
}
