import type { Numeric } from '@webshrine/stdtyp'

/**
 * @private
 * @category Transformers
 */
export const clampBase = <T extends Numeric>(numeric: T, min: T, max: T): T => (
  numeric > max
    ? max
    : numeric < min
      ? min
      : numeric
)

/**
 * @private
 * @category Transformers
 */
export const minNumeric = <T extends Numeric>(numeric1: T, numeric2: T): T => numeric1 > numeric2 ? numeric2 : numeric1

/**
 * @private
 * @category Transformers
 */
export const maxNumeric = <T extends Numeric>(numeric1: T, numeric2: T): T => numeric1 < numeric2 ? numeric2 : numeric1
