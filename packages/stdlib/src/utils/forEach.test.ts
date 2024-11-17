import { forEach } from './forEach'

const avx = [] as Array<Date | Set<string>> | Record<string, number | boolean>

forEach(avx, (i, v, p) => {

})

const asdd = {
  asd: 123,
  xcv: 'asd',
  arr: [
    'asd',
    523,
    { asd: 123, xcv: 'asd' },
  ],
  obj: {
    asd: 123,
    xcv: 'asd',
    arr: [
      'asd',
      523,
      { asd: 123, xcv: 'asd' },
    ],
  },
}

// forEachDeep(asdd, (item, key, par, lvl) => {
//   if (item === 'dfh') {

//   }
// })