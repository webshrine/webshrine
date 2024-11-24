import type { AnyObject, Collection, FnPredicateIterate, Keys, KeysDeep, MaybeLiteral, OmitDeep, PartialDeep } from '@webshrine/stdtyp'
import { createDeepObjectTransformer } from './helpers'

/**
 * Returns new object without specified keys, returned by `predicate`.
 */
export const omitBy = <
  Output extends AnyObject,
  Input extends AnyObject = AnyObject,
>(
  object: Input,
  guard: FnPredicateIterate<any, string>,
): Output => {
  const result = { ...object }

  for (const key in object) {
    if (guard(object[key], key, object))
      delete result[key]
  }

  return result
}

const omitDeepByProcess = createDeepObjectTransformer(omitBy)
const omitDeepProcess = (
  collection: Collection,
  keys: ReadonlyArray<string>,
): Collection => omitDeepByProcess(collection, (_, key) => keys.includes(key))

/**
 * Returns new object without specified keys.
 * - Implements `Omit` utility type from Typescript.
 */
export const omit = <Input extends AnyObject, Key extends Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => omitBy<Omit<Input, Key>>(object, (_, key) => keys.includes(key))

/**
 * Returns new object without specified keys.
 * - Implements `Omit` utility type from Typescript.
 * - Controls that received keys list is exists in `object`
 */
export const omitStrict = <Input extends AnyObject, Key extends Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => omit(object, keys)

/**
 * Returns new object without specified keys.
 * - Implements `OmitDeep` utility type from library.
 * - Executes recursively on nested collections, but root is always object.
 */
export const omitDeep = <Input extends AnyObject, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => omitDeepProcess(object, keys) as OmitDeep<Input, Key>

/**
 * Returns new object without specified keys.
 * - Implements `OmitDeep` utility type from library.
 * - Executes recursively on nested collections, but root is always object.
 * - Controls that received keys list is exists in `object`
 */
export const omitDeepStrict = <Input extends AnyObject, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => omitDeep(object, keys)

/**
 * Returns new object without specified keys, returned by `predicate`.
 * - Executes recursively on nested collections, but root is always object.
 */
export const omitDeepBy = <Input extends AnyObject, Output extends PartialDeep<Input> = PartialDeep<Input>>(
  object: Input,
  guard: FnPredicateIterate<any, string>,
) => omitDeepByProcess(object, guard) as Output
