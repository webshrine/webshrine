import type { Lengthy, Numeric } from '@webshrine/stdtyp'
import { clampBase, maxNumeric, minNumeric } from './numerable.helpers'

/**
 * Clamps a number between a minimum and maximum value.
 * @category Transformers
 */
export const clampNumber = clampBase<number>

/**
 * Clamps a bigint between a minimum and maximum value.
 * @category Transformers
 */
export const clampBigInt = clampBase<bigint>

/**
 * Clamps a numeric between a minimum and maximum value.
 * @category Transformers
 */
export const clamp = <T extends Numeric>(numeric: T, min: Numeric, max: Numeric): T => (
  typeof numeric === 'number'
    ? clampNumber(numeric, Number(min), Number(max))
    : clampBigInt(numeric, BigInt(min), BigInt(max))
) as T

/**
 * Returns the minimal one of two numbers.
 * @category Transformers
 */
export const minNumber = minNumeric<number>

/**
 * Returns the minimal one of two bigints.
 * @category Transformers
 */
export const minBigInt = minNumeric<bigint>

/**
 * Returns the shortest Lengthy value.
 * @category Transformers
 */
export const shortest = <T extends Lengthy>(lengthy1: T, lengthy2: T): T => lengthy1.length > lengthy2.length ? lengthy2 : lengthy1

/**
 * Returns the minimal one of two numeric values or shortest of Lengthy values.
 * @category Transformers
 */
export const min = <T extends Numeric | Lengthy>(numerable1: T, numerable2: T): T => {
  switch (typeof numerable1) {
    case 'number':
    case 'bigint':
      return minNumeric(numerable1, numerable2 as typeof numerable1) as T
    default:
      return shortest(numerable1, numerable2 as Lengthy) as T
  }
}

/** @category Transformers */
export const maxNumber = maxNumeric<number>

/** @category Transformers */
export const maxBigInt = maxNumeric<bigint>

/**
 * Returns the longest Lengthy value.
 * @category Transformers
 */
export const longest = <T extends Lengthy>(lengthy1: T, lengthy2: T): T => lengthy1.length < lengthy2.length ? lengthy2 : lengthy1

/**
 * Returns the maximal one of two numeric values or longest of Lengthy values.
 * @category Transformers
 */
export const max = <T extends Numeric | Lengthy>(numerable1: T, numerable2: T): T => {
  switch (typeof numerable1) {
    case 'number':
    case 'bigint':
      return maxNumeric(numerable1, numerable2 as typeof numerable1) as T
    default:
      return longest(numerable1, numerable2 as Lengthy) as T
  }
}
