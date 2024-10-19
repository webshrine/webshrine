import { klona } from 'klona'

import { klona as klonaJson } from 'klona/json'

/**
 * Clones JSON-compatible data recursively, faster than `clone`
 * Clones String, Number, null, Array, Object
 * @see https://github.com/lukeed/klona
 */
// TODO refactor it to support all data, dont focus on json
export const copy = klonaJson

/**
 * Clones complex structures recursively, slower than `copy`
 * Clones the same types, as `copy`, but adds custom classes, Date, RegExp, Map, Set, DataView, ArrayBuffer, TypedArray
 * @see https://github.com/lukeed/klona
 */
export const clone = klona
