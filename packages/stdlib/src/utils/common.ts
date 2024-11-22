export * from 'cope'
export { noop } from 'lodash'

/**
 *
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
