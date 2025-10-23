import { clamp, clampBigInt, clampNumber, longest, max, maxBigInt, maxNumber, min, minBigInt, minNumber, shortest } from '.'

describe('clamp', () => {
  function suitNumbers(fn: any) {
    expect(fn(5, -5, 7)).toBe(5)
    expect(fn(-10, -5, 7)).toBe(-5)
    expect(fn(10, -5, 7)).toBe(7)
  }

  function suitBigInts(fn: any) {
    expect(fn(5n, -5n, 7n)).toBe(5n)
    expect(fn(-10n, -5n, 7n)).toBe(-5n)
    expect(fn(10n, -5n, 7n)).toBe(7n)
  }

  it('clampNumber', () => suitNumbers(clampNumber))
  it('clampBigInt', () => suitBigInts(clampBigInt))
  it('clamp', () => {
    suitNumbers(clamp)
    suitBigInts(clamp)
  })
})

describe('min', () => {
  function suitNumbers(fn: any) {
    expect(fn(5, -5)).toBe(-5)
    expect(fn(10, 20)).toBe(10)
  }
  function suitBigInts(fn: any) {
    expect(fn(5n, -5n)).toBe(-5n)
    expect(fn(10n, 20n)).toBe(10n)
  }
  function suitShortest(fn: any) {
    expect(fn('0', '')).toBe('')
    expect(fn('foo', 'baron')).toBe('foo')

    const first: any[] = []
    expect(fn(first, [])).toBe(first)
  }

  it('minNumber', () => suitNumbers(minNumber))
  it('minBigInt', () => suitBigInts(minBigInt))
  it('shortest', () => suitShortest(shortest))
  it('min', () => {
    suitNumbers(min)
    suitBigInts(min)
    suitShortest(min)
  })
})

describe('max', () => {
  function suitNumbers(fn: any) {
    expect(fn(5, -5)).toBe(5)
    expect(fn(10, 20)).toBe(20)
  }
  function suitBigInts(fn: any) {
    expect(fn(5n, -5n)).toBe(5n)
    expect(fn(10n, 20n)).toBe(20n)
  }
  function suitLongest(fn: any) {
    expect(fn('0', '')).toBe('0')
    expect(fn('foo', 'baron')).toBe('baron')

    const first: any[] = []
    expect(fn(first, [])).toBe(first)
  }
  it('maxNumber', () => suitNumbers(maxNumber))
  it('maxBigInt', () => suitBigInts(maxBigInt))
  it('longest', () => suitLongest(longest))
  it('max', () => {
    suitNumbers(max)
    suitBigInts(max)
    suitLongest(max)
  })
})
