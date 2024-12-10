import type { AnyArray, AnyObject, Collection, Falsy, Fn, FnGuard, Nullish, Numeric, Primitive } from '@webshrine/stdtyp'
import {
  isDate as lodashIsDate,
  // isEmpty as lodashIsEmpty,
  isFunction as lodashIsFunction,
  isObject as lodashIsObject,
} from 'lodash-es'

import {
  isFalsy as utIsFalsy,
  isNullish as utIsNullish,
  isPrimitive as utIsPrimitive,
} from 'utility-types'

import { isPlainObject as _isPlainObject } from './isPlainObject'

export const isArray = Array.isArray as FnGuard<AnyArray>
export const isBoolean = (n => typeof n === 'boolean') as FnGuard<boolean>
export const isDate = lodashIsDate as FnGuard<Date>
export const isFunction = lodashIsFunction as FnGuard<Fn>
export const isSymbol = (n => typeof n === 'symbol') as FnGuard<symbol>
export const isFalsy = utIsFalsy as FnGuard<Falsy>
export const isNullish = utIsNullish as FnGuard<Nullish>
export const isPrimitive = utIsPrimitive as FnGuard<Primitive>
// export const isEmpty = lodashIsEmpty // FIXME: broken after switch to lodash-es
// export const isError = lodashIsError as FnGuard<Error> // TODO: implement it on demand
// export const isNative = lodashIsNative as FnGuard<Fn> // TODO: implement it on demand

export const isObject = lodashIsObject as FnGuard<AnyObject>
export const isPlainObject = _isPlainObject as FnGuard<AnyObject>
export const isCollection = (v => isArray(v) || isPlainObject(v)) as FnGuard<Collection>

export const isNumber = (n => typeof n === 'number') as FnGuard<number>
export const isNumberOdd = ((n: number) => n % 2 === 1) as FnGuard<number>
export const isNumberEven = ((n: number) => n % 2 === 0) as FnGuard<number>
export const isNumberPositive = ((n: number) => n > 0) as FnGuard<number>
export const isNumberNegative = ((n: number) => n < 0) as FnGuard<number>
export const isNumberZero = ((n: number) => n === 0) as FnGuard<number>
export const isNumberInteger = ((n: number) => n % 1 === 0) as FnGuard<number>
export const isNumberFractional = ((n: number) => n % 1 !== 0) as FnGuard<number>
export const isNumberSafe = ((n: number) => Number.isSafeInteger(n)) as FnGuard<number>

export const isBigInt = (n => typeof n === 'bigint') as FnGuard<bigint>
export const isBigIntOdd = ((n: bigint) => n % 2n === 1n) as FnGuard<bigint>
export const isBigIntEven = ((n: bigint) => n % 2n === 0n) as FnGuard<bigint>
export const isBigIntPositive = ((n: bigint) => n > 0n) as FnGuard<bigint>
export const isBigIntNegative = ((n: bigint) => n < 0n) as FnGuard<bigint>
export const isBigIntZero = ((n: bigint) => n === 0n) as FnGuard<bigint>

export const isNumeric = (v => isNumber(v) || isBigInt(v)) as FnGuard<Numeric>
export const isNumericOdd = ((v: Numeric) => typeof v === 'number' ? isNumberOdd(v) : isBigIntOdd(v)) as FnGuard<Numeric>
export const isNumericEven = ((v: Numeric) => typeof v === 'number' ? isNumberEven(v) : isBigIntEven(v)) as FnGuard<Numeric>
export const isNumericPositive = ((v: Numeric) => typeof v === 'number' ? isNumberPositive(v) : isBigIntPositive(v)) as FnGuard<Numeric>
export const isNumericNegative = ((v: Numeric) => typeof v === 'number' ? isNumberNegative(v) : isBigIntNegative(v)) as FnGuard<Numeric>
export const isNumericZero = ((v: Numeric) => typeof v === 'number' ? isNumberZero(v) : isBigIntZero(v)) as FnGuard<Numeric>
export const isNumericInteger = ((v: Numeric) => typeof v === 'number' ? isNumberInteger(v) : true) as FnGuard<Numeric>
export const isNumericFractional = ((v: Numeric) => typeof v === 'number' ? isNumberFractional(v) : false) as FnGuard<Numeric>

export const isString = (v => typeof v === 'string') as FnGuard<string>
export const isStringEmpty = ((s: string) => s === '') as FnGuard<''>
export const isStringEmptyOrWhiteSpace = ((s: string) => s === '' || /^\s+$/.test(s)) as FnGuard<string>
export const isStringNumberableDecimal = ((s: string) => /^\d+\.\d+$|^\d+$/.test(s)) as FnGuard<string>
export const isStringNumberableDecimalLiteral = ((s: string) => /^[\d_]+$/.test(s)) as FnGuard<string>
export const isStringNumberableBinary = ((s: string) => /^[01]+$/.test(s)) as FnGuard<string>
export const isStringNumberableBinaryLiteral = ((s: string) => /^0b[01_]+$/.test(s)) as FnGuard<string>
export const isStringNumberableOctal = ((s: string) => /^[0-7]+$/.test(s)) as FnGuard<string>
export const isStringNumberableOctalLiteral = ((s: string) => /^0o[0-7_]+$/.test(s)) as FnGuard<string>
export const isStringNumberableHexadecimal = ((s: string) => /^[\dA-F]+$/i.test(s)) as FnGuard<string>
export const isStringNumberableHexadecimalLiteral = ((s: string) => /^0x[\dA-F_]+$/i.test(s)) as FnGuard<string>
export const isStringNumberableAny = ((s: string) => isStringNumberableDecimal(s) || isStringNumberableBinary(s) || isStringNumberableOctal(s) || isStringNumberableHexadecimal(s)) as FnGuard<string>
export const isStringNumberableAnyLiteral = ((s: string) => isStringNumberableDecimalLiteral(s) || isStringNumberableBinaryLiteral(s) || isStringNumberableOctalLiteral(s) || isStringNumberableHexadecimalLiteral(s)) as FnGuard<string>
export const isStringDate = ((s: string) => !Number.isNaN(Date.parse(s))) as FnGuard<string>
