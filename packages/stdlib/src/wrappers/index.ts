import type { Fn, FnAsyncPredicate, FnCompare, FnPredicate, FnWrapper } from '@webshrine/stdtyp'
import { debounce as perfectDebounce } from 'perfect-debounce'
import throttleit from 'throttleit'

export {
  // memoize, // TODO: Find alternative package
} from 'lodash-es'

/** @category Wrappers */
export const debounce = perfectDebounce satisfies FnWrapper

/** @category Wrappers */
export const throttle = throttleit satisfies FnWrapper

/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
 * of the first call. The func is invoked with the this binding and arguments of the created function.
 * @category Wrappers
 */
export const once = (<T extends Fn>(fn: T): T => {
  let wasCalled = false
  let result: any
  return ((...args: any[]) => {
    if (wasCalled)
      return result
    wasCalled = true
    return result = fn(...args)
  }) as T
}) satisfies FnWrapper

/**
 * Creates a function that negates the result of the predicate `fn`.
 * - Supports async predicates.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 * const isOdd = _.negate(isEven);
 *
 * _.filter([1, 2, 3, 4, 5, 6], isOdd);
 * // => [1, 3, 5]
 * @category Wrappers
 */
export const negate = (<T extends FnPredicate | FnAsyncPredicate>(fn: T): T => (
  (...args: any[]) => {
    const result = fn(...args)
    return typeof result === 'boolean' ? !result : result.then(r => !r)
  }
) as T) satisfies FnWrapper<FnPredicate | FnAsyncPredicate>

/**
 *  Creates a function that inverts comparison result of received comparing function.
 * @example
 * const ascending = compareNumbers
 * const descending = invert(ascending)
 *
 * [3, 1, 2].sort(ascending) // [1, 2, 3]
 * [3, 1, 2].sort(descending) // [3, 2, 1]
 * @category Wrappers
 */
export const invert = <T>(compareFn: FnCompare<T>): FnCompare<T> => (a, b) => compareFn(b, a)
