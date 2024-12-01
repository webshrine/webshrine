import type { AnyObject, Collection, FnPredicateIterate, KeysDeep, MaybeLiteral, PartialDeep, PickDeep } from '@webshrine/stdtyp'
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
export const pick = <Input extends AnyObject, Key extends keyof Input>(
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
 *
 */
export const pickDeep = <Input extends Collection, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => pickDeepProcess(object, keys) as PickDeep<Input, Key>

/**
 *
 */
export const pickDeepBy = <Input extends Collection, Output extends PartialDeep<Input> = PartialDeep<Input>>(
  object: Input,
  guard: FnPredicateIterate<any, string>,
) => pickDeepByProcess(object, guard) as Output
