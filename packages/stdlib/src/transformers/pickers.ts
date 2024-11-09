import type { _RTFnTransform } from '@/transformers/helpers'
import type { AnyObject, FnPredicate } from '@webshrine/stdtyp'
import {
  pick as lodashPick,
  pickBy as lodashPickBy,
} from 'lodash'

export const pick = <Input extends AnyObject, Keys extends keyof Input>(
  object: Input,
  keys: Keys,
): _RTFnTransform<Input, Pick<Input, Keys>> => lodashPick(object, keys)

export const pickBy = <Input extends AnyObject, Output extends Partial<Input> = Partial<Input>>(
  object: Input,
  predicate: FnPredicate<[value: Input, key: string]>,
): _RTFnTransform<Input, Output> => lodashPickBy(object, predicate) as Output
