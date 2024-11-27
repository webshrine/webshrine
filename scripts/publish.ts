import { execSync } from 'node:child_process'
import { consola } from 'consola'
import { name as scope, version } from '../package.json'
import { PACKAGES } from './constants'
import { gitCommitAll, gitSetTag, setVersionsForAllPackages } from './helpers/tasks'

setVersionsForAllPackages(version)
gitCommitAll(`Build: update version to \`${version}\``)
gitSetTag(`v${version}`)

execSync('npm run build', { stdio: 'inherit' })

let command = 'npm publish -r --dry-run --access public'

if (version.includes('beta'))
  command += ' --tag beta'

if (version.includes('alpha'))
  command += ' --tag alpha'

for (const { name, path } of PACKAGES) {
  execSync(command, { stdio: 'inherit', cwd: path })
  consola.success(`Published @${scope}/${name}`)
}
