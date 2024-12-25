import { klona } from 'klona'

import { klona as klonaJson } from 'klona/json'

/**
 * Clones `Primitive` values, plain objects and arrays recursively
 * @see https://github.com/lukeed/klona
 * @category Utils
 */
export const copy = klonaJson

/**
 * Clones complex structures recursively, slower than `copy`
 * Clones the same types, as `copy`, but adds custom classes, Date, RegExp, Map, Set, DataView, ArrayBuffer, TypedArray
 * @see https://github.com/lukeed/klona
 * @category Utils
 */
export const clone = klona
