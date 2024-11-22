import type { AnyArray, AnyObject, Collection, CollectionKey, FnIterate, FnIterateDeep } from '@webshrine/stdtyp'
import { isCollection } from '@/guards'
import { symbols } from '@/transformers'

/**
 *
 */
export const forEachItem = <T extends AnyArray>(
  array: T,
  cb: FnIterate<T[number], number>,
) => {
  for (let index = 0, max = array.length; index < max; index++)
    cb(array[index], index, array)
}

/**
 *
 */
export const forEachValue = (
  object: Record<CollectionKey, any>,
  cb: FnIterate<any, string>,
) => {
  for (const key in object)
    cb(object[key], key, object)
}

/**
 *
 */
export const forEachSymbol = (
  object: AnyObject,
  cb: FnIterate<any, symbol>,
) => {
  forEachItem(
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
    ? forEachItem(collection, cb)
    : forEachValue(collection, cb)
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
