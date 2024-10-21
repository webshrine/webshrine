import type { AnyPromise, NullaryAsyncFn, NullaryFn } from '@webshrine/stdtyp'

export type CopeOk<T> = [T, undefined]

export type CopeErr<E extends Error> = [undefined, E]

export type CopeResult<T, E extends Error> = CopeOk<T> | CopeErr<E>

export const ok = <T = void>(value: T): CopeOk<T> => [value, undefined]

export const err = <E extends Error>(error: E): CopeErr<E> => [undefined, error]

/**
 * Go-like error handling util
 *
 * @example ```ts // Basic usage
 * const [result, error] = cope(() => JSON.parse('{"a": 1}'))
 * if (error) {
 *   // process error
 *   return
 * }
 * // process result
 * ```
 * @example ```ts // ignore insignificant error
 * // prepare executions
 * cope(()=>{ window.scrollTo(someElement.offsetHeight) })
 * // guaranteed executions
 * ```
 *
 * @example ```ts // With default value
 * const [result = 'default value', syncParseErr] = cope(...)
 * result // is always defined
 * ```
 */
export function cope<
  Throws extends Error = Error,
  Executor extends NullaryFn | NullaryAsyncFn = NullaryFn | NullaryAsyncFn,
  Result extends ReturnType<Executor> = ReturnType<Executor>,
>(executor: Executor): Result extends AnyPromise ? Promise<CopeResult<Awaited<Result>, Throws>> : CopeResult<Result, Throws> {
  try {
    const result = executor()
    // @ts-expect-error Complex type flow
    return result instanceof Promise ? result.then(ok, err) : ok(result)
  }
  catch (error) {
    // @ts-expect-error Complex type flow
    return err(error as Throws)
  }
}
