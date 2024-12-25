import type { InjectionKey } from 'vue'
import type { UseAsyncReturn } from './useAsync'
import { inject } from 'vue'
import { useAsync } from './useAsync'

/** @category Composables */
type InjectableSource<T> = InjectionKey<T> | string

/** @category Composables */
type AsyncSource<T> = Promise<T> | (() => Promise<T>)

/** @category Composables */
type UseSource<T> = InjectableSource<T> | AsyncSource<T>

/** @category Composables */
const isProvidableSource = <T>(source: UseSource<T>): source is InjectableSource<T> => {
  return typeof source === 'string' || typeof source === 'symbol'
}

/** @category Composables */
const isAsyncSource = <T>(source: UseSource<T>): source is AsyncSource<T> =>
  typeof source === 'function' || source instanceof Promise

/** @category Composables */
export function use<T>(source: InjectableSource<T>): T | undefined

/** @category Composables */
export function use<T>(source: AsyncSource<T>, initialState: T): UseAsyncReturn<T, []>

/** @category Composables */
export function use<T>(source: UseSource<T>, initialState?: T) {
  if (isProvidableSource(source)) {
    return inject(source)
  }
  if (isAsyncSource(source)) {
    return useAsync<T>(source, initialState!)
  }
  return source
}
