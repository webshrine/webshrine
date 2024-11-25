import type { Fn, FnPredicate, FnWrapper } from '@webshrine/stdtyp'

export {
  debounce,
  memoize,
  throttle,
} from 'lodash-es'

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
 * Creates a function that negates the result of the predicate `fn`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
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
export const negate = <T extends FnPredicate>(fn: T): T => {
  return ((...args: any[]) => !fn(...args)) as T
} // TODO: add async callback support
