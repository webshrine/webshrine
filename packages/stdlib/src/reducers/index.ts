import type { ReduceFn } from '@webshrine/stdtyp'

export const reduceNumbersToSumNumber: ReduceFn<number> = (acc = 0, value) => acc + value
export const reduceNumbersToMaxNumber: ReduceFn<number> = (acc, value) => Math.max(acc ?? value, value)
export const reduceNumbersToMinNumber: ReduceFn<number> = (acc, value) => Math.min(acc ?? value, value)

export const reduceStringsToMaxLengthNumber: ReduceFn<string, number> = (acc, value) => Math.max(acc ?? value.length, value.length)
export const reduceStringsToMinLengthNumber: ReduceFn<string, number> = (acc, value) => Math.min(acc ?? value.length, value.length)

export const reduceStringsToLongestString: ReduceFn<string> = (acc = '', value) => (acc.length > value.length) ? acc : value
export const reduceStringsToShortestString: ReduceFn<string> = (acc, value) => (acc !== undefined && acc.length < value.length) ? acc : value

export const reduceDatesToSumDate: ReduceFn<Date> = (acc, value) => {
  if (acc) {
    acc.setTime(acc.getTime() + value.getTime())
    return acc
  }
  return new Date(value)
}
