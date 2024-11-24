import type { AnyObject, Collection, FnPredicateIterate, FnTransform } from '@webshrine/stdtyp'
import { isCollection } from '@/guards'

/**
 * @private
 */
export const createDeepObjectTransformer = (
  transformer: FnTransform<AnyObject, AnyObject, [FnPredicateIterate<any, string>]>,
) => {
  return function assemble(collection: Collection, guard: FnPredicateIterate<any, string>): Collection {
    if (!Array.isArray(collection)) {
      const result = transformer(collection, guard)

      for (const key in result) {
        if (isCollection(result[key]))
          result[key] = assemble(result[key], guard)
      }

      return result
    }

    // TODO: replace by for to improve perf
    return collection.map(
      item => isCollection(item) ? assemble(item, guard) : item,
    )
  }
}
