import type { AnyArrayOptional } from './aliases'

export type Nullable<T> = T | null
export type MaybePromise<T> = T | Promise<T>
export type MaybeReturned<T> = T | FnNullary<T>
export type MaybeArray<T> = T | T[]
export type IterateParameters<Item = any> = [value: Item, index: number, array: Item[]]

/**
 * Most general type of function,
 * matches any types of functions if generics wasn't defined
 */
export type Fn<
  Parameters extends AnyArrayOptional = AnyArrayOptional,
  Result extends any | void = void,
> = Parameters extends any[]
  ? (...parameters: Parameters) => Result
  : () => Result
/** The same as `Fn` but without parameters */
export type FnNullary<Result = void> = Fn<undefined, Result>

/** The same as `Fn` but for wraps Result generic in promise */
export type FnAsync<
  Parameters extends AnyArrayOptional = undefined,
  Result extends any | void = void,
> = Fn<Parameters, Promise<Result>>
/** The same as `AsyncFn` but without parameters */
export type FnNullaryAsync<Result = void> = FnAsync<undefined, Result>

/** The same as `Fn` but without result */
export type FnProcedure<Parameters extends AnyArrayOptional> = Fn<Parameters, void>

/** The same as `Fn` but returns boolean */
export type FnPredicate<Parameters extends AnyArrayOptional = undefined> = Fn<Parameters, boolean>
/** Binary function that returns boolean */
export type FnMatch<Value = any> = FnPredicate<[a: Value, b: Value]>
/** Guard function type */
export type FnGuard<Target> = (value: any) => value is Target
/** Comparison function type returns `-1 | 0 | 1` as result */
export type FnCompare<Value = any> = Fn<[a: Value, b: Value], -1 | 0 | 1>

export type FnFormat<Input = any, Result = Input> = Fn<[input: Input], Result | null>

export type FnIterate<Item = any, Result = void> = Fn<IterateParameters<Item>, Result>
export type FnIterateProcedure<Item = any> = Fn<IterateParameters<Item>, void>
export type FnIteratePredicate<Item = any> = FnPredicate<IterateParameters<Item>>
export type FnTransform<Input = any, Result = Input> = Fn<IterateParameters<Input>, Result>
export type FnReduce<Item = any, Result = any> = Fn<[previousValue: Result | undefined, ...IterateParameters<Item>], Result>

// export type FnGenerator = Fn<[], Generator>
// export type FnAsyncGenerator = Fn<[], AsyncGenerator>

// export type Indexable = string | number | symbol
// export type ContextedFn<Context = any, Result = Item> = (this: Context, ...args: any[]) => Result

export type Constructor<
  Instance = any,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
> = Parameters extends any[]
  ? { new(...args: Parameters): Instance }
  : { new(): Instance }
export type NullaryConstructor<Instance> = Constructor<Instance>

export type {
  Assign,
  Brand,
  DeepNonNullable,
  DeepPartial,
  DeepReadonly,
  DeepRequired,
  Diff,
  FunctionKeys,
  Intersection,
  Mutable,
  MutableKeys,
  NonFunctionKeys,
  NonUndefined,
  Omit,
  OmitByValue,
  OmitByValueExact,
  Optional,
  OptionalKeys,
  Overwrite,
  PickByValue,
  PickByValueExact,
  PromiseType,
  ReadonlyKeys,
  Required,
  RequiredKeys,
  SetComplement,
  SetDifference,
  SetIntersection,
  Subtract,
  SymmetricDifference,
  Unionize,
  UnionToIntersection,
  ValuesType,
  Writable,
  WritableKeys,
} from 'utility-types'
