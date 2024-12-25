import type { AnyArray, FnCompare } from '@webshrine/stdtyp'
import { invert } from '../wrappers'
import { CompareResult, normalizeCompareResult } from './helpers'

export * from './helpers'

/** @category Comparators */
export const compareNumbers: FnCompare<number> = (a, b) => (
  a > b
    ? CompareResult.A_IS_GREATER
    : a < b
      ? CompareResult.B_IS_GREATER
      : CompareResult.EQUAL
)

/** @category Comparators */
export const compareNumbersAbs: FnCompare<number> = (a, b) => compareNumbers(Math.abs(a), Math.abs(b))

/** @category Comparators */
export const compareArrayLengths: FnCompare<AnyArray> = (a, b) => compareNumbers(a.length, b.length)

/** @category Comparators */
export const compareStrings: FnCompare<string> = (a, b) => normalizeCompareResult(a.localeCompare(b))

/** @category Comparators */
export const compareDates: FnCompare<Date> = (a, b) => compareNumbers(a.getTime(), b.getTime())

/** @category Comparators */
export const compareNumbersReverse = invert(compareNumbers)

/** @category Comparators */
export const compareNumbersAbsReverse = invert(compareNumbersAbs)

/** @category Comparators */
export const compareArrayLengthsReverse = invert(compareArrayLengths)

/** @category Comparators */
export const compareStringsReverse = invert(compareStrings)

/** @category Comparators */
export const compareDatesReverse = invert(compareDates)
