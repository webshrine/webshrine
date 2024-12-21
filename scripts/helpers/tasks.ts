import { execSync } from 'node:child_process'
import { PACKAGES } from '../constants'
import { modifyJsonFile } from './helpers'

function setVersionForDependencies(
  targetPackage: Record<PropertyKey, any>,
  dependenciesNames: Set<string>,
  version: string,
  category = 'dependencies',
) {
  if (!targetPackage[category])
    return
  for (const packageName of Object.keys(targetPackage[category])) {
    if (dependenciesNames.has(packageName) && !targetPackage[category][packageName].startsWith('link:'))
      targetPackage[category][packageName] = version
  }
}

export function setVersionsForAllPackages(version: string) {
  const packageFullNames = new Set(PACKAGES.map(p => p.fullname))
  PACKAGES.forEach(({ path }) => {
    modifyJsonFile(`${path}/package.json`, (srcData) => {
      srcData.version = version

      setVersionForDependencies(srcData, packageFullNames, version)
      setVersionForDependencies(srcData, packageFullNames, version, 'peerDependencies')

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
