import type { AnyArray, AnyObject, Collection, CollectionKey, FnIterate, FnIterateDeep, FnIterateTimes } from '@webshrine/stdtyp'
import { isCollection } from '@/guards'
import { symbols } from '@/transformers'

/**
 *
 */
export const forItems = <T extends AnyArray>(
  array: T,
  cb: FnIterate<T[number], number>,
) => {
  for (let index = 0, max = array.length; index < max; index++)
    cb(array[index], index, array)
}

/**
 *
 */
export const forValues = (
  object: Record<CollectionKey, any>,
  cb: FnIterate<any, string>,
) => {
  for (const key in object)
    cb(object[key], key, object)
}

/**
 *
 */
export const forSymbols = (
  object: AnyObject,
  cb: FnIterate<any, symbol>,
) => {
  forItems(
    symbols(object),
    symbol => cb(object[symbol], symbol, object),
  )
}

/**
 *
 */
export const forEach = (
  collection: Collection,
  cb: FnIterate<any, CollectionKey>,
) => {
  Array.isArray(collection)
    ? forItems(collection, cb)
    : forValues(collection, cb)
}

function forEachDeepIterate(
  callback: FnIterateDeep<any, CollectionKey>,
  node: Collection | any,
  level: number,
) {
  if (isCollection(node)) {
    const nextLevel = level + 1
    forEach(node, (value, key) => {
      callback(value, key, node, level)
      forEachDeepIterate(callback, value, nextLevel)
    })
  }
}

/**
 * Iterates each item of recursive structure.
 * @example
 * const obj = {
 *   a: 1,
 *   b: { ba: 2 },
 *   [Symbol('')]: 3,
 *   c: [{ caa: 4 }, { cab: 5 }],
 * }
 * forEachDeep(obj, (value, key, parent, level) => {
 *   ...Will iterate keys: a, b, ba, c, 0, caa, 1, cab
 * })
 */
export function forEachDeep<T extends Collection>(
  data: T,
  callback: FnIterateDeep<any, CollectionKey>,
) {
  forEachDeepIterate(callback, data, 0)
}

/**
 * Iterates over a given number of times, calling the provided callback function for each iteration.
 * @example
 * times(3, (number, index, count) => {
 *  console.log(`№${number} #${index} of ${count}`)
 * })
 * // => '№1 #0 of 3'
 * // => '№2 #1 of 3'
 * // => '№3 #2 of 3'
 */
export function times(count: number, callback: FnIterateTimes) {
  for (let index = 0; index < count; index++)
    callback(index + 1, index, count)
}

/**
 * Iterates over a given number of times, calling the provided callback function for each iteration.
 * - Returns an array of the results of each iteration.
 * @example
 * timesMap(3, (number, index, count) => `№${number} #${index} of ${count}`)
 * // => ['№1 #0 of 3', '№2 #1 of 3', '№3 #2 of 3']
 */
export function timesMap<T extends FnIterateTimes<any>>(
  count: number,
  callback: T,
): ReturnType<T>[] {
  const result: ReturnType<T>[] = []
  for (let index = 0; index < count; index++)
    result[index] = callback(index + 1, index, count)
  return result
}
