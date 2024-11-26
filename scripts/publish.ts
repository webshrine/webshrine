import { execSync } from 'node:child_process'
import path from 'node:path'
import { consola } from 'consola'
import { name as scope, version } from '../package.json'

const PKGS = ['stdlib', 'stdtyp']

execSync('npm run build', { stdio: 'inherit' })

let command = 'pnpm publish -r --access public'

if (version.includes('beta'))
  command += ' --tag beta'

execSync(command, { stdio: 'inherit' })
// for (const name of PKGS) {
//   execSync(command, { stdio: 'inherit', cwd: path.join('packages', name, 'dist') })
//   consola.success(`Published @${scope}/${name}`)
// }
