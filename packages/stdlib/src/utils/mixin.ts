import type { Constructor, FnGuard, OmitByValue, UnionToIntersection, ValuesType } from '@webshrine/stdtyp'

/**
 * TODO
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 */
export function applyMembers(derivedConstructor: Constructor, constructors: MixinArray) {
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

export abstract class Mixin {
  static consistOf(instance: Mixin, constructor: Constructor) {
    return instance[constituents].includes(constructor)
  }

  protected [constituents]: MixinArray

  constructor(extendedCtors: MixinArray) {
    this[constituents] = extendedCtors
  }

  [Symbol.dispose](): void {
    this[constituents].forEach((c) => {
      c.prototype[Symbol.dispose]?.call(this)
    })
  }
}

type MixinRecord = Record<string, Constructor>
type MixinArray = ReadonlyArray<Constructor>

type MixedConstructorParamsFromRecord<Ctors extends MixinRecord> = OmitByValue<{
  [P in keyof Ctors]: ConstructorParameters<Ctors[P]> extends []
  ? undefined
  : ConstructorParameters<Ctors[P]>
}, undefined>

type MixedConstructorParamsFromArray<Ctors extends Readonly<MixinArray>> = {
  [K in keyof Ctors]: ConstructorParameters<Ctors[K]>
}

const isParametersAMixinArray = ((v: any) => Array.isArray(v)) as FnGuard<MixinArray>

export function mixin<
  Constructors extends MixinRecord | MixinArray,
  MixedConstructorParams = Constructors extends MixinArray
  ? MixedConstructorParamsFromArray<Constructors>
  : Constructors extends MixinRecord ? MixedConstructorParamsFromRecord<Constructors> : never,
>(constructors: Constructors): Constructors extends MixinArray
  ? Constructor<
    UnionToIntersection<Mixin | InstanceType<Constructors[number]>>,
    [MixedConstructorParamsFromArray<Constructors>]
  >
  : Constructors extends MixinRecord ? Constructor<
    UnionToIntersection<Mixin | InstanceType<ValuesType<Constructors>>>,
    [MixedConstructorParams]
  > : never {
  if (isParametersAMixinArray(constructors)) {
    const ctorsList = constructors as MixinArray

    class NewMixin extends Mixin implements Disposable {
      constructor(parameters: MixedConstructorParamsFromArray<typeof ctorsList>) {
        super(ctorsList)
        for (let i = 0; i < ctorsList.length; i++) {
          const Ctor = ctorsList[i]
          const instance = new Ctor(...(parameters[i] || []))
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
  else {
    const ctorsRecord = constructors as MixinRecord
    const ctorsList = Object.values(ctorsRecord) as Constructor[]

    class NewMixin extends Mixin implements Disposable {
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
