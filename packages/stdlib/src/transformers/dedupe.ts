import type { AnyArray, AnyObject, Collection, FnMatch } from '@webshrine/stdtyp'
import { areSame } from '../matchers'

/**
 * Returns a new array without duplicates, duplicates are determined by received `matcher` function.
 * @category Transformers
 */
export const dedupeItemsBy = <T extends AnyArray>(array: T, matcher: FnMatch<T[number]>): T => (
  array.reduce<T>((acc, item) => {
    const exists = acc.some(accItem => matcher(accItem, item))
    if (!exists)
      acc.push(item)

    return acc
  }, [] as any)
)

/**
 * Returns a new array without duplicates, duplicates are determined by received `matcher` function.
 * @category Transformers
 */
export const dedupeValuesBy = <T extends AnyObject>(object: T, matcher: FnMatch<T[keyof T]>): Partial<T> => (
  Object.entries(object)
    .reduce<AnyObject>((acc, [key, value], _index, entries) => {
      const exists = entries.some(pair => matcher(pair[1], value))
      if (!exists)
        acc[key] = value

      return acc
    }, {}) as Partial<T>
)

/**
 * Returns a new array without duplicated items.
 * @category Transformers
 */
export const dedupeItems = <T extends AnyArray>(array: T): T => [...new Set(array)] as T

/**
 * Returns a new object without duplicated values.
 * @category Transformers
 */
export const dedupeValues = <T extends AnyObject>(object: T): Partial<T> => dedupeValuesBy(object, areSame)

/**
 * Returns a new collection without duplicated items/values.
 * @category Transformers
 */
export const dedupe = (collection: Collection) => Array.isArray(collection) ? dedupeItems(collection) : dedupeValues(collection)

/**
 * Returns a new collection without duplicated items/values, but using a custom matcher function.
 * @category Transformers
 */
export const dedupeBy = <T extends Collection>(
  collection: T,
  matcher: FnMatch<T[number] | T[keyof T]>,
) => Array.isArray(collection)
    ? dedupeItemsBy(collection, matcher)
    : dedupeValuesBy(collection, matcher)
