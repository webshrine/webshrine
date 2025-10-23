import type { FnReduceIterate, Lengthy, Numeric } from '@webshrine/stdtyp'
import { maxNumeric, minNumeric } from '../choosers/index.helpers'
import { longest, shortest } from '../choosers'

/** @category Reducers */
const maxLengthy: Lengthy = { length: Infinity }

/** @category Reducers */
const minLengthy: Lengthy = { length: 0 }

/** @category Reducers */
export const reduceNumbersToSumNumber: FnReduceIterate<number, number> = (acc = 0, value) => acc + value

/** @category Reducers */
export const findMaxNumeric = (
  <T extends Numeric>(acc: T | undefined, value: T) => maxNumeric(value, acc ?? value)
) satisfies FnReduceIterate<Numeric, number>

/** @category Reducers */
export const findMinNumeric = (
  <T extends Numeric>(acc: T | undefined, value: T) => minNumeric(value, acc ?? value)
) satisfies FnReduceIterate<Numeric, number>

/** @category Reducers */
export const findMaxLength: FnReduceIterate<Lengthy, number, number> = (acc, value) => maxNumeric(value.length, acc ?? value.length)

/** @category Reducers */
export const findMinLength: FnReduceIterate<Lengthy, number, number> = (acc, value) => minNumeric(value.length, acc ?? value.length)

/** @category Reducers */
export const findLongest = (
  <T extends Lengthy>(acc = minLengthy as T, value: T): T => longest<T>(value, acc)
) satisfies FnReduceIterate<Lengthy>

/** @category Reducers */
export const findShortest = (
  <T extends Lengthy>(acc = maxLengthy as T, value: T): T => shortest<T>(value, acc)
) satisfies FnReduceIterate<Lengthy>
