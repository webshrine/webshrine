import type { AnyArrayOptional, AnyObject, Decrement } from '..'

export type IterateParameters<Item = any> = [value: Item, index: number, array: Item[]]

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
export type KeysDeep<T extends AnyObject, Depth extends number = 20> = Depth extends -1
  ? never
  : {
    [K in keyof T]: StringifyKey<K> | (T[K] extends AnyObject
      ? KeysDeep<T[K], Decrement[Depth]>
      : never)
  }[keyof T]

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

// export type OmitDeep<T extends AnyObject, K extends KeyofDeep<T>> = {
//   [P in Exclude<keyof T, K>]: T[P] extends AnyObject ? OmitDeep<T[P], K> : T[P]
// }
// export type OmitDeep<T extends AnyObject, K extends KeysDeep<T>, _O extends Omit<T, K> = Omit<T, K>> = {
//   [P in keyof _O]: _O[P] extends AnyObject ? OmitDeep<_O[P], K, _O> : _O[P]
// }
// export type OmitDeep<T extends AnyObject, K extends KeysDeep<T>> = {
export type OmitDeep<T extends AnyObject, K extends string> = {
  [P in Exclude<keyof T, K>]: T[P] extends AnyObject ? OmitDeep<T[P], K> : T[P]
}

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

// type OmitDeep<T extends AnyRecord, K extends KeyofDeep<T>, Depth extends number> = {
//   done: Omit<T, K>
//   recur: OmitDeep<
//     Omit<T, K>,
//     [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth],
//   >
// }[Depth extends -1 ? 'done' : 'recur'];

// type DeepOmitHelper<T, K extends keyof T> = {
//   [P in K]: // extra level of indirection needed to trigger homomorhic behavior
//   T[P] extends infer TP ? // distribute over unions
//   TP extends Primitive ? TP : // leave primitives and functions alone
//   TP extends any[] ? DeepOmitArray<TP, K> : // Array special handling
//   DeepOmit<TP, K>
//   : never
// }
// type DeepOmit<T extends AnyRecord, K extends KeyofDeep<T>> = T extends Primitive ? T : DeepOmitHelper<T, Exclude<keyof T, K>>

// type DeepOmitArray<T extends any[], K> = {
//   [P in keyof T]: DeepOmit<T[P], K>
// }
