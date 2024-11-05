import type { Fn, FnPredicate, FnWrapper } from '@webshrine/stdtyp'
import {
  debounce as lodashDebounce,
  memoize as lodashMemoize,
  negate as lodashNegate,
  once as lodashOnce,
  throttle as lodashThrottle,
} from 'lodash'

export const debounce = lodashDebounce satisfies FnWrapper
export const memoize = lodashMemoize satisfies FnWrapper
export const negate: FnWrapper<FnPredicate> = lodashNegate
export const once: FnWrapper<Fn, undefined> = lodashOnce
export const throttle = lodashThrottle satisfies FnWrapper
