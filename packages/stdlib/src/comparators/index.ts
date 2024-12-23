import type { AnyArray, FnCompare } from '@webshrine/stdtyp'
import { invert } from '../wrappers'
import { CompareResult, normalizeCompareResult } from './helpers'

export * from './helpers'

/**
 *
 */
export const compareNumbers: FnCompare<number> = (a, b) => (
  a > b
    ? CompareResult.A_IS_GREATER
    : a < b
      ? CompareResult.B_IS_GREATER
      : CompareResult.EQUAL
)

/**
 *
 */
export const compareNumbersAbs: FnCompare<number> = (a, b) => compareNumbers(Math.abs(a), Math.abs(b))

/**
 *
 */
export const compareArrayLengths: FnCompare<AnyArray> = (a, b) => compareNumbers(a.length, b.length)

/**
 *
 */
export const compareStrings: FnCompare<string> = (a, b) => normalizeCompareResult(a.localeCompare(b))

/**
 *
 */
export const compareDates: FnCompare<Date> = (a, b) => compareNumbers(a.getTime(), b.getTime())

export const compareNumbersReverse = invert(compareNumbers)
export const compareNumbersAbsReverse = invert(compareNumbersAbs)
export const compareArrayLengthsReverse = invert(compareArrayLengths)
export const compareStringsReverse = invert(compareStrings)
export const compareDatesReverse = invert(compareDates)
