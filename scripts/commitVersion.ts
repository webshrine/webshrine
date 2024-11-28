import { version } from '../package.json'
import { gitCheckClean, gitCommitAll, gitSetTag, setVersionsForAllPackages } from './helpers/tasks'

gitCheckClean(['package.json'])
setVersionsForAllPackages(version)
gitCommitAll(`Build: update version to \`${version}\``)
gitSetTag(`v${version}`)
