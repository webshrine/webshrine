import type { _RTFnTransform } from '@/transformers/helpers'
import type { AnyArray, AnyObject, Fn, KeysDeep, ObjectKey } from '@webshrine/stdtyp'
import { isObject } from '@/guards'

export * from './omitters'
export * from './pickers'

// export const keys = <T extends AnyObject>(obj: T) => Object.keys(obj) as Keys<T>[]
export const keys = <T extends AnyObject>(obj: T) => Object.keys(obj) as Array<{
  [K in keyof T]: K extends string
  ? K
  : K extends number ? `${K}` : never
}[keyof T]>

/** Basic iteration function */
export type FnDeepIterate<Value = any, Key = ObjectKey, Result = void> = Fn<[
  value: Value,
  key: Key | undefined,
  parent: AnyObject | AnyArray | undefined,
  level: number,
], Result>

function forEachDeepIterate(
  callback: FnDeepIterate,
  node: any,
  key: ObjectKey | undefined,
  parent: AnyObject | AnyArray | undefined,
  level: number,
) {
  callback(node, key, parent, level)
  if (Array.isArray(node)) {
    for (let ix = 0; ix <= node.length; ix++)
      forEachDeepIterate(callback, node[ix], ix, node, level + 1)
  }
  else if (isObject(node)) {
    for (const k in node)
      forEachDeepIterate(callback, node[k], k, node, level + 1)
  }
}

export function forEachDeep<T extends AnyObject | AnyArray>(data: T, callback: FnDeepIterate) {
  forEachDeepIterate(callback, data, undefined, undefined, 0)
}

/**
 * Iterates each node of recursive structure
 * @example ```ts
 * const obj = {
 *  a: 1,
 *  b: { ba: 2 },
 *  c: [{ caa: 3 }, { cab: 4 }],
 * }
 * forEachNode(obj, (value, key, parent, level) => {
 *  ...Will iterate keys: a, b, ba, c, 0, caa, 1, cab
 * })
 * ```
 */
export function forEachNode() { }
/** Iterates each parent node of recursive structure */
export function forEachParent() { }
/** Iterates each child node of recursive structure */
export function forEachChild() { }

export const keysDeep = <T extends AnyObject>(obj: T) => {
  const keysSet = new Set<string>()

  forEachDeep(obj, (_value, key) => {
    if (typeof key === 'string')
      keysSet.add(key)
  })

  return [...keysSet] as KeysDeep<T>[]
}
