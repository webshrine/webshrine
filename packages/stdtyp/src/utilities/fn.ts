import type { IterateParameters } from '.'
import type { AnyArray, AnyArrayOptional } from '..'

type ConcatTwoArrays<A extends AnyArray, B extends AnyArrayOptional> = B extends AnyArray ? [...A, ...B] : A

/**
 * Most general type of function,
 * matches any types of functions if generics wasn't defined
 */
export type Fn<
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result extends any | void = void,
  Context = undefined,
> = Context extends undefined
  ? Parameters extends any[]
  ? (...parameters: Parameters) => Result
  : () => Result
  : Parameters extends any[]
  ? (this: Context, ...parameters: Parameters) => Result
  : (this: Context) => Result

/** Any function without parameters */
export type FnNullary<Result = void> = Fn<undefined, Result>

/** Any function with parameters */
export type FnParametrized<
  Parameters extends AnyArray = AnyArray,
  Result extends any | void = void,
> = Fn<Parameters, Result>

export type FnMethod<
  Context,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result extends any | void = void,
> = Fn<Parameters, Result, Context>

export type FnMethodPipe<
  Context,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
> = Fn<Parameters, Context, Context>

export type FnMethodPipeOnce<
  MethodName extends string,
  Context,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
> = Fn<Parameters, Omit<Context, MethodName>, Context>

/** Any async function */
export type FnAsync<
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result extends any | void = void,
> = Fn<Parameters, Promise<Result>>

/** Any async function without parameters */
export type FnAsyncNullary<Result = void> = FnAsync<undefined, Result>
export type FnAsyncProcedure<Parameters extends AnyArrayOptional = AnyArrayOptional> = FnAsync<Parameters, void>
export type FnAsyncPredicate<Parameters extends AnyArrayOptional = AnyArrayOptional> = FnAsync<Parameters, boolean>

/** Any function without result */
export type FnProcedure<Parameters extends AnyArrayOptional = AnyArrayOptional> = Fn<Parameters, void>

/** Any function with boolean result */
export type FnPredicate<Parameters extends AnyArrayOptional = AnyArrayOptional> = Fn<Parameters, boolean>

/** Binary function that returns boolean */
export type FnMatch<A = any, B = A> = FnPredicate<[a: A, b: B]>

/** Comparison function that returns `-1 | 0 | 1` as result */
export type FnCompare<Value = any> = FnParametrized<[a: Value, b: Value], -1 | 0 | 1>

/** Transforming function */
export type FnTransform<
  Input = any,
  Output = Input,
  Parameters extends AnyArrayOptional = undefined,
> = FnParametrized<ConcatTwoArrays<[input: Input], Parameters>, Output>

/** Summarizer funcConcatTwoArrays */
export type FnReduce<Input = any, Result = any> = FnParametrized<[a: Input, b: Input], Result>

/** Basic iteration function */
export type FnIterate<Item = any, Result = void> = FnParametrized<IterateParameters<Item>, Result>

/** Procedure iteration function */
export type FnProcedureIterate<Item = any> = FnIterate<Item, void>

/** Predicate iteration function */
export type FnPredicateIterate<Item = any> = FnIterate<Item, boolean>

/** Transform iteration function */
export type FnTransformIterate<Input = any, Output = Input> = FnIterate<Input, Output>

/** Reduce iteration function */
export type FnReduceIterate<Item = any, Result = any> = Fn<[previousValue: Result | undefined, ...IterateParameters<Item>], Result>

/** Wrapper function */
export type FnWrapper<Func extends Fn = Fn, Parameters extends AnyArrayOptional = AnyArrayOptional> =
  Parameters extends any[]
  ? FnParametrized<[callback: Func, ...Parameters], Func>
  : FnParametrized<[callback: Func], Func>

/** Guard function */
export type FnGuard<Target> = (value: any) => value is Target

/** Formatter function */
export type FnFormat<Input, Output> = FnTransform<Readonly<Input>, Output | null>
