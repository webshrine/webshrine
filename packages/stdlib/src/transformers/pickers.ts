import type { AnyObject, Collection, FnPredicateIterate, KeysDeep, MaybeLiteral, PartialDeep, PickDeep } from '@webshrine/stdtyp'
import { isCollection } from '@/guards'

/**
 *
 */
export const pickBy = <Input extends AnyObject, Output extends Partial<Input> = Partial<Input>>(
  object: Input,
  guard: FnPredicateIterate<any, string>,
) => {
  const result = {}

  for (const key in object) {
    if (guard(object[key], key, object))
      // @ts-expect-error Complex type flow
      result[key] = object[key]
  }

  return result as Output
}

/**
 *
 */
export const pick = <Input extends AnyObject, Key extends keyof Input>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => pickBy(object, (_, key) => keys.includes(key)) as Pick<Input, Key>

const pickDeepByProcess = (
  collection: Collection,
  guard: FnPredicateIterate<any, string>,
): Collection => {
  if (!Array.isArray(collection)) {
    const result = pickBy(collection, guard)

    for (const key in result) {
      if (isCollection(result[key]))
        result[key] = pickDeepByProcess(result[key], guard)
    }

    return result
  }

  return collection.map(
    item => isCollection(item) ? pickDeepByProcess(item, guard) : item,
  )
}

const pickDeepProcess = (
  collection: Collection,
  keys: ReadonlyArray<string>,
): Collection => pickDeepByProcess(collection, (_, key) => keys.includes(key))

/**
 *
 */
export const pickDeep = <Input extends AnyObject, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => pickDeepProcess(object, keys) as PickDeep<Input, Key>

/**
 *
 */
export const pickDeepBy = <Input extends AnyObject, Output extends PartialDeep<Input> = PartialDeep<Input>>(
  object: Input,
  guard: FnPredicateIterate<any, string>,
) => pickDeepByProcess(object, guard) as Output
