import type { Fn, FnWrapper } from '@webshrine/stdtyp'

export {
  debounce,
  memoize,
  negate,
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
