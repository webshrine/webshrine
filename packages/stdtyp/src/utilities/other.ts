import type { AnyArrayOptional, AnyObject, CollectionKey, Decrement } from '..'

export type Collection<
  Item = any,
  Key extends CollectionKey = CollectionKey,
> = Item[] | Record<Key, Item>

/**
 * General parameters of iteration function
 * If `Id` wasn't provided, returns universal iterate parameters
 */
export type IterateParameters<
  Item = any,
  Key extends PropertyKey = PropertyKey,
  ParentObject extends Collection = Collection<Item, CollectionKey>,
> = [value: Item, key: Key, parent: ParentObject]

export type Constructor<
  Instance = any,
  Parameters extends AnyArrayOptional = AnyArrayOptional,
> = Parameters extends any[]
  ? { new(...args: Parameters): Instance }
  : { new(): Instance }
export type NullaryConstructor<Instance> = Constructor<Instance>

// type PrefixKeys<Prefix extends string, T extends AnyRecord> = {
//   [K in keyof T as `${Prefix}${string & K}`]: T[K]
// }

type IfString<Value, Then = Value, Else = never> = Value extends string ? Then : Else

type StringifyKey<K extends PropertyKey> = K extends string
  ? K
  : K extends number ? `${K}` : never

/**
 * Return all keys of `T`, converting number keys to strings and ignore Symbol keys
 * Instead of `keyof T`, returns only strings and stringified numbers
 */
export type Keys<T extends AnyObject> = StringifyKey<keyof T>

/** The same as `Keys<T>`, but recursively for all nested objects */
export type KeysDeep<T extends Collection, Depth extends number = 20> = Depth extends -1
  ? never
  : T extends ReadonlyArray<infer I>
  ? KeysDeep<Extract<I, Collection>, Decrement[Depth]>
  : T extends Record<infer D, any>
  ? StringifyKey<D> | KeysDeep<Extract<T[D], Collection>, Decrement[Depth]>
  : never

type OmitDeepRecursor<T, K extends string> =
  T extends ReadonlyArray<infer I>
  ? Array<OmitDeepRecursor<I, K>>
  : T extends AnyObject
  ? { [P in Exclude<keyof T, K>]: OmitDeepRecursor<T[P], K> }
  : T

export type OmitDeep<T extends Collection, K extends string> = OmitDeepRecursor<T, K>

type PickDeepRecursor<T, K extends string> =
  T extends ReadonlyArray<infer I>
  ? Array<PickDeepRecursor<I, K>>
  : T extends AnyObject
  ? { [P in Extract<keyof T, K>]: PickDeepRecursor<T[P], K> }
  : T

export type PickDeep<T extends Collection, K extends string> = PickDeepRecursor<T, K>

export type Paths<T extends AnyObject> = {
  [K in keyof T]: K extends string
  ? T[K] extends AnyObject ? `${K}.${IfString<Paths<T[K]>>}` : K
  : never
}[keyof T]

// export type Join<T extends Array<string | number>, P extends string> = T extends [
//   infer F extends string,
//   ...infer R extends string[],
// ]
//   ? F extends string ? `${F}${P}${Join<R, P>}` : `${F}${P}`
//   : never

export type Split<T extends string, Separator extends string> =
  string extends T ? string[] :
  T extends '' ? [] :
  T extends `${infer T}${Separator}${infer U}` ? [T, ...Split<U, Separator>] : [T]

export type {
  Assign,
  Brand,
  DeepNonNullable as NonNullableDeep,
  DeepPartial as PartialDeep,
  DeepReadonly as ReadonlyDeep,
  DeepRequired as RequiredDeep,
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

// export type IBuilder<Context, Methods extends Record<string, AnyArrayOptional>> = {
//   [K in keyof Methods]: FnMethodPipe<Context, Methods[K]
//   // build: FnNullary<Context>>
// }

// class Bil implements IBuilder<Bil, { 'asd': [any, number], 'acd': [string] }> {
//   acd = (parameters_0, asd) => {
//     return this
//   }

//   build() {
//     return this
//   }
// }
