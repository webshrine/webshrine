import type { AnyArray, AnyObject, Collection, FnTransform } from '@webshrine/stdtyp'
import { isCollection } from '@/guards'

/**
 * @private
 */
export const createDeepObjectTransformer = <T extends FnTransform<AnyObject, AnyObject, AnyArray>>(
  transformer: T,
) => {
  return function transform(
    collection: Collection,
    parameter: Parameters<T>[1],
  ): Collection {
    if (!Array.isArray(collection)) {
      const result = transformer(collection, parameter)

      for (const key in result) {
        if (isCollection(result[key]))
          result[key] = transform(result[key], parameter)
      }

      return result
    }

    // TODO: replace by for to improve perf
    return collection.map(
      item => isCollection(item) ? transform(item, parameter) : item,
    )
  }
}
