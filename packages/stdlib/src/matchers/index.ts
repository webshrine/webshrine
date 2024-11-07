import type { FnMatch } from '@webshrine/stdtyp'

import {
  isEqual as lodashIsEqual,
} from 'lodash'

export const areSameValue: FnMatch = (a, b) => a === b
export const areEqual = lodashIsEqual as FnMatch
