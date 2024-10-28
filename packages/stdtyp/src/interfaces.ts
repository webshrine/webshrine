// Interfaces
import type { Primitive, ToPrimitiveHint } from './aliases'

/**
 * #interface #atom #serialisation
 */
export interface SerializableToString {
  toString: () => string
}
export interface SerializableToJSON {
  toJSON: () => string
}
export interface Valuable<Value> {
  valueOf: () => Value
}

export interface Primitivizable {
  /**
   *
   * @throws TypeError
   */
  [Symbol.toPrimitive]: (hint: ToPrimitiveHint) => Primitive
}
// export interface InstanceOfCheckable {
//   static [Symbol.hasInstance](instance: any): boolean
// }

/**
 * #interface #molecule
 */
export interface NativeObject extends SerializableToString, SerializableToJSON { }

// function mixin<Constructors extends readonly AnyConstructor[]>(...ctors: Constructors) {
//   return class {
//     constructor(...parametersList: ConstructorParameters<Constructors[number]>) {

//     }
//   };
// }
