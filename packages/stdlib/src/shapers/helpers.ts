import type { AnyArray, AnyObject, Collection, FnShape } from '@webshrine/stdtyp'
import { isCollection } from '../guards'

/**
 * @private
 * @category Shapers
 */
export const createDeepObjectShaper = <T extends FnShape<AnyObject, AnyObject, AnyArray>>(
  shaper: T,
) => {
  return function reshape(
    collection: Collection,
    parameter: Parameters<T>[1],
  ): Collection {
    if (!Array.isArray(collection)) {
      const result = shaper(collection, parameter)

      for (const key in result) {
        if (isCollection(result[key]))
          result[key] = reshape(result[key], parameter)
      }

      return result
    }

    // TODO: replace by for to improve perf
    return collection.map(
      item => isCollection(item) ? reshape(item, parameter) : item,
    )
  }
}
