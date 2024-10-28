import type { AnyArray, AnyRecord, Falsy, Fn, FnGuard, Nullish, Numeric, Primitive } from '@webshrine/stdtyp'

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

import {
  isFalsy as utIsFalsy,
  isNullish as utIsNullish,
  isPrimitive as utIsPrimitive,
} from 'utility-types'

export const isArray = lodashIsArray as FnGuard<AnyArray>
export const isBoolean = lodashIsBoolean as FnGuard<boolean>
export const isDate = lodashIsDate as FnGuard<Date>
export const isFunction = lodashIsFunction as FnGuard<Fn>
export const isSymbol = lodashIsSymbol as FnGuard<symbol>
export const isFalsy = utIsFalsy as FnGuard<Falsy>
export const isNullish = utIsNullish as FnGuard<Nullish>
export const isPrimitive = utIsPrimitive as FnGuard<Primitive>
export const isEmpty = lodashIsEmpty
export const isError = lodashIsError as FnGuard<Error>

export const isObject = lodashIsObject as FnGuard<AnyRecord>
export const isPlainObject = lodashIsPlainObject as FnGuard<AnyRecord>

export const isNumber = lodashIsNumber as FnGuard<number>
export const isNumberOdd = ((n: number) => n % 2 === 1) as FnGuard<number>
export const isNumberEven = ((n: number) => n % 2 === 0) as FnGuard<number>
export const isNumberPositive = ((n: number) => n > 0) as FnGuard<number>
export const isNumberNegative = ((n: number) => n < 0) as FnGuard<number>
export const isNumberZero = ((n: number) => n === 0) as FnGuard<number>
export const isNumberInteger = ((n: number) => n % 1 === 0) as FnGuard<number>
export const isNumberFractional = ((n: number) => n % 1 !== 0) as FnGuard<number>

export const isBigInt = ((n: any) => typeof n === 'bigint') as FnGuard<bigint>
export const isBigIntOdd = ((n: bigint) => n % 2n === 1n) as FnGuard<bigint>
export const isBigIntEven = ((n: bigint) => n % 2n === 0n) as FnGuard<bigint>
export const isBigIntPositive = ((n: bigint) => n > 0n) as FnGuard<bigint>
export const isBigIntNegative = ((n: bigint) => n < 0n) as FnGuard<bigint>
export const isBigIntZero = ((n: bigint) => n === 0n) as FnGuard<bigint>

export const isNumeric = ((v: any) => isNumber(v) || isBigInt(v)) as FnGuard<Numeric>
export const isNumericOdd = ((v: Numeric) => typeof v === 'number' ? isNumberOdd(v) : isBigIntOdd(v)) as FnGuard<Numeric>
export const isNumericEven = ((v: Numeric) => typeof v === 'number' ? isNumberEven(v) : isBigIntEven(v)) as FnGuard<Numeric>
export const isNumericPositive = ((v: Numeric) => typeof v === 'number' ? isNumberPositive(v) : isBigIntPositive(v)) as FnGuard<Numeric>
export const isNumericNegative = ((v: Numeric) => typeof v === 'number' ? isNumberNegative(v) : isBigIntNegative(v)) as FnGuard<Numeric>
export const isNumericZero = ((v: Numeric) => typeof v === 'number' ? isNumberZero(v) : isBigIntZero(v)) as FnGuard<Numeric>
export const isNumericInteger = ((v: Numeric) => typeof v === 'number' ? isNumberInteger(v) : true) as FnGuard<Numeric>
export const isNumericFractional = ((v: Numeric) => typeof v === 'number' ? isNumberFractional(v) : false) as FnGuard<Numeric>

export const isString = lodashIsString as FnGuard<string>
export const isStringEmpty = ((s: string) => s === '') as FnGuard<''>
export const isStringEmptyOrWhiteSpace = ((s: string) => s === '' || /^\s+$/.test(s)) as FnGuard<string>
export const isStringNumericDecimal = ((s: string) => /^\d+\.\d+$|^\d+$/.test(s)) as FnGuard<string>
export const isStringNumericDecimalLiteral = ((s: string) => /^[\d_]+$/.test(s)) as FnGuard<string>
export const isStringNumericBinary = ((s: string) => /^[01]+$/.test(s)) as FnGuard<string>
export const isStringNumericBinaryLiteral = ((s: string) => /^0b[01_]+$/.test(s)) as FnGuard<string>
export const isStringNumericOctal = ((s: string) => /^[0-7]+$/.test(s)) as FnGuard<string>
export const isStringNumericOctalLiteral = ((s: string) => /^0o[0-7_]+$/.test(s)) as FnGuard<string>
export const isStringNumericHexadecimal = ((s: string) => /^[\dA-F]+$/i.test(s)) as FnGuard<string>
export const isStringNumericHexadecimalLiteral = ((s: string) => /^0x[\dA-F_]+$/i.test(s)) as FnGuard<string>
export const isStringNumericAny = ((s: string) => isStringNumericDecimal(s) || isStringNumericBinary(s) || isStringNumericOctal(s) || isStringNumericHexadecimal(s)) as FnGuard<string>
export const isStringNumericAnyLiteral = ((s: string) => isStringNumericDecimalLiteral(s) || isStringNumericBinaryLiteral(s) || isStringNumericOctalLiteral(s) || isStringNumericHexadecimalLiteral(s)) as FnGuard<string>
export const isStringDate = ((s: string) => !Number.isNaN(Date.parse(s))) as FnGuard<string>
