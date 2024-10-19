export { omit, once, pick } from 'lodash'

export function noop() { }

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
