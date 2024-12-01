import type { AnyObject, Collection, FnPredicateIterate, Keys, KeysDeep, MaybeLiteral, PartialDeep, PickDeep } from '@webshrine/stdtyp'
import { createDeepObjectTransformer } from './helpers'

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
 * Implements `Pick` Typescript utility.
 */
export const pick = <Input extends AnyObject, Key extends Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => {
  const result = {}

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(object, key))
      // @ts-expect-error Complex type flow
      result[key] = object[key]
  }

  return result
}

const pickDeepByProcess = createDeepObjectTransformer(pickBy)
const pickDeepProcess = createDeepObjectTransformer(pick)

/**
 * Returns new object with specified keys.
 * - Implements `Pick` utility type from Typescript.
 * - Controls that received keys list is exists in `object`
 */
export const pickStrict = <Input extends AnyObject, Key extends Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => pick(object, keys)

/**
 *
 */
export const pickDeep = <Input extends Collection, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => pickDeepProcess(object, keys) as PickDeep<Input, Key>

/**
 * Returns new object with specified keys.
 * - Implements `PickDeep` utility type from library.
 * - Executes recursively on nested collections, but root is always object.
 * - Controls that received keys list is exists in `object`
 */
export const omitDeepStrict = <Input extends Collection, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => pickDeep(object, keys)

/**
 *
 */
export const pickDeepBy = <Input extends Collection, Output extends PartialDeep<Input> = PartialDeep<Input>>(
  object: Input,
  guard: FnPredicateIterate<any, string>,
) => pickDeepByProcess(object, guard) as Output
