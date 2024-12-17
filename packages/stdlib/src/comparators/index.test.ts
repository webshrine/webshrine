import { compareNumbers, compareNumbersAbs, compareNumbersReverse } from './index'

const EQUAL = 0
const A_IS_GREATER = 1
const B_IS_GREATER = -1

it('number compare', () => {
  expect(compareNumbers(1, 1)).toBe(EQUAL)
  expect(compareNumbers(1, 2)).toBe(B_IS_GREATER)
  expect(compareNumbers(1, -2)).toBe(A_IS_GREATER)
  expect(compareNumbersReverse(1, 2)).toBe(A_IS_GREATER)
})

it('number abs compare', () => {
  expect(compareNumbersAbs(1, 1)).toBe(EQUAL)
  expect(compareNumbersAbs(1, -2)).toBe(B_IS_GREATER)
  expect(compareNumbersAbs(-5, 2)).toBe(A_IS_GREATER)
  expect(compareNumbersAbs(0, 0)).toBe(EQUAL)
  expect(compareNumbersAbs(0, -0)).toBe(EQUAL)
  expect(compareNumbersAbs(0, -3)).toBe(B_IS_GREATER)
  expect(compareNumbersAbs(-5, -2)).toBe(A_IS_GREATER)
})

it('array of numbers sort', () => {
  expect([1, 5, -7, 2, 4].sort(compareNumbers)).toEqual([-7, 1, 2, 4, 5])
  expect([1, 5, -7, 2, 4].sort(compareNumbersReverse)).toEqual([5, 4, 2, 1, -7])
})
