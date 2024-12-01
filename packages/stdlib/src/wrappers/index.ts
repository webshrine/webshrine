import type { Fn, FnAsync, FnAsyncPredicate, FnPredicate, FnWrapper } from '@webshrine/stdtyp'
import _debounce from 'debounce'
import throttleit from 'throttleit'

export {
  // memoize, // TODO: Find alternative package
} from 'lodash-es'

export const debounce = _debounce
export const throttle = throttleit

/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
 * of the first call. The func is invoked with the this binding and arguments of the created function.
 */
export const once = (<T extends Fn>(fn: T): T => {
  let wasCalled = false
  let result: any
  return ((...args: any[]) => {
    if (!wasCalled) {
      wasCalled = true
      result = fn(...args)
    }
    return result
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
 */
export const negate = <T extends FnPredicate | FnAsyncPredicate>(fn: T): T => {
  return ((...args: any[]) => {
    const result = fn(...args)
    return typeof result === 'boolean' ? !result : result.then(r => !r)
  }) as T
}
