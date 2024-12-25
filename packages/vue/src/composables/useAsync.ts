import type { MaybePromise } from '@webshrine/stdtyp'
import type { Ref } from 'vue'
import type { AsyncSource } from '../types/utilities'
import { noop } from '@webshrine/stdlib'
import { shallowRef } from 'vue'

/** @category Composables */
export interface UseAsyncReturn<Data, Params extends any[]> {
  readonly value: Data
  isPending: Ref<boolean>
  error: Ref<unknown>
  execute: (...args: Params) => Promise<Data>
}

/** @category Composables */
export type UseAsyncOptions<D = any> = {
  immediate?: boolean
  resetOnExecute?: boolean
  onSuccess?: (data: D) => void
  onError?: (e: unknown) => void
} | {
  immediate?: boolean
  resetOnExecute?: boolean
  onSuccess?: (data: D) => void
  onError?: (e: unknown) => void
}

/**
 * A composable function that helps with managing async operations.
 * @category Composables
 */
export function useAsync<Data, Params extends any[] = []>(
  source: AsyncSource<Data> | ((...args: Params) => Promise<Data>),
  initialState: Data,
  options: UseAsyncOptions<Data> = {},
): UseAsyncReturn<Data, Params> {
  const {
    immediate = true,
    resetOnExecute = true,
    onSuccess = noop,
    onError,
  } = options
  const state = shallowRef(initialState)
  const isPending = shallowRef(false)
  const error = shallowRef<unknown | undefined>(undefined)
  const callback: (...args: Params) => MaybePromise<Data> = typeof source === 'function' ? source : () => source

  async function execute(...args: Params) {
    if (resetOnExecute)
      state.value = initialState
    error.value = undefined
    isPending.value = true

    try {
      onSuccess(state.value = await callback(...args))
    }
    catch (e) {
      error.value = e
      if (onError)
        onError(e)
      else
        throw e
    }
    finally {
      isPending.value = false
    }

    return state.value as Data
  }

  if (immediate)
    // @ts-expect-error FIXME: find solution for parametrized callbacks
    execute()

  return {
    get value() {
      return state.value
    },
    isPending,
    error,
    execute,
  }
}
