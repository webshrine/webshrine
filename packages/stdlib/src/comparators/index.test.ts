import { compareNumber, compareNumberAbs, compareNumberReverse } from './index'

const EQUAL = 0
const A_IS_GREATER = 1
const B_IS_GREATER = -1

it('number compare', () => {
  expect(compareNumber(1, 1)).toBe(EQUAL)
  expect(compareNumber(1, 2)).toBe(B_IS_GREATER)
  expect(compareNumber(1, -2)).toBe(A_IS_GREATER)
  expect(compareNumberReverse(1, 2)).toBe(A_IS_GREATER)
})

it('number abs compare', () => {
  expect(compareNumberAbs(1, 1)).toBe(EQUAL)
  expect(compareNumberAbs(1, -2)).toBe(B_IS_GREATER)
  expect(compareNumberAbs(-5, 2)).toBe(A_IS_GREATER)
  expect(compareNumberAbs(0, 0)).toBe(EQUAL)
  expect(compareNumberAbs(0, -0)).toBe(EQUAL)
  expect(compareNumberAbs(0, -3)).toBe(B_IS_GREATER)
  expect(compareNumberAbs(-5, -2)).toBe(A_IS_GREATER)
})

it('array of numbers sort', () => {
  expect([1, 5, -7, 2, 4].sort(compareNumber)).toEqual([-7, 1, 2, 4, 5])
  expect([1, 5, -7, 2, 4].sort(compareNumberReverse)).toEqual([5, 4, 2, 1, -7])
})
