import type { FnMatch } from '@webshrine/stdtyp'

import {
  isEqual as lodashIsEqual,
} from 'lodash'

export const isSameValue: FnMatch = (a, b) => a === b
export const isEqual = lodashIsEqual as FnMatch
