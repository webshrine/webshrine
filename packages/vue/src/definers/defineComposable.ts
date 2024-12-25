import type { AnyArrayOptional, AnyObject, Fn } from '@webshrine/stdtyp'
import type { UnwrapNestedRefs } from 'vue'
import { once, pipe, through } from '@webshrine/stdlib'
import { reactive } from 'vue'

/** @category Definers */
type ComposableInstance = AnyObject

/** @category Definers */
type ComposableSetup = Fn<AnyArrayOptional, ComposableInstance>

/** @category Definers */
interface DefineComposableOptions {

  /** Flattens refs in the result of the setup, keeping reactivity */
  flat?: boolean

  /** Ensures that the composable is only created once and returns the same instance on subsequent calls */
  singleton?: boolean

  setup: ComposableSetup
}

/** @category Definers */
const flatter = <S extends DefineComposableOptions['setup']>(setup: S) =>
  (...args: Parameters<S>) => reactive(setup(...args)) as UnwrapNestedRefs<ReturnType<S>>

/**
 * Creates composable function with declarative control of behaviour.
 * @category Definers
 */
export function defineComposable<O extends DefineComposableOptions>(
  options: O,
): O['flat'] extends true ? ReturnType<typeof flatter<O['setup']>> : O['setup'] {
  return pipe(
    options.flat ? flatter : through,
    options.singleton ? once : through,
  )(options.setup)
}
