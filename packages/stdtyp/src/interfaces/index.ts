// Interfaces
import type { Primitive, ToPrimitiveHint } from '../aliases'

/**
 * Defines a type that can be serialised to a string
 * via the `toString` method or implicit type conversion
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
 * @example
 * ```ts
 * class SomeObject implements SerializableToString {
 *   toString = () => 'SomeObject[...]'
 * }
 *
 * const str = new SomeObject() + '' // 'SomeObject[...]'
 * ```
 *
 * #interface #atom #serialisation
 * @category Interfaces
 */
export interface SerializableToString {
  toString: () => string
}

/**
 * Defines a type that can be serialised to a JSON string
 * via the `toJSON` method or `JSON.stringify(...)` call
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior
 * @example
 * ```ts
 * class SomeObject implements SerializableToJSON {
 *   toJSON = () => '["SomeObject\'s data"]'
 * }
 *
 * const str = JSON.stringify(new SomeObject()) // '["SomeObject's data"]'
 * ```
 *
 * #interface #atom #serialisation
 * @category Interfaces
 */
export interface SerializableToJSON {
  toJSON: () => string
}

/**
 * TODO
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
 *
 * #interface #atom #serialisation
 * @category Interfaces
 */
export interface Valuable<Value> {
  valueOf: () => Value
}

/**
 * Defines a type that can be serialised to a primitive
 * via the `Symbol.toPrimitive` method or implicit type conversion
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
 * @example
 * ```ts
 * class SomeObject implements SerializableToPrimitive {
 *   [Symbol.toPrimitive] = (hint) => {
 *     switch (hint) {
 *       case 'number':
 *         return 123
 *       case 'string':
 *         return 'SomeObject[...]'
 *       default:
 *         return 'SomeObject[...]'
 *     }
 *   }
 * }
 *
 * const str = new SomeObject() + '' // 'SomeObject[...]'
 * const num = new SomeObject() * 1 // 123
 * ```
 *
 * #interface #atom #serialisation
 * @category Interfaces
 */
export interface SerializableToPrimitive {

  /** @throws TypeError */
  [Symbol.toPrimitive]: (hint: ToPrimitiveHint) => Primitive
}

// /**
//  * #interface #molecule
//  */
// export interface NativeObject extends SerializableToString, Valuable { }

/** @category Interfaces */
export interface Lengthy {
  length: number
}

/** @category Interfaces */
export interface Sized {
  size: number
}
