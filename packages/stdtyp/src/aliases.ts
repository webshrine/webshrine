/**
 * Any array alias,
 * focused to be used in generic types in environment with "any-phobic" eslint rules
 * @example ```ts
 * function iterate<T extends AnyArray>(items: T) { ... }
 * ```
 */
export type AnyArray = any[]

export type AnyPromise = Promise<any>

export type AnyArrayOptional = AnyArray | undefined

/**
 * Any array alias,
 * focused to be used in generic types in environment with "any-phobic" eslint rules
 * @example ```ts
 * function process<T extends AnyRecord>(data: T) { ... }
 * ```
 */
export type AnyObject = Record<ObjectKey, any>

/** Alias for any object key */
export type ObjectKey = string | number | symbol

/** Unification type for number and bigint */
export type Numeric = number | bigint

/**
 * Used for define return values for comparator functions,
 * that usually used in `Array.prototype.sort` method
 *
 * Return rules:
 * - `a` < `b` = `-1`
 * - `a` > `b` = `1`
 * - `a` = `b` = `0`
 * @see CompareFn
 * @example ```ts
 * function compare(a: number, b: number): CompareResultValue { ... }
 * const sorted = [3,1,2].sort(compare)
 * ```
 */
export type CompareResultValue = -1 | 0 | 1

/** Used in native [Symbol.toPrimitive] method as first argument */
export type ToPrimitiveHint = 'number' | 'string' | 'default'

/** Used for complex type logics, e.g for limit depth of iterations by nested object type */
export type Decrement = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export type {
  Falsy,
  Nullish,
  Primitive,
} from 'utility-types'
