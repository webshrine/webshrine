import { describe } from 'vitest'
import { omit, omitBy, omitDeep } from './omitters'

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

describe('omit', () => {
  it('basic', () => {
    expect(
      omit(DATA, ['arr2', 'num', 'str'] as const),
    ).toEqual({
      // [Symbol.iterator]: 12313
      bul: true,
      obj: structuredClone(DATA.obj),
    })
  })
})

describe('omitBy', () => {
  it('basic', () => {
    expect(
      omitBy(DATA, (v, key) => key.includes('u')),
    ).toEqual({
      str: 'lvl 1',
      obj: structuredClone(DATA.obj),
    })
  })
})

describe('omitDeep', () => {
  it('basic', () => {
    // expectTypeOf(keysDeep(DATA)).toMatchTypeOf<>()

    expect(
      omitDeep(DATA, ['arr2', 'obj3', 'str'] as const),
    ).toEqual({
      num: 0,
      // [Symbol.iterator]: 12313
      bul: true,
      obj: {
        num2: 1,
        num: 1,
        str2: 'lvl 2',
        obj2: {
          // [Symbol.iterator]: 12313
          num3: 2,
          str3: 'lvl 3',
        },
      },
    })
    // assertType<KeysDeep<typeof DATA>[]>(omitDeep(DATA))
  })
})
