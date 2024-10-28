import type { FnReduce } from '@webshrine/stdtyp'

export const reduceNumbersToSumNumber: FnReduce<number> = (acc = 0, value) => acc + value
export const reduceNumbersToMaxNumber: FnReduce<number> = (acc, value) => Math.max(acc ?? value, value)
export const reduceNumbersToMinNumber: FnReduce<number> = (acc, value) => Math.min(acc ?? value, value)

export const reduceStringsToMaxLengthNumber: FnReduce<string, number> = (acc, value) => Math.max(acc ?? value.length, value.length)
export const reduceStringsToMinLengthNumber: FnReduce<string, number> = (acc, value) => Math.min(acc ?? value.length, value.length)

export const reduceStringsToLongestString: FnReduce<string> = (acc = '', value) => (acc.length > value.length) ? acc : value
export const reduceStringsToShortestString: FnReduce<string> = (acc, value) => (acc !== undefined && acc.length < value.length) ? acc : value

export const reduceDatesToSumDate: FnReduce<Date> = (acc, value) => {
  if (acc) {
    acc.setTime(acc.getTime() + value.getTime())
    return acc
  }
  return new Date(value)
}
