import type { Numeric } from '@webshrine/stdtyp'

const clampBase = <T extends Numeric>(numeric: T, min: T, max: T): T => (
  numeric > max
    ? max
    : numeric < min
      ? min
      : numeric
)

/**
 * Clamps a number between a minimum and maximum value.
 * @category Transformers
 */
export const clampNumber = clampBase<number>

/**
 * Clamps a bigint between a minimum and maximum value.
 * @category Transformers
 */
export const clampBigInt = clampBase<bigint>

/**
 * Clamps a numeric between a minimum and maximum value.
 * @category Transformers
 */
export const clamp = <T extends Numeric>(numeric: T, min: Numeric, max: Numeric): T => (
  typeof numeric === 'number'
    ? clampNumber(numeric, Number(min), Number(max))
    : clampBigInt(numeric, BigInt(min), BigInt(max))
) as T
