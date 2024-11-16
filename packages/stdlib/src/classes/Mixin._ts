import type { Constructor, Fn, FnMethod, OmitByValue, UnionToIntersection, ValuesType } from '@webshrine/stdtyp'

function forEachPrototype(
  prototype: object | null,
  callback: Fn<[prototype: object]>,
) {
  let currentPrototype = prototype
  while (currentPrototype) {
    callback(currentPrototype)
    currentPrototype = Object.getPrototypeOf(currentPrototype)
  }
}

function forEachPrototypeRight(
  prototype: object | null,
  callback: Fn<[prototype: object]>,
) {
  const prototypes = []
  let currentPrototype = prototype
  while (currentPrototype) {
    prototypes.push(currentPrototype)
    currentPrototype = Object.getPrototypeOf(currentPrototype)
  }
  prototypes.reverse().forEach(callback)
}

function getAllMethods(instance: InstanceType<Constructor>) {
  const methods: string[] = []
  forEachPrototype(Object.getPrototypeOf(instance), (prototype) => {
    Object.getOwnPropertyNames(prototype)
      .forEach((name) => {
        const method = instance[name]

        if (
          (name !== 'constructor' && !(!(method instanceof Function)))
          && !methods.includes(name)
        ) {
          methods.push(name)
        }
      })
  })
  return methods
  // Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
  //   .filter((name) => {
  //     const method = instance[name]
  //     return name !== 'constructor' && !(!(method instanceof Function))
  //   })
}

// Binder.bind = function(instance, cls) {
//   getAllMethods(instance, cls)
//     .forEach(mtd => {
//       instance[mtd] = instance[mtd].bind(instance);
//     })
// }

/**
 * TODO
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 */
function applyMembers(derivedConstructor: Constructor, constructors: ConstituentsArray) {
  constructors.forEach((baseCtor) => {
    forEachPrototype(baseCtor.prototype, (prototype) => {
      Object.getOwnPropertyNames(prototype).forEach((name) => {
        if (name === 'constructor')
          return

        Object.defineProperty(
          derivedConstructor.prototype,
          name,
          Object.getOwnPropertyDescriptor(prototype, name) || Object.create(null),
        )
      })
    })
  })
}

function applyProperties(derivedConstructor: Constructor, constructors: ConstituentsArray) {
  constructors.forEach((baseCtor) => {
    forEachPrototype(baseCtor, (prototype) => {
      Object.getOwnPropertyNames(prototype).forEach((name) => {
        if (Object.getOwnPropertyDescriptor(derivedConstructor)?.value !== undefined)
          return
        const descriptor = Object.getOwnPropertyDescriptor(prototype, name) || Object.create(null)
        if (name !== 'prototype' && typeof descriptor.value !== 'function')
          Object.defineProperty(derivedConstructor, name, descriptor)
      })
    })
  })
}

const constituents = Symbol('constituents')

type ConstituentsRecord = Record<string, Constructor>
type ConstituentsArray = ReadonlyArray<Constructor>

type MixedConstructorParamsFromRecord<Ctors extends ConstituentsRecord> = OmitByValue<{
  [P in keyof Ctors]: ConstructorParameters<Ctors[P]> extends []
  ? undefined
  : ConstructorParameters<Ctors[P]> extends []
  ? ConstructorParameters<Ctors[P]> | undefined
  : ConstructorParameters<Ctors[P]>
}, undefined>

type MixedConstructorParamsFromRecordOptionalize<Ctors extends ConstituentsRecord> =
  MixedConstructorParamsFromRecord<Ctors> extends { [K in keyof Ctors]: [] }
  ? MixedConstructorParamsFromRecord<Ctors> | undefined
  : MixedConstructorParamsFromRecord<Ctors>

export abstract class Mixin {
  static consistOf(instance: MixinContainer, constructor: Constructor) {
    return instance[constituents].some(ctor => ctor === constructor || ctor.prototype instanceof constructor)
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
          getAllMethods(instance).forEach((mtd) => {
            console.log(mtd)
            instance[mtd] = instance[mtd].bind(instance)
            // const m = instance[mtd]
            // instance[mtd] = (...args: []) => m.apply(context, args)
          })
          // console.table(Object.getOwnPropertyNames(context))
          // console.table(omit(instance, Object.getOwnPropertyNames(context)))
          Object.assign(this, instance)
        }
        // TODO: think about binding context to methods
        // TODO: warn about overrides for dev mode
      }
    }

    // applyProperties(NewMixin, ctorsList)
    // @ts-expect-error Complex type flow
    return NewMixin
    // return class extends NewMixin { }
  }
}

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
