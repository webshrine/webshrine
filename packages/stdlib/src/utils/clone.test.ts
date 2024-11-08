import { clone, copy } from './clone'

const DATA_OBJECT = {
  num: 123,
  str: 'foo',
  bool: true,
  nul: null,
  undef: undefined,
  big: BigInt(123),
  arr: [1, 2, 3],
  obj: { foo: 'bar' },
}

const COMPLEX_OBJECT = {
  ...structuredClone(DATA_OBJECT),
  map: new Map([['foo', 'bar']]),
  set: new Set(['foo', 'bar']),
  fn: () => 'foo',
  date: new Date('2020-01-01T00:00:00.000Z'),
  re: /foo/gi,
  sym: Symbol('foo'),
}

const checkSuitBasic = (result: typeof DATA_OBJECT, expecting: typeof DATA_OBJECT) => {
  expect(result).toEqual(expecting)
  expect(result).not.toBe(expecting)
  expect(result.arr).not.toBe(expecting.arr)
  expect(result.obj).not.toBe(expecting.obj)
}

// TODO: copy tests from https://github.com/lukeed/klona/tree/master
describe('copy', () => {
  it('basic', () => {
    const target = COMPLEX_OBJECT
    const copied = copy(target)

    checkSuitBasic(copied, target)
  })
})

describe('clone', () => {
  it('basic', () => {
    const target = COMPLEX_OBJECT
    const cloned = clone(target)

    checkSuitBasic(cloned, target)
    expect(cloned.map).not.toBe(target.map)
    expect(cloned.set).not.toBe(target.set)
    expect(cloned.date).not.toBe(target.date)
    expect(cloned.re).not.toBe(target.re)
    expect(cloned.fn).toBe(target.fn)
    expect(cloned.sym).toBe(target.sym)
    expect(cloned.fn()).toBe(target.fn())
  })
})
