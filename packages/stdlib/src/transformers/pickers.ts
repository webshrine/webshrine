import type { AnyObject, FnPredicateIterate, MaybeLiteral } from '@webshrine/stdtyp'

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

  return result as Pick<Input, Key>
}

export const pickBy = <Input extends AnyObject, Output extends Partial<Input> = Partial<Input>>(
  object: Input,
  guard: FnPredicateIterate<[value: any, key: string]>,
) => {
  const result = {}

  for (const key in object) {
    if (guard(object[key], key, object))
      // @ts-expect-error Complex type flow
      result[key] = object[key]
  }

  return result as Output
}
