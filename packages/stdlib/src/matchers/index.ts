import type { MatchFn } from '@webshrine/stdtyp'

import {
  isEqual as lodashIsEqual,
} from 'lodash'

export const isSameValue: MatchFn = (a, b) => a === b
export const isEqual = lodashIsEqual as MatchFn
