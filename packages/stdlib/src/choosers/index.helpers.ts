import type { Numeric } from '@webshrine/stdtyp'

/**
 * @private
 * @category Choosers
 */
export const minNumeric = <T extends Numeric>(numeric1: T, numeric2: T): T => numeric1 > numeric2 ? numeric2 : numeric1

/**
 * @private
 * @category Choosers
 */
export const maxNumeric = <T extends Numeric>(numeric1: T, numeric2: T): T => numeric1 < numeric2 ? numeric2 : numeric1
