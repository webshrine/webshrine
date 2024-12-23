/* eslint-disable jsdoc/require-jsdoc */
import type { InjectionKey } from 'vue'
import type { UseAsyncReturn } from './useAsync'
import { inject } from 'vue'
import { useAsync } from './useAsync'

type InjectableSource<T> = InjectionKey<T> | string

type AsyncSource<T> = Promise<T> | (() => Promise<T>)

type UseSource<T> = InjectableSource<T> | AsyncSource<T>

const isProvidableSource = <T>(source: UseSource<T>): source is InjectableSource<T> => {
  return typeof source === 'string' || typeof source === 'symbol'
}
const isAsyncSource = <T>(source: UseSource<T>): source is AsyncSource<T> =>
  typeof source === 'function' || source instanceof Promise

export function use<T>(source: InjectableSource<T>): T | undefined
export function use<T>(source: AsyncSource<T>, initialState: T): UseAsyncReturn<T, []>
export function use<T>(source: UseSource<T>, initialState?: T) {
  if (isProvidableSource(source)) {
    return inject(source)
  }
  if (isAsyncSource(source)) {
    return useAsync<T>(source, initialState!)
  }
  return source
}
