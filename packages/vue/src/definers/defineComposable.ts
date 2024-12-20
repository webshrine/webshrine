import type { UnwrapRefs } from '@/utils'
import type { AnyArrayOptional, AnyObject, Fn } from '@webshrine/stdlib'
import { unwrapRefs } from '@/utils'
import { once, pipe, through } from '@webshrine/stdlib'

type ComposableInstance = AnyObject
type ComposableSetup = Fn<AnyArrayOptional, ComposableInstance>

interface DefineComposableOptions {

  /** Flattens refs in the result of the setup, keeping reactivity */
  flatten?: boolean

  /** Ensures that the composable is only created once and returns the same instance on subsequent calls */
  singleton?: boolean

  setup: ComposableSetup
}

const flatter = <S extends DefineComposableOptions['setup']>(setup: S) =>
  (...args: Parameters<S>) => unwrapRefs(setup(...args)) as UnwrapRefs<ReturnType<S>>

/**
 * Creates composable function with declarative control of behaviour.
 */
export function defineComposable<O extends DefineComposableOptions>(
  options: O,
): O['flatten'] extends true ? ReturnType<typeof flatter<O['setup']>> : O['setup'] {
  return pipe(
    options.flatten ? flatter : through,
    options.singleton ? once : through,
  )(options.setup)
}
