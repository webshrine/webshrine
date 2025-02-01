import type { AnyObject, FnTransform, Keys, MaybeLiteral } from '@webshrine/stdtyp'
import { hasOwn } from '../utils'

/** @category Transformers */
const unsafeMutRenameKey = (target: AnyObject, oldKey: string, newKey: string) => {
  target[newKey] = target[oldKey]
  delete target[oldKey]
}

/**
 * Returns new object by specified keys.
 * - Implements `Pick` Typescript utility.
 * @category Transformers
 */
export const remap = <Input extends AnyObject, Key extends Keys<Input> = Keys<Input>>(
  object: Input,
  keysRemapping: Record<MaybeLiteral<Key>, string>,
) => {
  type Table = typeof keysRemapping
  const result = { ...object }

  for (const [oldKey, newKey] of Object.entries(keysRemapping)) {
    if (hasOwn(result, oldKey))
      unsafeMutRenameKey(result, oldKey, newKey)
  }

  return result as Omit<Input, Extract<keyof Table, string>> & {
    // [K in keyof ]
  }
}

/**
 * @category Transformers
 */
export const remapBy = <Input extends AnyObject, Key extends Keys<Input> = Keys<Input>>(
  object: Input,
  remapper: FnTransform<Input[Key], string, [Key, Input]>,
) => {
  const result = { ...object }

  for (const [oldKey, value] of Object.entries(result)) {
    const newKey = remapper(value, oldKey as Key, result)
    if (newKey !== oldKey)
      unsafeMutRenameKey(result, oldKey, newKey)
  }

  return result as Partial<Input>
}
