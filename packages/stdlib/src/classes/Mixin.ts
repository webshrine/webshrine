import type { Constructor, OmitByValue, UnionToIntersection, ValuesType } from '@webshrine/stdtyp'

/**
 * TODO
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 */
export function applyMembers(derivedConstructor: Constructor, constructors: ConstituentsArray) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedConstructor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null),
      )
    })
  })
}

const constituents = Symbol('constituents')

type ConstituentsRecord = Record<string, Constructor>
type ConstituentsArray = ReadonlyArray<Constructor>

type MixedConstructorParamsFromRecord<Ctors extends ConstituentsRecord> = OmitByValue<{
  [P in keyof Ctors]: ConstructorParameters<Ctors[P]> extends []
  ? undefined
  : ConstructorParameters<Ctors[P]>
}, undefined>

type MixedConstructorParamsFromRecordOptionalize<Ctors extends ConstituentsRecord> =
  MixedConstructorParamsFromRecord<Ctors> extends { [K in keyof Ctors]: Ctors[K] | undefined }
  ? MixedConstructorParamsFromRecord<Ctors> | undefined
  : MixedConstructorParamsFromRecord<Ctors>

export abstract class Mixin {
  static consistOf(instance: MixinContainer, constructor: Constructor) {
    return instance[constituents].includes(constructor)
  }

  static create<
    Constructors extends ConstituentsRecord,
    MixedConstructorParams = MixedConstructorParamsFromRecord<Constructors>,
  >(constructors: Constructors,
  ): Constructor<
    UnionToIntersection<MixinContainer | InstanceType<ValuesType<Constructors>>>,
    [MixedConstructorParams]
  > {
    const ctorsRecord = constructors as ConstituentsRecord
    const ctorsList = Object.values(ctorsRecord) as Constructor[]

    class NewMixin extends MixinContainer implements Disposable {
      constructor(parameters: MixedConstructorParamsFromRecord<typeof ctorsRecord>) {
        super(ctorsList)
        for (const [key, Ctor] of Object.entries(ctorsRecord)) {
          const args = parameters?.[key] || []
          const instance = new Ctor(...args)
          Object.assign(this, instance)
        }
        // TODO: think about binding context to methods
        // TODO: warn about overrides for dev mode
      }
    }

    applyMembers(NewMixin, ctorsList)

    // @ts-expect-error Complex type flow
    return NewMixin
  }
}

/**
 * @private
 */
export abstract class MixinContainer {
  protected [constituents]: ConstituentsArray

  constructor(extendedCtors: ConstituentsArray) {
    this[constituents] = extendedCtors
  }

  [Symbol.dispose](): void {
    this[constituents].forEach((c) => {
      c.prototype[Symbol.dispose]?.call(this)
    })
  }
}

// type MixedConstructorParamsFromArray<Ctors extends Readonly<MixinArray>> = {
//   [K in keyof Ctors]: ConstructorParameters<Ctors[K]>
// }

// const isMixinArray = (v => Array.isArray(v)) as FnGuard<MixinArray>

// export function mixin<
//   Constructors extends MixinRecord | MixinArray,
//   MixedConstructorParams = Constructors extends MixinArray
//   ? MixedConstructorParamsFromArray<Constructors>
//   : Constructors extends MixinRecord ? MixedConstructorParamsFromRecord<Constructors> : never,
// >(constructors: Constructors): Constructors extends MixinArray
//   ? Constructor<
//     UnionToIntersection<Mixin | InstanceType<Constructors[number]>>,
//     [MixedConstructorParamsFromArray<Constructors>]
//   >
//   : Constructors extends MixinRecord ? Constructor<
//     UnionToIntersection<Mixin | InstanceType<ValuesType<Constructors>>>,
//     [MixedConstructorParams]
//   > : never {
//   if (isMixinArray(constructors)) {
//     const ctorsList = constructors as MixinArray

//     class NewMixin extends Mixin implements Disposable {
//       constructor(parameters: MixedConstructorParamsFromArray<typeof ctorsList>) {
//         super(ctorsList)
//         for (let i = 0; i < ctorsList.length; i++) {
//           const Ctor = ctorsList[i]
//           const instance = new Ctor(...(parameters[i] || []))
//           Object.assign(this, instance)
//         }
//         // TODO: think about binding context to methods
//         // TODO: warn about overrides for dev mode
//       }
//     }

//     applyMembers(NewMixin, ctorsList)

//     // @ts-expect-error Complex type flow
//     return NewMixin
//   }
//   else {
//     const ctorsRecord = constructors as MixinRecord
//     const ctorsList = Object.values(ctorsRecord) as Constructor[]

//     class NewMixin extends Mixin implements Disposable {
//       constructor(parameters: MixedConstructorParamsFromRecord<typeof ctorsRecord>) {
//         super(ctorsList)
//         for (const [key, Ctor] of Object.entries(ctorsRecord)) {
//           const args = parameters?.[key] || []
//           const instance = new Ctor(...args)
//           Object.assign(this, instance)
//         }
//         // TODO: think about binding context to methods
//         // TODO: warn about overrides for dev mode
//       }
//     }

//     applyMembers(NewMixin, ctorsList)

//     // @ts-expect-error Complex type flow
//     return NewMixin
//   }
// }
