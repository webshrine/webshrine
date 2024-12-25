import type { FnReduceIterate } from '@webshrine/stdtyp'

/** @category Reducers */
export const reduceNumbersToSumNumber: FnReduceIterate<number> = (acc = 0, value) => acc + value

/** @category Reducers */
export const reduceNumbersToMaxNumber: FnReduceIterate<number> = (acc, value) => Math.max(acc ?? value, value)

/** @category Reducers */
export const reduceNumbersToMinNumber: FnReduceIterate<number> = (acc, value) => Math.min(acc ?? value, value)

/** @category Reducers */
export const reduceStringsToMaxLengthNumber: FnReduceIterate<string, number> = (acc, value) => Math.max(acc ?? value.length, value.length)

/** @category Reducers */
export const reduceStringsToMinLengthNumber: FnReduceIterate<string, number> = (acc, value) => Math.min(acc ?? value.length, value.length)

/** @category Reducers */
export const reduceStringsToLongestString: FnReduceIterate<string> = (acc = '', value) => (acc.length > value.length) ? acc : value

/** @category Reducers */
export const reduceStringsToShortestString: FnReduceIterate<string> = (acc, value) => (acc !== undefined && acc.length < value.length) ? acc : value

/** @category Reducers */
export const reduceDatesToSumDate: FnReduceIterate<Date> = (acc, value) => {
  if (acc) {
    acc.setTime(acc.getTime() + value.getTime())
    return acc
  }
  return new Date(value)
}
