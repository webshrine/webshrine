import type { AsyncSource } from '@/types/utilities'
import type { Ref } from 'vue'
import { noop } from '@webshrine/stdlib'
import { shallowRef } from 'vue'

export interface UseAsyncReturn<Data, Params extends any[]> {
  readonly value: Data
  isReady: Ref<boolean>
  isLoading: Ref<boolean>
  error: Ref<unknown>
  execute: (...args: Params) => Promise<Data>
}

export interface UseAsyncOptions<D = any> {
  /**
   * Execute the promise right after the function is invoked.
   * Will apply the delay if any.
   *
   * When set to false, you will need to execute it manually.
   * @default true
   */
  immediate?: boolean

  /**
   * Callback when success is caught.
   */
  onSuccess?: (data: D) => void

  /**
   * Callback when error is caught.
   */
  onError?: (e: unknown) => void

  /**
   * Sets the state to initialState before executing the promise.
   *
   * This can be useful when calling the execute function more than once (for
   * example, to refresh data). When set to false, the current state remains
   * unchanged until the promise resolves.
   * @default true
   */
  resetOnExecute?: boolean
}

/**
 * A composable function that helps with managing async operations.
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
    onError = noop,
  } = options
  const state = shallowRef(initialState)
  const isReady = shallowRef(false)
  const isLoading = shallowRef(false)
  const error = shallowRef<unknown | undefined>(undefined)

  const callback = (typeof source === 'function' ? source : () => source) as (...args: Params) => Data

  async function execute(...args: Params) {
    if (resetOnExecute)
      state.value = initialState
    error.value = undefined
    isReady.value = false
    isLoading.value = true

    try {
      const data = await callback(...args)
      state.value = data
      isReady.value = true
      onSuccess(data)
    }
    catch (e) {
      error.value = e
      onError(e)
    }
    finally {
      isLoading.value = false
    }

    return state.value as Data
  }

  if (immediate)
    execute()

  return {
    get value() {
      return state.value
    },
    isReady,
    isLoading,
    error,
    execute,
  }
}
