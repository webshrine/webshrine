import { execSync } from 'node:child_process'
import path from 'node:path'
import { consola } from 'consola'
import { name as scope, version } from '../package.json'

const PKGS = ['stdlib', 'stdtyp']

execSync('npm run build', { stdio: 'inherit' })

let command = 'npm publish -r --dry-run --access public'

if (version.includes('beta'))
  command += ' --tag beta'

for (const name of PKGS) {
  execSync(command, { stdio: 'inherit', cwd: path.join('packages', name) })
  consola.success(`Published @${scope}/${name}`)
}
