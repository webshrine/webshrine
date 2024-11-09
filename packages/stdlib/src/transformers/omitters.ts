import type { _RTFnTransform } from '@/transformers/helpers'
import type { AnyObject, FnPredicate, Keys, KeysDeep, MaybeLiteral, OmitDeep, PartialDeep } from '@webshrine/stdtyp'
import {
  omit as lodashOmit,
  omitBy as lodashOmitBy,
} from 'lodash'
import {
  omitDeep as lodashODOmitDeep,
  omitDeepBy as lodashODOmitDeepBy,
} from 'lodash-omitdeep'

export const omit = <Input extends AnyObject, Key extends Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => lodashOmit(object, keys) as Omit<Input, Key>

export const omitStrict = <Input extends AnyObject, Key extends Keys<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => omit(object, keys)

export const omitDeep = <Input extends AnyObject, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<MaybeLiteral<Key>>,
) => lodashODOmitDeep(object, keys) as OmitDeep<Input, Key>

export const omitDeepStrict = <Input extends AnyObject, Key extends KeysDeep<Input>>(
  object: Input,
  keys: ReadonlyArray<Key>,
) => omitDeep(object, keys)

export const omitBy = <Input extends AnyObject, Output extends Partial<Input> = Partial<Input>>(
  object: Input,
  predicate: FnPredicate<[value: any, key: string]>,
) => lodashOmitBy(object, predicate) as Output

export const omitDeepBy = <Input extends AnyObject, Output extends PartialDeep<Input> = PartialDeep<Input>>(
  object: Input,
  predicate: FnPredicate<[value: any, key: string]>,
) => lodashODOmitDeepBy(object, predicate) as Output

// }

// type asdsad = Paths<typeof a>
// type keys = KeyofDeep<typeof a>

// // const asddd: asdsad = 'any string'

// const asdas = omit(a, ['bul', 'obasdj'])
// asd

// export const omitBy = <Input extends AnyRecord, Output extends Partial<Input> = Partial<Input>>(
//   object: Input,
//   predicate: FnPredicate<[value: Input, key: string]>,
// ): _RTFnTransform<Input, Output> => lodashODOmitDeepBy(object,) as Output
