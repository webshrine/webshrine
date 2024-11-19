import type { AnyArray, AnyObject, KeysDeep } from '@webshrine/stdtyp'
import { forEachDeep } from '@/utils'

// TODO: Think about support Collection also
export const keys = <T extends AnyObject>(object: T) => Object.keys(object) as Array<{
  [K in keyof T]: K extends string
  ? K
  : K extends number ? `${K}` : never
}[keyof T]>

const indexExtractor = (_: any, index: number) => index
/**
 * Returns an array of indexes for the given array
 *
 * @example
 * indexes(['a', 'b', 'c']) // [0, 1, 2]
 */
export const indexes = (array: AnyArray) => Array.from(array).map(indexExtractor)

export const symbols = <T extends AnyObject>(object: T) => Object.getOwnPropertySymbols(object) as Array<{
  [K in keyof T]: K extends symbol ? K : never
}[keyof T]>

export const values = <T extends AnyObject>(object: T) => Object.values(object) as Array<T[keyof T]>

export const keyOf = <T extends AnyObject>(object: T): Array<keyof T> => (keys(object) as any[]).concat(symbols(object))

export const keysDeep = <T extends AnyObject>(object: T) => {
  const keysSet = new Set<string>()

  forEachDeep(object, (_value, key) => {
    if (typeof key === 'string')
      keysSet.add(key)
  })

  return [...keysSet] as KeysDeep<T>[]
}
