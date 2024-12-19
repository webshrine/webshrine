import type { AnyArrayOptional, Fn } from '@webshrine/stdlib'
import { once, through } from '@webshrine/stdlib'

type ComposableInstance = Record<PropertyKey, any>

interface DefineComposableOptions {
  singleton?: boolean
  setup: Fn<AnyArrayOptional, ComposableInstance>
}

/**
 * Creates composable function with declarative control of behaviour.
 */
export function defineComposable<
  Options extends DefineComposableOptions,
>(options: Options): Options['setup'] {
  const wrapper = !options.singleton ? through : once

  return wrapper(options.setup)
}
