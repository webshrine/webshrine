import type { AnyArray, AnyObject, FnIterate, FnIterateDeep, KeysDeep, MaybeLiteral, ValuesType } from '@webshrine/stdtyp'
import { isObject } from '@/guards'

export const forEachValue = <T extends AnyObject>(
  object: T,
  cb: FnIterate<T[keyof T], string, T>,
) => {
  for (const key in object)
    cb(object[key], key, object)
}

export const forEachItem = <T extends AnyArray>(
  array: T,
  cb: FnIterate<T[number], number, T>,
) => {
  for (let index = 0; index < array.length; index++)
    cb(array[index], index, array)
}

export const forEach = <
  T extends AnyObject | AnyArray,
  Item = T extends AnyArray ? T[number] : T[keyof T],
  Id = T extends AnyArray ? number : keyof T,
>(
  collection: T,
  cb: FnIterate<Item, Id>,
) => {
  // @ts-expect-error cb is universal
  Array.isArray(collection) ? forEachItem(collection, cb) : forEachValue(collection, cb)
}

function forEachDeepIterate<Parent = any>(
  callback: FnIterateDeep,
  node: Parent,
  level: number,
) {
  if (Array.isArray(node)) {
    const nextLevel = level + 1
    for (let index = 0; index <= node.length; index++) {
      callback(node[index], index, node, nextLevel)
      forEachDeepIterate(callback, node[index], nextLevel)
    }
  }
  else if (isObject(node)) {
    const nextLevel = level + 1
    for (const key in node) {
      callback(node[key], key, node, nextLevel)
      forEachDeepIterate(callback, node[key], nextLevel)
    }
  }
}

/**
 * Iterates each item of recursive structure
 * @example ```ts
 * const obj = {
 *  a: 1,
 *  b: { ba: 2 },
 *  c: [{ caa: 3 }, { cab: 4 }],
 * }
 * forEachDeep(obj, (value, key, parent, level) => {
 *  ...Will iterate keys: a, b, ba, c, 0, caa, 1, cab
 * })
 * ```
 */
export function forEachDeep<T extends AnyObject | AnyArray>(
  data: T,
  callback: FnIterateDeep<
    ValuesType<T>,
    number | MaybeLiteral<KeysDeep<T>>,
    T
  >,
) {
  forEachDeepIterate(callback, data, 0)
}
