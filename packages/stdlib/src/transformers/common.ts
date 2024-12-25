import type { AnyArray, AnyObject, Collection, CollectionKey, KeysDeep } from '@webshrine/stdtyp'
import { forEachDeep, timesMap } from '../utils'

// TODO: Think about support Collection also

/**
 * Returns an array of string keys for the given object.
 * @example
 * keys({ a: 1, b: 2, [Symbol('c')]: 3 }) // ['a', 'b']
 * @category Transformers
 */
export const keys = <T extends AnyObject>(object: T) => Object.keys(object) as Array<{
  [K in keyof T]: K extends string
  ? K
  : K extends number
  ? `${K}`
  : never
}[keyof T]>

/** @category Transformers */
const indexExtractor = (_: any, index: number) => index

/**
 * Returns an array of indexes for the given array.
 * @example
 * indexes(['a', 'b', 'c']) // [0, 1, 2]
 * @category Transformers
 */
export const indexes = (array: AnyArray) => timesMap(array.length, indexExtractor)

/**
 * Returns an array of symbol keys for the given object.
 * @example
 * symbols({ a: 1, b: 2, [Symbol('c')]: 3 }) // [Symbol(c)]
 * @category Transformers
 */
export const symbols = <T extends AnyObject>(object: T) => Object.getOwnPropertySymbols(object) as Array<{
  [K in keyof T]: K extends symbol ? K : never
}[keyof T]>

/**
 * Returns an array of values for the given object.
 * @example
 * values({ a: 1, b: 2, [Symbol('c')]: 3 }) // [1, 2, 3]
 * @category Transformers
 */
export const values = <T extends AnyObject>(object: T) => Object.values(object) as Array<T[keyof T]>

/**
 * Returns an array of string and symbol keys for the given object.
 * - Implements `keyof` from Typescript.
 * @category Transformers
 */
export const keyOf = <T extends AnyObject>(object: T): Array<keyof T> => (keys(object) as any[]).concat(symbols(object))

/**
 *  Returns an array of string keys for the given object, including keys from nested objects.
 * @example
 * keysDeep({ a: 1, b: { c: 2, d: { e: 3 } } }) // ['a', 'b', 'c', 'd', 'e']
 * @category Transformers
 */
export const keysDeep = <T extends AnyObject>(object: T) => {
  const keysSet = new Set<string>()

  forEachDeep(object, (_value, key) => {
    if (typeof key === 'string')
      keysSet.add(key)
  })

  return [...keysSet] as KeysDeep<T>[]
}

/**
 * Returns an array of keys or indexes for the given collection.
 * @example
 * collectionKeys({ a: 1, b: 2, [Symbol('c')]: 3 }) // ['a', 'b', 'c']
 * collectionKeys(['a', 'b', 'c']) // [0, 1, 2]
 * @category Transformers
 */
export const collectionKeys = (collection: Collection): CollectionKey[] => Array.isArray(collection) ? indexes(collection) : keys(collection)
