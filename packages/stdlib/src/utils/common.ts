import type { AnyObject, FnPredicate } from '@webshrine/stdtyp'

export * from 'cope'

/**
 * A no-operation function that returns undefined regardless of the arguments it receives.
 */
export const noop = () => { }

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
