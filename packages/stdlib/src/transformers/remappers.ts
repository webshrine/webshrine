import type { AnyObject, Keys, MaybeLiteral } from '@webshrine/stdtyp'
import { hasOwn } from '../utils'

/**
 * Returns new object by specified keys.
 * - Implements `Pick` Typescript utility.
 * @category Transformers
 */
export const remap = <Input extends AnyObject, Key extends Keys<Input> = Keys<Input>>(
  object: Input,
  keys: Record<MaybeLiteral<Key>, string>,
) => {
  const result = {}

  for (const key of keys) {
    if (hasOwn(object, key))
      // @ts-expect-error Complex type flow
      result[key] = object[key]
  }

  return result as Pick<Input, Key>
}
