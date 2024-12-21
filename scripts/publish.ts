import { execSync } from 'node:child_process'
import { consola } from 'consola'
import { name as scope, version } from '../package.json'
import { PACKAGES } from './constants'

execSync('pnpm run build', { stdio: 'inherit' })

let command = 'npm publish --access public'

if (version.includes('beta'))
  command += ' --tag beta'

for (const { name, path } of PACKAGES) {
  execSync(command, { stdio: 'inherit', cwd: path })
  consola.success(`Published @${scope}/${name}`)
}
