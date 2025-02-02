import type { AnyObject, FnTransform, Keys, Remap } from '@webshrine/stdtyp'
import { hasOwn } from '../utils'

/** @category Transformers */
const unsafeMutRenameKey = (target: AnyObject, oldKey: string, newKey: string) => {
  target[newKey] = target[oldKey]
  delete target[oldKey]
}

/**
 * Returns new object with renamed keys.
 * - Implements `Remap` Typescript utility.
 * @category Transformers
 */
export const remap = <
  Input extends AnyObject,
  Table extends { readonly [K in keyof Input]?: string },
>(
  object: Input,
  keysRemapping: Table,
) => {
  const result = { ...object }

  for (const [oldKey, newKey] of Object.entries(keysRemapping)) {
    if (newKey && hasOwn(result, oldKey))
      unsafeMutRenameKey(result, oldKey, newKey)
  }

  return result as Remap<Input, Table>
}

/**
 * Returns new object with renamed by `remapper` keys.
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
