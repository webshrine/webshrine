import type { FnNullary } from '.'
import type { AnyObject, Paths, RecordKey } from '..'

export type Nullable<T> = T | null
export type MaybePromise<T> = T | Promise<T>
export type MaybeReturned<T> = T | FnNullary<T>
export type MaybeArray<T> = T | T[]

/**
 * Allows to unite any string to T literal types without loosing these literal
 * @example ```ts
 * types Literals = 'a' | 'b' | 'c'
 * types MaybeLiterals = MaybeLiteral<Literals>
 * const literal: MaybeLiterals = 'a' // ok
 * const literal: MaybeLiterals = 'other literal' // still ok and IDE can suggest source literals
 * ```
 */
export type MaybeLiteral<T extends RecordKey> = T | (string & {})

export type MaybeKeyof<T extends AnyObject> = MaybeLiteral<keyof T>
export type MaybePaths<T extends AnyObject> = MaybeLiteral<Paths<T>>
