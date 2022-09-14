import { getPackages } from '@lerna/project'
import minimist from 'minimist'

async function getSortedPackages() {
  const packages = await getPackages(__dirname)
  const filtered = filterPackages(packages, scope, ignore, false)

  return batchPackages(filtered)
    .filter(item => item.name !== '@tiptap/demos')
    .reduce((arr, batch) => arr.concat(batch), [])
}

async function build(commandLineArgs) {
  const config = []

  const
}
