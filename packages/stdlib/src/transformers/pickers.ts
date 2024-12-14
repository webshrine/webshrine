import type { AnyObject, Collection, FnPredicateIterate, Keys, KeysDeep, MaybeLiteral, PartialDeep, PickDeep } from '@webshrine/stdtyp'
import { hasOwn } from '@/utils'
import { createDeepObjectTransformer } from './helpers'

/**
 * Returns new object by specified keys, returned by `predicate`.
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
 * Returns new object by specified keys.
 * - Implements `Pick` Typescript utility.
 */
export const pick = <Input extends AnyObject, Key extends Keys<Input> = Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => {
  const result = {}

  for (const key of keys) {
    if (hasOwn(object, key))
      // @ts-expect-error Complex type flow
      result[key] = object[key]
  }

  return result
}

const pickDeepProcess = createDeepObjectTransformer(pick)

/**
 * Returns new object by specified keys.
 * - Implements `PickDeep` utility type from library.
 * - Executes recursively on nested collections.
 */
export const pickDeep = <Input extends Collection, Key extends KeysDeep<Input> = KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => pickDeepProcess(object, keys) as PickDeep<Input, Key>

const pickDeepByProcess = createDeepObjectTransformer(pickBy)

/**
 * Returns new object by specified keys, returned by `predicate`.
 * - Executes recursively on nested collections.
 */
export const pickDeepBy = <Input extends Collection, Output extends PartialDeep<Input> = PartialDeep<Input>>(
  object: Input,
  guard: FnPredicateIterate<any, string>,
) => pickDeepByProcess(object, guard) as Output

/**
 * Returns new object by specified keys.
 * - Implements `Pick` utility type from Typescript.
 * - Controls that received keys list is exists.
 */
export const pickStrict = <Input extends AnyObject, Key extends Keys<Input> = Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => pick(object, keys)

/**
 * Returns new object by specified keys.
 * - Implements `PickDeep` utility type from library.
 * - Executes recursively on nested collections.
 * - Controls that received keys list is exists.
 */
export const pickDeepStrict = <Input extends Collection, Key extends KeysDeep<Input> = KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => pickDeep(object, keys)
