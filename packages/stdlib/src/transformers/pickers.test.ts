import { describe } from 'vitest'
import { pick, pickBy, pickDeep } from './pickers'

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

describe('pick', () => {
  it('basic', () => {
    expect(
      pick(DATA, ['arr2', 'num', 'str'] as const),
    ).toEqual({
      // [Symbol.iterator]: 12313
      num: 0,
      str: 'lvl 1',
    })
  })
})

describe('pickBy', () => {
  it('basic', () => {
    expect(
      pickBy(DATA, (v, key) => key.includes('u')),
    ).toEqual({
      num: 0,
      bul: true,
    })
  })
})

describe('pickDeep', () => {
  it('basic', () => {
    // expectTypeOf(keysDeep(DATA)).toMatchTypeOf<>()

    expect(
      pickDeep(DATA, ['str', 'obj', 'obj2', 'arr2'] as const),
    ).toEqual({
      str: 'lvl 1',
      obj: {
        str: 'lvl 2',
        arr2: [
          {},
          [
            {},
            [{}],
          ],
          {},
        ],
        obj2: {},
      },
    })
    // assertType<KeysDeep<typeof DATA>[]>(pickDeep(DATA))
  })
})
