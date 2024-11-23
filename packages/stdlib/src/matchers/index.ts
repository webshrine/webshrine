import type { FnMatch } from '@webshrine/stdtyp'

import {
  eq,
  isEqual,
} from 'lodash'

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
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * areEqual(object, other); // => true
 * object === other; // => false
 */
export const areEqual: FnMatch = (a, b) => isEqual(a, b)
