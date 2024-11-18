import type { IterateParameters } from '.'
import type { AnyArray, AnyArrayOptional, AnyObject } from '..'

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

/**
 * General iteration function
 * If `Id` wasn't provided, returns universal iterate function type
 */
export type FnIterate<
  Item = any,
  Id extends PropertyKey = PropertyKey,
  Result = void,
> = (...params: IterateParameters<Item, Id>) => Result

export type FnIterateDeep<
  Item = any,
  Id = PropertyKey,
  ParentObject = AnyObject | AnyArray | undefined,
  Result = void,
> = (
  value: Item,
  key: Id,
  object: ParentObject,
  level: number,
) => Result

/** Procedure iteration function */
export type FnProcedureIterate<Item = any, Id extends PropertyKey = PropertyKey> = FnIterate<Item, Id, void>

/** Predicate iteration function */
export type FnPredicateIterate<Item = any, Id extends PropertyKey = PropertyKey> = FnIterate<Item, Id, boolean>

/** Transform iteration function */
export type FnTransformIterate<Input = any, Id extends PropertyKey = PropertyKey, Output = Input> = FnIterate<Input, Id, Output>

/** Reduce iteration function */
export type FnReduceIterate<Item = any, Id extends PropertyKey = PropertyKey, Result = any> = Fn<[previousValue: Result | undefined, ...IterateParameters<Item, Id>], Result>

/** Wrapper function */
export type FnWrapper<Func extends Fn = Fn, Parameters extends AnyArrayOptional = AnyArrayOptional> =
  Parameters extends any[]
  ? FnParametrized<[callback: Func, ...Parameters], Func>
  : FnParametrized<[callback: Func], Func>

// TODO: uncomment on demand
// /** Mutator function */
// export type FnMutator<Target, Parameters extends AnyArrayOptional = AnyArrayOptional> =
//   Parameters extends any[]
//   ? FnProcedure<[target: Target, ...Parameters]>
//   : FnProcedure<[target: Target]>

/** Guard function */
export type FnGuard<Target> = (value: any) => value is Target

/** Formatter function */
export type FnFormat<Input, Output> = FnTransform<Readonly<Input>, Output | null>
