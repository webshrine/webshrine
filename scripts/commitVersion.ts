import { version } from '../package.json'
import { gitCheckClean, gitCommitAll, gitSetTag, setVersionsForAllPackages } from './helpers/tasks'

gitCheckClean()
setVersionsForAllPackages(version)
gitCommitAll(`Build: update version to \`${version}\``)
gitSetTag(`v${version}`)
