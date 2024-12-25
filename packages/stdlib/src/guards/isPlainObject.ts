// Forked from unjs/defu (MIT), that forks from sindresorhus/is-plain-obj (MIT)
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
// Copyright (c) Pooya Parsa <pooya@pi0.io> (https://unjs.io/)

/**
 * Checks if value is a plain object, that is, an object created by the Object constructor or one with a
 * [[Prototype]] of null.
 *
 * Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.
 * @category Guards
 */
export function isPlainObject(value: unknown): boolean {
  if (value === null || typeof value !== 'object')
    return false

  const prototype = Object.getPrototypeOf(value)

  if (
    prototype !== null
    && prototype !== Object.prototype
    && Object.getPrototypeOf(prototype) !== null
  ) {
    return false
  }

  if (Symbol.iterator in value)
    return false

  if (Symbol.toStringTag in value)
    return Object.prototype.toString.call(value) === '[object Module]'

  return true
}
