import type { Fn0 } from '.'

/**
 * Allows `T` to be `T` or `null`
 * @category Utilities
 */
export type Nullable<T> = T | null

/**
 * Allows `T` to be `T` or `Promise<T>`
 * @category Utilities
 */
export type MaybePromise<T> = T | Promise<T>

/**
 * Allows `T` to be `T` or `() => T`
 * @category Utilities
 */
export type MaybeReturned<T> = T | Fn0<T>

/**
 * Allows `T` to be `T` or `T[]`
 * @category Utilities
 */
export type MaybeArray<T> = T | T[]

/**
 * Allows string to be acceptable with T literals types without loosing these literal
 * @example
 * type SomeLiterals = 'a' | 'b' | 'c'
 * type MaybeSomeLiterals = MaybeLiteral<SomeLiterals>
 * const literal1: MaybeSomeLiterals = 'a' // ok
 * const literal2: MaybeSomeLiterals = 'other literal' // still ok and IDE can suggest source literals
 * @category Utilities
 */
export type MaybeLiteral<T extends PropertyKey> = T | (string & {})

// TODO: Uncomment on demand
// export type MaybeKeyof<T extends AnyObject> = MaybeLiteral<keyof T>

// TODO: Uncomment on demand
// export type MaybePaths<T extends AnyObject> = MaybeLiteral<Paths<T>>
