import { describe } from 'vitest'
import { remap, remapBy } from './remappers'

const DATA = {
  num: 0,
  str: 'lvl 1',
  // [Symbol.iterator]: 12313
  bul: true,
  obj: {
    // [Symbol.toStringTag]: 12313
    num2: 1,
    str: 'lvl 2',
    str2: 'lvl 2',
    arr2: [
      {
        // uni: 555,
        arr_num3: 2,
        arr_bul: true,
        arr_obj3: {
          // [Symbol.iterator]: 12313
          arr_num4: 3,
          arr_str4: 'lvl 4',
          arr_obj4: {
            // [Symbol.iterator]: 12313
            arr_num5: 4,
            arr_str5: 'lvl 5',
          },
        },
      },
      [
        { arr_arr_num: 123 },
        [{ arr_arr_arr_str: 'asd' }],
      ],
      {
        num3: 2,
        obj3: {
          // [Symbol.iterator]: 12313
          num4: 3,
          str4: 'lvl 4',
        },
      },
    ],
    num: 1,
    obj2: {
      // [Symbol.iterator]: 12313
      num3: 2,
      str3: 'lvl 3',
      obj3: {
        // [Symbol.iterator]: 12313
        num4: 3,
        str4: 'lvl 4',
        obj4: {
          // [Symbol.iterator]: 12313
          num5: 4,
          str5: 'lvl 5',
        },
      },
    },
  },
} as const

describe('remap', () => {
  it('basic', () => {
    expect(
      remap(DATA, {
        num: 'number',
        bul: 'boolean',
      } as const),
    ).toEqual({
      number: DATA.num,
      str: DATA.str,
      boolean: DATA.bul,
      obj: DATA.obj,
    })
  })
})

describe('remapBy', () => {
  it('basic', () => {
    expect(
      remapBy(DATA, (_, key) => key.includes('u') ? `_${key}` : key),
    ).toEqual({
      _num: DATA.num,
      str: DATA.str,
      _bul: DATA.bul,
      obj: DATA.obj,
    })
  })
})
