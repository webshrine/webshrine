import type { FnReduceIterate } from '@webshrine/stdtyp'

/**
 *
 */
export const reduceNumbersToSumNumber: FnReduceIterate<number> = (acc = 0, value) => acc + value

/**
 *
 */
export const reduceNumbersToMaxNumber: FnReduceIterate<number> = (acc, value) => Math.max(acc ?? value, value)

/**
 *
 */
export const reduceNumbersToMinNumber: FnReduceIterate<number> = (acc, value) => Math.min(acc ?? value, value)

/**
 *
 */
export const reduceStringsToMaxLengthNumber: FnReduceIterate<string, number> = (acc, value) => Math.max(acc ?? value.length, value.length)

/**
 *
 */
export const reduceStringsToMinLengthNumber: FnReduceIterate<string, number> = (acc, value) => Math.min(acc ?? value.length, value.length)

/**
 *
 */
export const reduceStringsToLongestString: FnReduceIterate<string> = (acc = '', value) => (acc.length > value.length) ? acc : value

/**
 *
 */
export const reduceStringsToShortestString: FnReduceIterate<string> = (acc, value) => (acc !== undefined && acc.length < value.length) ? acc : value

/**
 *
 */
export const reduceDatesToSumDate: FnReduceIterate<Date> = (acc, value) => {
  if (acc) {
    acc.setTime(acc.getTime() + value.getTime())
    return acc
  }
  return new Date(value)
}
