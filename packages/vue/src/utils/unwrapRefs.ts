import type { AnyObject } from '@webshrine/stdlib'
import type { Ref } from 'vue'
import { forValues } from '@webshrine/stdlib'
import { isRef } from 'vue'

export type UnwrapRefs<T> = {
  [K in keyof T]: T[K] extends Ref ? T[K]['value'] : T[K]
} & {}

/**
 *
 */
export function unwrapRefs<T extends AnyObject>(target: T): UnwrapRefs<T> {
  const result: Record<PropertyKey, any> = {}
  forValues(target, (value, key) => {
    if (isRef(value)) {
      Object.defineProperty(result, key, {
        enumerable: true,
        get: () => value.value,
        set: (newValue) => { value.value = newValue },
      })
    }
    else {
      result[key] = value
    }
  })
  return result as UnwrapRefs<T>
}
