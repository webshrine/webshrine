import type { IterateParameters } from '.'
import type { AnyArray, AnyArrayOptional, AnyObject } from '..'

/** @category Utilities */
type ConcatTwoArrays<A extends AnyArray, B extends AnyArrayOptional> = B extends AnyArray ? [...A, ...B] : A

/**
 * Most general type of function,
 * matches any types of functions if generics wasn't defined
 * @category Utilities
 */
export type Fn<
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result = void,
  Context = undefined,
> = Context extends undefined
  ? Parameters extends any[]
  ? (...parameters: Parameters) => Result
  : () => Result
  : Parameters extends any[]
  ? (this: Context, ...parameters: Parameters) => Result
  : (this: Context) => Result

/**
 * Any function without parameters
 * @category Utilities
 */
export type FnNullary<Result = void> = Fn<undefined, Result>

/**
 * Any function with parameters
 * @category Utilities
 */
export type FnParametrized<
  Parameters extends AnyArray = AnyArray,
  Result = void,
> = Fn<Parameters, Result>

/** @category Utilities */
export type FnMethod<
  Context,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result = void,
> = Fn<Parameters, Result, Context>

/** @category Utilities */
export type FnMethodPipe<
  Context,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
> = Fn<Parameters, Context, Context>

// export type FnMethodPipeOnce<
//   MethodName extends string,
//   Context,
//   Parameters extends AnyArrayOptional = AnyArrayOptional,
// > = Fn<Parameters, Omit<Context, MethodName>, Context>

/**
 * Any async function
 * @category Utilities
 */
export type FnAsync<
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result = void,
  Context = undefined,
> = Fn<Parameters, Promise<Result>, Context>

/**
 * Any async function without parameters
 * @category Utilities
 */
export type FnAsyncNullary<Result = void> = FnAsync<undefined, Result>

/** @category Utilities */
export type FnAsyncProcedure<Parameters extends AnyArrayOptional = AnyArrayOptional> = FnAsync<Parameters, void>

/** @category Utilities */
export type FnAsyncPredicate<Parameters extends AnyArrayOptional = AnyArrayOptional> = FnAsync<Parameters, boolean>

/**
 * Any function without result
 * @category Utilities
 */
export type FnProcedure<Parameters extends AnyArrayOptional = AnyArrayOptional> = Fn<Parameters, void>

/**
 * Any function with boolean result
 * @category Utilities
 */
export type FnPredicate<Parameters extends AnyArrayOptional = AnyArrayOptional> = Fn<Parameters, boolean>

/**
 * Binary function that returns boolean
 * @category Utilities
 */
export type FnMatch<A = any, B = A> = FnPredicate<[a: A, b: B]>

/**
 * Comparison function that returns `-1 | 0 | 1` as result
 * @category Utilities
 */
export type FnCompare<Value = any> = FnParametrized<[a: Value, b: Value], -1 | 0 | 1>

/**
 * Transforming function
 * @category Utilities
 */
export type FnTransform<
  Input = any,
  Output = Input,
  Parameters extends AnyArrayOptional = undefined,
> = FnParametrized<ConcatTwoArrays<[input: Input], Parameters>, Output>

/**
 * Summarizer funcConcatTwoArrays
 * @category Utilities
 */
export type FnReduce<Input = any, Result = any> = FnParametrized<[a: Input, b: Input], Result>

/**
 * General iteration function
 * If `Id` wasn't provided, returns universal iterate function type
 * @category Utilities
 */
export type FnIterate<
  Item = any,
  Id extends PropertyKey = PropertyKey,
  Result = void,
> = (...params: IterateParameters<Item, Id>) => Result

/**
 * Iteration function of `times*` utils
 * @category Utilities
 */
export type FnIterateTimes<Result = void> = (number: number, index: number, count: number) => Result

/** @category Utilities */
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

/**
 * Procedure iteration function
 * @category Utilities
 */
export type FnProcedureIterate<Item = any, Id extends PropertyKey = PropertyKey> = FnIterate<Item, Id, void>

/**
 * Predicate iteration function
 * @category Utilities
 */
export type FnPredicateIterate<Item = any, Id extends PropertyKey = PropertyKey> = FnIterate<Item, Id, boolean>

/**
 * Transform iteration function
 * @category Utilities
 */
export type FnTransformIterate<Input = any, Id extends PropertyKey = PropertyKey, Output = Input> = FnIterate<Input, Id, Output>

/**
 * Reduce iteration function
 * @category Utilities
 */
export type FnReduceIterate<Item = any, Id extends PropertyKey = PropertyKey, Result = Item> = Fn<[previousValue: Result | undefined, ...IterateParameters<Item, Id>], Result>

/**
 * Wrapper function
 * @category Utilities
 */
export type FnWrapper<
  F extends Fn = Fn,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result = F,
> =
  Parameters extends any[]
  ? (func: F, ...args: Parameters) => Result
  : (func: F) => Result

// export type FnWrapperTransform<
//   F extends Fn = Fn,
//   Result = ReturnType<F>,
//   Parameters extends AnyArrayOptional = AnyArrayOptional,
// > =
//   Parameters extends any[]
//   ? (func: F, ...args: Parameters) => Result
//   : (func: F) => Result

// /** Mutating function */
// export type FnMut<Target, Parameters extends AnyArrayOptional = AnyArrayOptional> =
//   Parameters extends any[]
//   ? Fn<[target: Target, ...Parameters], Target>
//   : Fn<[target: Target], Target>

/**
 * Guard function
 * @category Utilities
 */
export type FnGuard<Target> = (value: any) => value is Target

/**
 * Formatter function
 * @category Utilities
 */
export type FnFormat<Input, Output> = FnTransform<Readonly<Input>, Output | null>
