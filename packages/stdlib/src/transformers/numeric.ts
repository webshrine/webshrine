import type { Numeric } from '@webshrine/stdtyp'

/**
 * Clamps a numeric between a minimum and maximum value.
 * @category Transformers
 */
export const clamp = (numeric: Numeric, min: Numeric, max: Numeric): Numeric => (
  numeric > max
    ? max
    : numeric < min
      ? min
      : numeric
)
