import type { FnReduceIterate } from '@webshrine/stdtyp'

/** @category Reducers */
export const reduceNumbersToSumNumber: FnReduceIterate<number> = (acc = 0, value) => acc + value

/** @category Reducers */
export const reduceDatesToSumDate: FnReduceIterate<Date> = (acc, value) => {
  if (acc) {
    acc.setTime(acc.getTime() + value.getTime())
    return acc
  }
  return new Date(value)
}

/** @category Reducers */
export const findMaxNumber: FnReduceIterate<number> = (acc, value) => Math.max(acc ?? value, value)

/** @category Reducers */
export const findMinNumber: FnReduceIterate<number> = (acc, value) => Math.min(acc ?? value, value)

/** @category Reducers */
export const findMaxStringLength: FnReduceIterate<string, number> = (acc, value) => Math.max(acc ?? value.length, value.length)

/** @category Reducers */
export const findMinStringLength: FnReduceIterate<string, number> = (acc, value) => Math.min(acc ?? value.length, value.length)

/** @category Reducers */
export const findLongestString: FnReduceIterate<string> = (acc = '', value) => (acc.length > value.length) ? acc : value

/** @category Reducers */
export const findShortestString: FnReduceIterate<string> = (acc, value) => (acc !== undefined && acc.length < value.length) ? acc : value
