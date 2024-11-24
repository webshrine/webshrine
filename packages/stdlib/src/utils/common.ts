export * from 'cope'
export { noop } from 'lodash-es'

/**
 *
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
