import type { AnyArray, AnyArrayOptional, Fn } from '@webshrine/stdlib'
import { unwrapRefs } from '@/utils'
import { once, pipe, through } from '@webshrine/stdlib'

type ComposableInstance = Record<PropertyKey, any>

interface DefineComposableOptions {

  /** Flattens refs in the result of the setup, keeping reactivity */
  flatten?: boolean

  /** Ensures that the composable is only created once and returns the same instance on subsequent calls */
  singleton?: boolean

  setup: Fn<AnyArrayOptional, ComposableInstance>
}

const flatter = (r: DefineComposableOptions['setup']) =>
  (...args: AnyArray) => unwrapRefs(r(...args))

/**
 * Creates composable function with declarative control of behaviour.
 */
export function defineComposable<
  Options extends DefineComposableOptions,
>(options: Options): Options['setup'] {
  return pipe(
    options.flatten ? flatter : through,
    options.singleton ? once : through,
  )(options.setup)
}
