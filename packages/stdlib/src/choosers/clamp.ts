import { Numeric } from '@webshrine/stdtyp'

/**
 * @private
 * @category Choosers
 */
const clampBase = <T extends Numeric>(numeric: T, min: T, max: T): T => (
  numeric > max
    ? max
    : numeric < min
      ? min
      : numeric
)

/**
 * Clamps a number between a minimum and maximum value.
 * @category Choosers
 */
export const clampNumber = clampBase<number>

/**
 * Clamps a bigint between a minimum and maximum value.
 * @category Choosers
 */
export const clampBigInt = clampBase<bigint>

/**
 * Clamps a numeric between a minimum and maximum value.
 * @category Choosers
 */
export const clamp = <T extends Numeric>(numeric: T, min: Numeric, max: Numeric): T => (
  typeof numeric === 'number'
    ? clampNumber(numeric, Number(min), Number(max))
    : clampBigInt(numeric, BigInt(min), BigInt(max))
) as T