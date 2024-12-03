export * from 'cope'

/**
 * A no-operation function that returns undefined regardless of the arguments it receives.
 */
export const noop = () => { }

/**
 *
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// TODO: Think about it :D
// export const sleepSync = (ms: number) => {
//   const end = Date.now() + ms
//   while (Date.now() < end) continue
// }

// type FnUnary = <T>(arg: T) => T
// const reducePipe = <T>(acc: T, func: (arg: T) => T) => func(acc)

// /**
//  *
//  */
// export const compose = <T, F extends (arg: T) => T>(...fns: F[]) => {
//   return (argument: T): T => fns.reduceRight(reducePipe, argument)
// }

// /**
//  *
//  */
// export const pipe = <T, F extends (arg: T) => T>(...fns: F[]) => {
//   return (argument: T): T => fns.reduce(reducePipe, argument)
// }
