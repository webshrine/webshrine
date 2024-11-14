import type { FnNullary } from '.'

/** Allows `T` to be `T` or `null` */
export type Nullable<T> = T | null

/** Allows `T` to be `T` or `Promise<T>` */
export type MaybePromise<T> = T | Promise<T>

/** Allows `T` to be `T` or `() => T` */
export type MaybeReturned<T> = T | FnNullary<T>

/** Allows `T` to be `T` or `T[]` */
export type MaybeArray<T> = T | T[]

/**
 * Allows string to be acceptable with T literals types without loosing these literal
 * @example ```ts
 * type SomeLiterals = 'a' | 'b' | 'c'
 * type MaybeSomeLiterals = MaybeLiteral<SomeLiterals>
 * const literal1: MaybeSomeLiterals = 'a' // ok
 * const literal2: MaybeSomeLiterals = 'other literal' // still ok and IDE can suggest source literals
 * ```
 */
export type MaybeLiteral<T extends PropertyKey> = T | (string & {})

// TODO: Uncomment on demand
// export type MaybeKeyof<T extends AnyObject> = MaybeLiteral<keyof T>

// TODO: Uncomment on demand
// export type MaybePaths<T extends AnyObject> = MaybeLiteral<Paths<T>>
