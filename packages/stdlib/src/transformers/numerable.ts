import type { Lengthy, Numeric, Sized } from '@webshrine/stdtyp'
import { isSized } from '../guards'
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
 * Returns the shortest Lengthy object.
 * @category Transformers
 */
export const shortest = <T extends Lengthy>(lengthy1: T, lengthy2: T): T => lengthy1.length > lengthy2.length ? lengthy2 : lengthy1

/**
 * Returns the smallest Sized object.
 * @category Transformers
 */
export const smallest = <T extends Sized>(sized1: T, sized2: T): T => sized1.size > sized2.size ? sized2 : sized1

/**
 * Returns the minimal one of two numeric values, shortest of Lengthy, or smallest of Sized values/objects.
 * @category Transformers
 */
export const min = <T extends Numeric | Lengthy | Sized>(numerable1: T, numerable2: T): T => {
  switch (typeof numerable1) {
    case 'number':
    case 'bigint':
      return minNumeric(numerable1, numerable2 as typeof numerable1) as T
  }
  if (isSized(numerable1)) {
    return smallest(numerable1, numerable2 as Sized) as T
  }
  else {
    return shortest(numerable1, numerable2 as Lengthy) as T
  }
}

/** @category Transformers */
export const maxNumber = maxNumeric<number>

/** @category Transformers */
export const maxBigInt = maxNumeric<bigint>

/**
 * Returns the longest Lengthy object.
 * @category Transformers
 */
export const longest = <T extends Lengthy>(lengthy1: T, lengthy2: T): T => lengthy1.length < lengthy2.length ? lengthy2 : lengthy1

/**
 * Returns the smallest Sized object.
 * @category Transformers
 */
export const biggest = <T extends Sized>(sized1: T, sized2: T): T => sized1.size < sized2.size ? sized2 : sized1

/**
 * Returns the maximal one of two numeric values, longest of Lengthy, or biggest of Sized values/objects.
 * @category Transformers
 */
export const max = <T extends Numeric | Lengthy | Sized>(numerable1: T, numerable2: T): T => {
  switch (typeof numerable1) {
    case 'number':
    case 'bigint':
      return maxNumeric(numerable1, numerable2 as typeof numerable1) as T
  }
  if (isSized(numerable1)) {
    return biggest(numerable1, numerable2 as Sized) as T
  }
  else {
    return longest(numerable1, numerable2 as Lengthy) as T
  }
}
