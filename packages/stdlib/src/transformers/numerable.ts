import type { Lengthy, Numeric } from '@webshrine/stdtyp'

/** @category Transformers */
const clampBase = <T extends Numeric>(numeric: T, min: T, max: T): T => (
  numeric > max
    ? max
    : numeric < min
      ? min
      : numeric
)

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

/** @category Transformers */
const minBase = <T extends Numeric>(numeric1: T, numeric2: T): T => numeric1 > numeric2 ? numeric2 : numeric1

/**
 * Returns the minimal one of two numbers.
 * @category Transformers
 */
export const minNumber = minBase<number>

/**
 * Returns the minimal one of two bigints.
 * @category Transformers
 */
export const minBigInt = minBase<bigint>

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
      return minNumber(numerable1, numerable2 as number) as T
    case 'bigint':
      return minBigInt(numerable1, numerable2 as bigint) as T
    default:
      return shortest(numerable1, numerable2 as Lengthy) as T
  }
}

/** @category Transformers */
const maxBase = <T extends Numeric>(numeric1: T, numeric2: T): T => numeric1 < numeric2 ? numeric2 : numeric1

/** @category Transformers */
export const maxNumber = maxBase<number>

/** @category Transformers */
export const maxBigInt = maxBase<bigint>

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
      return maxNumber(numerable1, numerable2 as number) as T
    case 'bigint':
      return maxBigInt(numerable1, numerable2 as bigint) as T
    default:
      return longest(numerable1, numerable2 as Lengthy) as T
  }
}
