import { indexes, symbols } from './common'

describe('indexes', () => {
  it('basic', () => {
    expect(indexes([])).toEqual([])
    expect(indexes(['a', 'b', 'c'])).toEqual([0, 1, 2])
  })
})

describe('symbols', () => {
  it('basic', () => {
    const sym = Symbol('')
    const obj = {
      asd: 123,
      [Symbol.iterator]: () => { },
      [sym]: 'qfe',
    }

    const result = symbols(obj)

    expect(result).toEqual([
      Symbol.iterator,
      sym,
    ])
  })
})
