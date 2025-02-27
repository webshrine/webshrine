import type { CollectionKey } from '@webshrine/stdtyp'
import { forEach, forEachDeep, forItems, forSymbols, forValues, map, mapItems, mapValues } from './loops'

const ARR = [
  '1',
  '2',
  '3',
]
const OBJ = {
  a: 1,
  b: '2',
  c: true,
}

describe('forItems', () => {
  it('basic', () => {
    const arr = ['1', '2', '3']
    const indexes: number[] = []
    const values: any[] = []
    const parents: any[] = []
    forItems(arr, (val, index, parent) => {
      indexes.push(index)
      values.push(val)
      parents.push(parent)
    })
    expect(indexes).toEqual([0, 1, 2])
    expect(values).toEqual(['1', '2', '3'])
    expect(parents).toEqual([arr, arr, arr])
  })
})

describe('forValues', () => {
  it('basic', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    }
    const keys: CollectionKey[] = []
    const values: any[] = []
    const parents: any[] = []
    forValues(obj, (val, key, parent) => {
      keys.push(key)
      values.push(val)
      parents.push(parent)
    })
    expect(keys).toEqual(['a', 'b', 'c'])
    expect(values).toEqual([1, 2, 3])
    expect(parents).toEqual([obj, obj, obj])
  })
})

describe('forEach', () => {
  it('array', () => {
    const arr = ['1', '2', '3']
    const indexes: CollectionKey[] = []
    const values: any[] = []
    const parents: any[] = []
    forEach(arr, (val, index, parent) => {
      indexes.push(index)
      values.push(val)
      parents.push(parent)
    })
    expect(indexes).toEqual([0, 1, 2])
    expect(values).toEqual(['1', '2', '3'])
    expect(parents).toEqual([arr, arr, arr])
  })

  it('object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    }
    const keys: CollectionKey[] = []
    const values: any[] = []
    const parents: any[] = []
    forEach(obj, (val, key, parent) => {
      keys.push(key)
      values.push(val)
      parents.push(parent)
    })
    expect(keys).toEqual(['a', 'b', 'c'])
    expect(values).toEqual([1, 2, 3])
    expect(parents).toEqual([obj, obj, obj])
  })
})

describe('forSymbols', () => {
  it('basic', () => {
    const fst = Symbol('first')
    const snd = Symbol('second')
    const obj = {
      [fst]: 1,
      str: 2,
      [snd]: 3,
    }
    const symbols: symbol[] = []
    const values: any[] = []
    const parents: any[] = []
    forSymbols(obj, (val, sym, parent) => {
      symbols.push(sym)
      values.push(val)
      parents.push(parent)
    })
    expect(symbols).toEqual([fst, snd])
    expect(values).toEqual([1, 3])
    expect(parents).toEqual([obj, obj])
  })
})

describe('forEachDeep', () => {
  it('basic', () => {
    const obj = {
      a: 1,
      b: { ba: 2 },
      [Symbol('')]: 3,
      c: [{ caa: 4 }, { cab: 5 }],
      d: [[[6]]],
    }
    const keys: CollectionKey[] = []
    const levels: number[] = []
    const values: any[] = []
    const parents: any[] = []

    forEachDeep(obj, (value, key, parent, level) => {
      values.push(value)
      keys.push(key)
      parents.push(parent)
      levels.push(level)
    })

    expect(keys).toEqual(['a', 'b', 'ba', 'c', 0, 'caa', 1, 'cab', 'd', 0, 0, 0])
    expect(levels).toEqual([0, 0, 1, 0, 1, 2, 1, 2, 0, 1, 2, 3])
    expect(parents).toEqual([
      obj,
      obj,
      obj.b,
      obj,
      obj.c,
      obj.c[0],
      obj.c,
      obj.c[1],
      obj,
      obj.d,
      obj.d[0],
      obj.d[0][0],
    ])
    expect(values).toEqual([
      1,
      { ba: 2 },
      2,
      [{ caa: 4 }, { cab: 5 }],
      { caa: 4 },
      4,
      { cab: 5 },
      5,
      [[[6]]],
      [[6]],
      [6],
      6,
    ])
  })
})

describe('mapItems', () => {
  it('basic', () => {
    expect(mapItems(ARR, item => +item)).toEqual([
      1,
      2,
      3,
    ])
  })
})

describe('mapValues', () => {
  it('basic', () => {
    expect(mapValues(OBJ, item => `_${item}`)).toEqual({
      a: '_1',
      b: '_2',
      c: '_true',
    })
  })
})

describe('map', () => {
  it('basic', () => {
    expect(map(ARR, item => +item)).toEqual([
      1,
      2,
      3,
    ])
    expect(map(OBJ, item => `_${item}`)).toStrictEqual({
      a: '_1',
      b: '_2',
      c: '_true',
    })
  })
})
