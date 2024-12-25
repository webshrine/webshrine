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

/** @category Guards */
export const isArray = Array.isArray as FnGuard<AnyArray>

/** @category Guards */
export const isBoolean = (n => typeof n === 'boolean') as FnGuard<boolean>

/** @category Guards */
export const isDate = lodashIsDate as FnGuard<Date>

/** @category Guards */
export const isFunction = lodashIsFunction as FnGuard<Fn>

/** @category Guards */
export const isSymbol = (n => typeof n === 'symbol') as FnGuard<symbol>

/** @category Guards */
export const isFalsy = utIsFalsy as FnGuard<Falsy>

/** @category Guards */
export const isNullish = utIsNullish as FnGuard<Nullish>

/** @category Guards */
export const isPrimitive = utIsPrimitive as FnGuard<Primitive>
// export const isEmpty = lodashIsEmpty // FIXME: broken after switch to lodash-es
// export const isError = lodashIsError as FnGuard<Error> // TODO: implement it on demand
// export const isNative = lodashIsNative as FnGuard<Fn> // TODO: implement it on demand

/** @category Guards */
export const isObject = lodashIsObject as FnGuard<AnyObject>

/** @category Guards */
export const isPlainObject = _isPlainObject as FnGuard<AnyObject>

/** @category Guards */
export const isCollection = (v => isArray(v) || isPlainObject(v)) as FnGuard<Collection>

/** @category Guards */
export const isNumber = (n => typeof n === 'number') as FnGuard<number>

/** @category Guards */
export const isNumberOdd = ((n: number) => n % 2 === 1) as FnGuard<number>

/** @category Guards */
export const isNumberEven = ((n: number) => n % 2 === 0) as FnGuard<number>

/** @category Guards */
export const isNumberPositive = ((n: number) => n > 0) as FnGuard<number>

/** @category Guards */
export const isNumberNegative = ((n: number) => n < 0) as FnGuard<number>

/** @category Guards */
export const isNumberZero = ((n: number) => n === 0) as FnGuard<number>

/** @category Guards */
export const isNumberInteger = ((n: number) => n % 1 === 0) as FnGuard<number>

/** @category Guards */
export const isNumberFractional = ((n: number) => n % 1 !== 0) as FnGuard<number>

/** @category Guards */
export const isNumberSafe = ((n: number) => Number.isSafeInteger(n)) as FnGuard<number>

/** @category Guards */
export const isBigInt = (n => typeof n === 'bigint') as FnGuard<bigint>

/** @category Guards */
export const isBigIntOdd = ((n: bigint) => n % 2n === 1n) as FnGuard<bigint>

/** @category Guards */
export const isBigIntEven = ((n: bigint) => n % 2n === 0n) as FnGuard<bigint>

/** @category Guards */
export const isBigIntPositive = ((n: bigint) => n > 0n) as FnGuard<bigint>

/** @category Guards */
export const isBigIntNegative = ((n: bigint) => n < 0n) as FnGuard<bigint>

/** @category Guards */
export const isBigIntZero = ((n: bigint) => n === 0n) as FnGuard<bigint>

/** @category Guards */
export const isNumeric = (v => isNumber(v) || isBigInt(v)) as FnGuard<Numeric>

/** @category Guards */
export const isNumericOdd = ((v: Numeric) => typeof v === 'number' ? isNumberOdd(v) : isBigIntOdd(v)) as FnGuard<Numeric>

/** @category Guards */
export const isNumericEven = ((v: Numeric) => typeof v === 'number' ? isNumberEven(v) : isBigIntEven(v)) as FnGuard<Numeric>

/** @category Guards */
export const isNumericPositive = ((v: Numeric) => typeof v === 'number' ? isNumberPositive(v) : isBigIntPositive(v)) as FnGuard<Numeric>

/** @category Guards */
export const isNumericNegative = ((v: Numeric) => typeof v === 'number' ? isNumberNegative(v) : isBigIntNegative(v)) as FnGuard<Numeric>

/** @category Guards */
export const isNumericZero = ((v: Numeric) => typeof v === 'number' ? isNumberZero(v) : isBigIntZero(v)) as FnGuard<Numeric>

/** @category Guards */
export const isNumericInteger = ((v: Numeric) => typeof v === 'number' ? isNumberInteger(v) : true) as FnGuard<Numeric>

/** @category Guards */
export const isNumericFractional = ((v: Numeric) => typeof v === 'number' ? isNumberFractional(v) : false) as FnGuard<Numeric>

/** @category Guards */
export const isString = (v => typeof v === 'string') as FnGuard<string>

/** @category Guards */
export const isStringEmpty = ((s: string) => s === '') as FnGuard<''>

/** @category Guards */
export const isStringEmptyOrWhiteSpace = ((s: string) => s === '' || /^\s+$/.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableDecimal = ((s: string) => /^\d+\.\d+$|^\d+$/.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableDecimalLiteral = ((s: string) => /^[\d_]+$/.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableBinary = ((s: string) => /^[01]+$/.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableBinaryLiteral = ((s: string) => /^0b[01_]+$/.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableOctal = ((s: string) => /^[0-7]+$/.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableOctalLiteral = ((s: string) => /^0o[0-7_]+$/.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableHexadecimal = ((s: string) => /^[\dA-F]+$/i.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableHexadecimalLiteral = ((s: string) => /^0x[\dA-F_]+$/i.test(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableAny = ((s: string) => isStringNumberableDecimal(s) || isStringNumberableBinary(s) || isStringNumberableOctal(s) || isStringNumberableHexadecimal(s)) as FnGuard<string>

/** @category Guards */
export const isStringNumberableAnyLiteral = ((s: string) => isStringNumberableDecimalLiteral(s) || isStringNumberableBinaryLiteral(s) || isStringNumberableOctalLiteral(s) || isStringNumberableHexadecimalLiteral(s)) as FnGuard<string>

/** @category Guards */
export const isStringDate = ((s: string) => !Number.isNaN(Date.parse(s))) as FnGuard<string>
