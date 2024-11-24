/* eslint-disable eqeqeq */
import type { FnMatch } from '@webshrine/stdtyp'

import {
  eq,
  isEqual,
} from 'lodash-es'

/**
 * Performs a strict equality comparison between two values.
 * The same as `a === b` comparison.
 * @example
 * areSame(1, 1); // => true
 * areSame(1, '1'); // => false
 * areSame({}, {}); // => false
 */
export const areSame: FnMatch = (a, b) => a === b

/**
 * Performs a equality comparison between two values.
 * The same as `a == b` comparison.
 * @example
 * areSimilar(1, 1); // => true
 * areSimilar(1, '1'); // => true
 * areSimilar({}, {}); // => false
 */
export const areSimilar: FnMatch = (a, b) => a == b

/**
 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 * @experimental
 * @example
 * const object = { 'user': 'fred' };
 * const other = { 'user': 'fred' };
 *
 * areSameValueZero(object, object); // => true
 * areSameValueZero(object, other); // => false
 * areSameValueZero('a', 'a'); // => true
 * areSameValueZero('a', Object('a')); // => false
 * areSameValueZero(NaN, NaN); // => true
 */
export const areSameValueZero: FnMatch = eq

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are **not** supported.
 * @example
 * const object = { 'user': 'fred' };
 * const other = { 'user': 'fred' };
 *
 * areEqual(object, other); // => true
 * object === other; // => false
 */
export const areEqual: FnMatch = isEqual
