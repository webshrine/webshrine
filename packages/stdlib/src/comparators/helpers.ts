import type { CompareFn, CompareResultValue } from '@webshrine/stdtyp'

export const invertComparator = <T>(compareFn: CompareFn<T>): CompareFn<T> => (a, b) => compareFn(b, a) as CompareResultValue

export const enum CompareResult {
  EQUAL = 0,
  A_IS_GREATER = 1,
  B_IS_GREATER = -1,
}

/**
 * Converts any number to `CompareResultValue` value, using the number sign
 * @returns CompareResultValue
 */
export function normalizeCompareResult(value: number): CompareResultValue {
  return value > 0
    ? CompareResult.A_IS_GREATER
    : value < 0
      ? CompareResult.B_IS_GREATER
      : CompareResult.EQUAL
}

/**
 * The same as `normalizeCompareResult`, but also converts boolean values
 * @returns CompareResultValue
 */
export function toCompareResult(value: number | boolean): CompareResultValue {
  return typeof value === 'boolean'
    ? (value ? CompareResult.A_IS_GREATER : CompareResult.B_IS_GREATER)
    : normalizeCompareResult(value)
}
