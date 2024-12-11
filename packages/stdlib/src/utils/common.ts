import type { AnyObject, FnPredicate } from '@webshrine/stdtyp'

export * from 'cope'

/**
 * A no-operation function that returns undefined regardless of the arguments it receives.
 *
 * Uses as mock in rare cases to satisfy types and decrease the amount of code.
 */
export const noop = () => { }

/**
 * A no-operation function that returns the argument it received.
 *
 * Uses as mock in rare cases to satisfy types and decrease the amount of code.
 * @example
 * ```ts
 * const order: FnWrapper = isDesc ? inverse : through
 * const sorter = order(compareNumber)
 *
 * [1,3,2].sort(sorter)
 * ```
 */
export const through = <T>(arg: T) => arg

/**
 *
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const hasOwn: FnPredicate<[object: AnyObject, key: string]> = Object.prototype.hasOwnProperty.call

// TODO: Think about it :D
// export const sleepSync = (ms: number) => {
//   const end = Date.now() + ms
//   while (Date.now() < end) continue
// }
