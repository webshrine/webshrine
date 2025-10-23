export * from './clamp'

import type { Lengthy, Numeric, Sized } from '@webshrine/stdtyp'
import { isSized } from '../guards'
import { maxNumeric, minNumeric } from './index.helpers'

/**
 * Returns the minimal one of two numbers.
 * @category Choosers
 */
export const minNumber = minNumeric<number>

/**
 * Returns the minimal one of two bigints.
 * @category Choosers
 */
export const minBigInt = minNumeric<bigint>

/**
 * Returns the shortest Lengthy object.
 * @category Choosers
 */
export const shortest = <T extends Lengthy>(lengthy1: T, lengthy2: T): T => lengthy1.length > lengthy2.length ? lengthy2 : lengthy1

/**
 * Returns the smallest Sized object.
 * @category Choosers
 */
export const smallest = <T extends Sized>(sized1: T, sized2: T): T => sized1.size > sized2.size ? sized2 : sized1

/**
 * Returns the minimal one of two numeric values, shortest of Lengthy, or smallest of Sized values/objects.
 * @category Choosers
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

/** @category Choosers */
export const maxNumber = maxNumeric<number>

/** @category Choosers */
export const maxBigInt = maxNumeric<bigint>

/**
 * Returns the longest Lengthy object.
 * @category Choosers
 */
export const longest = <T extends Lengthy>(lengthy1: T, lengthy2: T): T => lengthy1.length < lengthy2.length ? lengthy2 : lengthy1

/**
 * Returns the smallest Sized object.
 * @category Choosers
 */
export const biggest = <T extends Sized>(sized1: T, sized2: T): T => sized1.size < sized2.size ? sized2 : sized1

/**
 * Returns the maximal one of two numeric values, longest of Lengthy, or biggest of Sized values/objects.
 * @category Choosers
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
