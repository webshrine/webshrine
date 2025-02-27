import type { CompareResultValue } from '@webshrine/stdtyp'

/** @category Comparators */
export const enum CompareResult {
  EQUAL = 0,
  A_IS_GREATER = 1,
  B_IS_GREATER = -1,
}

/**
 * Converts any number to `CompareResultValue` value, using the number sign.
 * @returns CompareResultValue
 * @category Comparators
 */
export function normalizeCompareResult(value: number): CompareResultValue {
  return value > 0
    ? CompareResult.A_IS_GREATER
    : value < 0
      ? CompareResult.B_IS_GREATER
      : CompareResult.EQUAL
}

/**
 * The same as `normalizeCompareResult`, but also converts boolean values.
 * @returns CompareResultValue
 * @category Comparators
 */
export function toCompareResult(value: number | boolean): CompareResultValue {
  return typeof value === 'boolean'
    ? (value ? CompareResult.A_IS_GREATER : CompareResult.B_IS_GREATER)
    : normalizeCompareResult(value)
}
