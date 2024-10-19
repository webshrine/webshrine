import type { AnyPromise, NullaryAsyncFn, NullaryFn } from '@webshrine/stdtyp'

export type CopeOk<T> = [T, null]

export type CopeErr<E extends Error> = [null, E]

export type CopeResult<T, E extends Error> = CopeOk<T> | CopeErr<E>

export const ok = <T = void>(value: T): CopeOk<T> => [value, null]

export const err = <E extends Error>(error: E): CopeErr<E> => [null, error]

/**
 *
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
