import type { AnyArray, FnCompare } from '@webshrine/stdtyp'
import { CompareResult, invertComparator, normalizeCompareResult } from './helpers'

export * from './helpers'

/**
 *
 */
export const compareNumber: FnCompare<number> = (a, b) => (
  a > b
    ? CompareResult.A_IS_GREATER
    : a < b
      ? CompareResult.B_IS_GREATER
      : CompareResult.EQUAL
)

/**
 *
 */
export const compareNumberAbs: FnCompare<number> = (a, b) => compareNumber(Math.abs(a), Math.abs(b))

/**
 *
 */
export const compareArrayLength: FnCompare<AnyArray> = (a, b) => compareNumber(a.length, b.length)

/**
 *
 */
export const compareString: FnCompare<string> = (a, b) => normalizeCompareResult(a.localeCompare(b))

/**
 *
 */
export const compareDate: FnCompare<Date> = (a, b) => compareNumber(a.getTime(), b.getTime())

export const compareNumberReverse = invertComparator(compareNumber)
export const compareNumberAbsReverse = invertComparator(compareNumberAbs)
export const compareArrayLengthReverse = invertComparator(compareArrayLength)
export const compareStringReverse = invertComparator(compareString)
export const compareDateReverse = invertComparator(compareDate)
