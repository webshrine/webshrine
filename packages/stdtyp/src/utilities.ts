import type { AnyArray } from '@/index'

export type Nullable<T> = T | null
export type MaybePromise<T> = T | Promise<T>
export type MaybeReturned<T> = T | NullaryFn<T>
export type MaybeArray<T> = T | T[]
export type IterateeParameters<Item = any> = [value: Item, index: number, array: Item[]]

export type Fn<
  Parameters extends AnyArray | undefined = undefined,
  Result extends any | void = void,
> = Parameters extends AnyArray
  ? (...parameters: Parameters) => Result
  : () => Result
export type AsyncFn<
  Parameters extends AnyArray | undefined = undefined,
  Result extends any | void = void,
> = Fn<Parameters, Promise<Result>>
export type NullaryFn<Result = void> = Fn<undefined, Result>
export type NullaryAsyncFn<Result = void> = AsyncFn<undefined, Result>
export type ProcedureFn<Parameters extends AnyArray | undefined> = Fn<Parameters, void>

export type PredicateFn<Parameters extends AnyArray | undefined = undefined> = Fn<Parameters, boolean>
export type MatchFn<Value = any> = PredicateFn<[a: Value, b: Value]>
export type IterateePredicateFn<Item = any> = PredicateFn<IterateeParameters<Item>>

export type IterateeFn<Item = any, Result = void> = Fn<IterateeParameters<Item>, Result>
export type TransformFn<Input = any, Result = Input> = Fn<IterateeParameters<Input>, Result>
export type ReduceFn<Item = any, Result = Item> = Fn<[previousValue: Result | undefined, ...IterateeParameters<Item>], Result>
export type GuardFn<Target> = (value: any) => value is Target
export type CompareFn<Value = any> = Fn<[a: Value, b: Value], -1 | 0 | 1>

export type Constructor<
  Instance = any,
  Parameters extends AnyArray | undefined = AnyArray,
> = Parameters extends AnyArray
  ? { new(...args: Parameters): Instance }
  : { new(): Instance }
export type NullaryConstructor<Instance> = Constructor<Instance>
