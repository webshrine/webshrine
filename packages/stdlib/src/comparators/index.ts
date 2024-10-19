import type { AnyArray, CompareFn } from '@webshrine/stdtyp'
import { CompareResult, invertComparator, normalizeCompareResult } from './helpers'

export * from './helpers'

export const compareNumber: CompareFn<number> = (a, b) => (
  a > b
    ? CompareResult.A_IS_GREATER
    : a < b
      ? CompareResult.B_IS_GREATER
      : CompareResult.EQUAL
)

export const compareNumberAbs: CompareFn<number> = (a, b) => compareNumber(Math.abs(a), Math.abs(b))
export const compareArrayLength: CompareFn<AnyArray> = (a, b) => compareNumber(a.length, b.length)
export const compareString: CompareFn<string> = (a, b) => normalizeCompareResult(a.localeCompare(b))
export const compareDate: CompareFn<Date> = (a, b) => compareNumber(a.getTime(), b.getTime())

export const compareNumberReverse = invertComparator(compareNumber)
export const compareNumberAbsReverse = invertComparator(compareNumberAbs)
export const compareArrayLengthReverse = invertComparator(compareArrayLength)
export const compareStringReverse = invertComparator(compareString)
export const compareDateReverse = invertComparator(compareDate)
