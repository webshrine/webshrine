import type { KeysDeep } from '@webshrine/stdtyp'
import { assertType, describe } from 'vitest'
import { keysDeep } from '.'

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

describe('keysDeep', () => {
  it('basic', () => {
    // expectTypeOf(keysDeep(DATA)).toMatchTypeOf<>()

    expect(keysDeep(DATA)).toEqual([
      'num',
      'str',
      'bul',
      'obj',
      'num2',
      'str2',
      'arr2',
      'arr_num3',
      'arr_bul',
      'arr_obj3',
      'arr_num4',
      'arr_str4',
      'arr_obj4',
      'arr_num5',
      'arr_str5',
      'arr_arr_num',
      'arr_arr_arr_str',
      'num3',
      'obj3',
      'num4',
      'str4',
      'obj2',
      'str3',
      'obj4',
      'num5',
      'str5',
    ])
    assertType<KeysDeep<typeof DATA>[]>(keysDeep(DATA))
  })

  // const asd = keys({
  //   qwf: 'string',
  //   152: 'string',
  //   [Symbol.asyncIterator]: 'string',
  // })

  // const asdD = keysDeep({
  //   qwf: 'string',
  //   152: 'string',
  //   [Symbol.asyncIterator]: 'string',
  //   obj: {
  //     asd: true,
  //     obj2: {
  //       num3: 123,
  //     },
  //   },
  // })

  // it('should return an array of keys', () => {
  //   const result = keysDeep(DATA)
  //   expect(result).toEqual([
  //     'num',
  //     'str',
  //     'bul',
  //     'obj.num2',
  //     'obj.str',
  //     'obj.str2',
  //     'obj.num',
  //     'obj.obj2.num3',
  //     'obj.obj2.str3',
  //     'obj.obj2.obj3.num4',
  //     'obj.obj2.obj3.str4',
  //     'obj.obj2.obj3.obj4.num5',
  //     'obj.obj2.obj3.obj4.str5',
  //   ])
  // })
})
