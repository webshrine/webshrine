interface Package {
  name: string
  fullname: string
  path: string
}

const PATH_BASE_PACKAGE = 'packages'

export const PACKAGES = [
  {
    name: 'stdlib',
    fullname: '@webshrine/stdlib',
  },
  {
    name: 'stdtyp',
    fullname: '@webshrine/stdtyp',
  },
  {
    name: 'stdfmt',
    fullname: '@webshrine/stdfmt',
  },
  {
    name: 'webshrine',
    fullname: 'webshrine',
  },
].map<Package>((pkg) => {
  return {
    ...pkg,
    path: `${PATH_BASE_PACKAGE}/${pkg.name}`,
  }
})
