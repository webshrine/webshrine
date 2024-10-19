import type { AnyArray, AnyRecord, Fn, GuardFn } from '@webshrine/stdtyp'

import {
  isArray as lodashIsArray,
  isBoolean as lodashIsBoolean,
  isDate as lodashIsDate,
  isEmpty as lodashIsEmpty,
  isError as lodashIsError,
  isFunction as lodashIsFunction,
  isNumber as lodashIsNumber,
  isObject as lodashIsObject,
  isPlainObject as lodashIsPlainObject,
  isString as lodashIsString,
  isSymbol as lodashIsSymbol,
} from 'lodash'

export {
  isFalsy,
  isNullish,
  isPrimitive,
} from 'utility-types'

export const isArray = lodashIsArray as GuardFn<AnyArray>
export const isBoolean = lodashIsBoolean as GuardFn<boolean>
export const isDate = lodashIsDate as GuardFn<Date>
export const isFunction = lodashIsFunction as GuardFn<Fn>
export const isNumber = lodashIsNumber as GuardFn<number>
export const isObject = lodashIsObject as GuardFn<AnyRecord>
export const isPlainObject = lodashIsPlainObject as GuardFn<AnyRecord>
export const isString = lodashIsString as GuardFn<string>
export const isSymbol = lodashIsSymbol as GuardFn<symbol>

export const isEmpty = lodashIsEmpty
export const isError = lodashIsError as GuardFn<Error>
