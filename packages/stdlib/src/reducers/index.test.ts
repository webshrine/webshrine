import { findLongest, findMaxLength, findMaxNumeric, findMinLength, findMinNumeric, findShortest, reduceNumbersToSumNumber } from '.'

describe('reducers', () => {
  it('reduceNumbersToSumNumber', () => {
    expect([1, 2, 3].reduce(reduceNumbersToSumNumber)).toBe(6)
    expect([1, -2, 0].reduce(reduceNumbersToSumNumber)).toBe(-1)
  })

  it('findMaxNumeric, findMinNumeric', () => {
    expect([0, -1, 2].reduce(findMaxNumeric)).toBe(2)
    expect([1, -2, 0].reduce(findMinNumeric)).toBe(-2)

    expect([0n, -1n, 2n].reduce(findMaxNumeric)).toBe(2n)
    expect([1n, -2n, 0n].reduce(findMinNumeric)).toBe(-2n)
  })

  it('findMaxLength, findMinLength', () => {
    expect(['a', 'bb', '', 'ccc', 'dd'].reduce(findMaxLength, 0)).toBe(3)
    expect(['a', 'bb', '', 'ccc', 'dd'].reduce(findMinLength, Infinity)).toBe(0)
  })

  it('findLongest, findShortest', () => {
    const arrOfStrings = ['a', 'bb', '', 'ccc', 'dd']
    expect(arrOfStrings.reduce(findShortest)).toBe('')
    expect(['', ''].reduce(findShortest)).toBe('')
    expect([''].reduce(findShortest)).toBe('')

    const arrOfArrays = [[1], [], ['wef'], [true, false]]
    expect(arrOfArrays.reduce(findLongest)).toStrictEqual([true, false])
    expect(['', ''].reduce(findLongest)).toBe('')
    expect([''].reduce(findLongest)).toBe('')
  })
})
