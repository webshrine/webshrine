import type { AnyArray, AnyObject, Collection, FnMatch } from '@webshrine/stdtyp'
import { areSame } from '../matchers'

/**
 * Returns a new array with only the unique items, uniqueness is determined by received `matcher` function.
 * @category Transformers
 */
export const uniqueItemsBy = <T extends AnyArray>(array: T, matcher: FnMatch<T[number]>): T => (
  array.reduce<T>((acc, item) => {
    const exists = acc.some(accItem => matcher(accItem, item))
    if (!exists)
      acc.push(item)

    return acc
  }, [] as any)
)

/**
 * Returns a new array with only the unique items, uniqueness is determined by received `matcher` function.
 * @category Transformers
 */
export const uniqueValuesBy = <T extends AnyObject>(object: T, matcher: FnMatch<T[keyof T]>): Partial<T> => (
  Object.entries(object)
    .reduce<AnyObject>((acc, [key, value], _index, entries) => {
      const exists = entries.some(pair => matcher(pair[1], value))
      if (!exists)
        acc[key] = value

      return acc
    }, {}) as Partial<T>
)

/**
 * Returns a new array with only the unique items.
 * @category Transformers
 */
export const uniqueItems = <T extends AnyArray>(array: T): T => [...new Set(array)] as T

/**
 * Returns a new object with only the unique values.
 * @category Transformers
 */
export const uniqueValues = <T extends AnyObject>(object: T): Partial<T> => uniqueValuesBy(object, areSame)

/**
 * Returns a new collection with only the unique items/values.
 * @category Transformers
 */
export const unique = (collection: Collection) => Array.isArray(collection) ? uniqueItems(collection) : uniqueValues(collection)

/**
 * Returns a new collection with only the unique items/values, but using a custom matcher function.
 * @category Transformers
 */
export const uniqueBy = <T extends Collection>(
  collection: T,
  matcher: FnMatch<T[number] | T[keyof T]>,
) => Array.isArray(collection)
    ? uniqueItemsBy(collection, matcher)
    : uniqueValuesBy(collection, matcher)
