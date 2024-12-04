import type { AnyArray, FnCompare } from '@webshrine/stdtyp'
import { invert } from '@/wrappers'
import { CompareResult, normalizeCompareResult } from './helpers'

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

export const compareNumberReverse = invert(compareNumber)
export const compareNumberAbsReverse = invert(compareNumberAbs)
export const compareArrayLengthReverse = invert(compareArrayLength)
export const compareStringReverse = invert(compareString)
export const compareDateReverse = invert(compareDate)
