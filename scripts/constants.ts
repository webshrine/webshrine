interface Package {
  name: string
  path: string
}

const PATH_BASE_PACKAGE = 'packages'

export const PACKAGES = [
  {
    name: 'stdlib',
  },
  {
    name: 'stdtyp',
  },
  {
    name: 'stdfmt',
  },
  {
    name: 'webshrine',
  },
].map<Package>((pkg) => {
  return {
    ...pkg,
    path: `${PATH_BASE_PACKAGE}/${pkg.name}`,
  }
})
