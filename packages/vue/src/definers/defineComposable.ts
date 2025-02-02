import type { AnyArrayOptional } from '@webshrine/stdtyp'
import type { DeepReadonly, UnwrapNestedRefs } from 'vue'
import type { ComposableSetup } from './helpers'
import { once, pipe, through } from '@webshrine/stdlib'
import { reactive, readonly, shallowReadonly } from 'vue'

/** @category Definers */
export interface DefineComposableOptions {

  /** Flattens refs in the result of the setup, keeping reactivity */
  flat?: boolean

  /** Ensures that the composable is only created once and returns the same instance on subsequent calls */
  singleton?: boolean

  readonly?: boolean

  setup: ComposableSetup
}

/** @category Definers */
const flatten = <S extends DefineComposableOptions['setup']>(setup: S) =>
  (...args: Parameters<S>) => reactive(setup(...args)) as UnwrapNestedRefs<ReturnType<S>>

/** @category Definers */
const flattenReadonly = <S extends DefineComposableOptions['setup']>(setup: S) =>
  (...args: Parameters<S>) => readonly(setup(...args)) as DeepReadonly<UnwrapNestedRefs<ReturnType<S>>>

/** @category Definers */
const readonlyShallow = <S extends DefineComposableOptions['setup']>(setup: S) =>
  (...args: Parameters<S>) => shallowReadonly(setup(...args)) as Readonly<ReturnType<S>>

/**
 * Creates composable function with declarative control of behaviour.
 * @category Definers
 */
export function defineComposable<
  O extends DefineComposableOptions,
  _S extends ComposableSetup = O['setup'],
  _P extends AnyArrayOptional = Parameters<O['setup']>,
  _I = ReturnType<O['setup']>,
>(
  options: O,
): O['flat'] extends true
  ? (O['readonly'] extends true ? ReturnType<typeof flattenReadonly<_S>> : ReturnType<typeof flatten<_S>>)
  : (O['readonly'] extends true ? ReturnType<typeof readonlyShallow<_S>> : _S) {
  return pipe(
    options.flat
      ? (options.readonly ? flattenReadonly : flatten)
      : (options.readonly ? readonlyShallow : through),
    options.singleton ? once : through,
  )(options.setup)
}
