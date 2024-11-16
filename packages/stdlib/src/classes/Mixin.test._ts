import { EventEmitter } from './EventEmitter'
import { Mixin, MixinContainer } from './Mixin'

const createFooConstructor = () => {
  return class Foo {
    constructor(public fooArg: number = 123) { }
    fooMethod() { return 'foo return' }
  }
}
const createBarConstructor = () => {
  return class Bar {
    constructor(public barArg: string = 'abc') { }
    barMethod() { return 'bar return' }
  }
}
const createDynastyConstructor = () => {
  class Grandfather {
    lastName: string = 'grandov'
    constructor(public grandfatherArg: string = 'grandfather default') { }
    grandfatherMethod() { return 'grandfather return' }
  }
  class Father extends Grandfather {
    constructor(public fatherArg: string = 'father default') { super() }
    fatherMethod() { return 'father return' }
  }
  class Son extends Father {
    lastName: string = 'sonov'
    constructor(public sonArg: string = 'son default') { super() }
    sonMethod() { return 'son return' }
  }
  return {
    Grandfather,
    Father,
    Son,
  }
}
const createNullaryConstructor = () => {
  return class Bar {
    constructor() { }
    empMethod() { return 'emp return' }
  }
}

let Foo = createFooConstructor()
let Bar = createBarConstructor()
let Nullary = createNullaryConstructor()
let Dynasty = createDynastyConstructor()
beforeEach(() => {
  Foo = createFooConstructor()
  Bar = createBarConstructor()
  Nullary = createNullaryConstructor()
  Dynasty = createDynastyConstructor()
})

// it('basic array', () => {
//   const Mixed = Mixin.create([
//     Foo,
//     Bar,
//     Nullary,
//   ] as const)
//   const mixed = new Mixed([
//     [687],
//     ['bar'],
//     [],
//   ])

//   expect(mixed.fooArg).toBe(687)
//   expect(mixed.barArg).toBe('bar')
//   expect(mixed.fooMethod()).toBe('foo return')
//   expect(mixed.barMethod()).toBe('bar return')
//   expect(mixed.empMethod()).toBe('emp return')
// })

it('basic', () => {
  const Mixed = Mixin.create({
    foo: Foo,
    bar: Bar,
    emp: Nullary,
  })
  const mixed = new Mixed({
    foo: [687],
    bar: ['bar'],
  })

  expect(mixed.fooArg).toBe(687)
  expect(mixed.barArg).toBe('bar')
  expect(mixed.fooMethod()).toBe('foo return')
  expect(mixed.barMethod()).toBe('bar return')
  expect(mixed.empMethod()).toBe('emp return')
})

it('must extend MixinContainer abstract class', () => {
  const Mixed = Mixin.create({ n: Nullary })
  const mixed = new Mixed({})

  expect(mixed).toBeInstanceOf(MixinContainer)
})

it('mixin check consist constructor', () => {
  const Mixed = Mixin.create({
    foo: Foo,
    bar: Bar,
    emp: Nullary,
    dyn: Dynasty.Son,
  })
  const mixed = new Mixed({ foo: [], bar: [], dyn: [] })

  expect(Mixin.consistOf(mixed, Foo)).toBe(true)
  expect(Mixin.consistOf(mixed, Bar)).toBe(true)
  expect(Mixin.consistOf(mixed, Nullary)).toBe(true)
  expect(Mixin.consistOf(mixed, Set)).toBe(false)
  expect(Mixin.consistOf(mixed, Map)).toBe(false)
  expect(Mixin.consistOf(mixed, Number)).toBe(false)
  expect(Mixin.consistOf(mixed, Dynasty.Son)).toBe(true)
  expect(Mixin.consistOf(mixed, Dynasty.Father)).toBe(true)
  expect(Mixin.consistOf(mixed, Dynasty.Grandfather)).toBe(true)
})

it('keep members for long extend chain', () => {
  const Mixed = Mixin.create({
    dyn: Dynasty.Son,
  })
  const mixed = new Mixed({
    dyn: [],
  })

  expect(mixed.sonArg).toBe('son default')
  expect(mixed.sonMethod()).toBe('son return')
  expect(mixed.fatherArg).toBe('father default')
  expect(mixed.fatherMethod()).toBe('father return')
  expect(mixed.grandfatherArg).toBe('grandfather default')
  expect(mixed.grandfatherMethod()).toBe('grandfather return')
  expect(mixed.lastName).toBe('sonov')
})

it('real example', () => {
  const methodAdd = vi.fn()
  const listenAdd = vi.fn()
  const listenRemove = vi.fn()
  const listenChange = vi.fn()

  type Item = number
  class SetEmitting extends Mixin.create({
    set: Set<Item>,
    events: EventEmitter<{
      add: [Item]
      remove: [Item]
      change: undefined
    }>,
  }) {
    add(value: Item) {
      this.emit('change')
      this.emit('add', value)
      methodAdd()
      return super.add(value)
    }

    delete(value: Item) {
      this.emit('change')
      this.emit('remove', value)
      return super.delete(value)
    }

    clear() {
      this.emit('change')
      return super.clear()
    }
  }

  const setEmitting = new SetEmitting({ set: [] })
  setEmitting.on('add', listenAdd)
  setEmitting.on('remove', listenRemove)
  setEmitting.on('change', listenChange)

  setEmitting.add(1)
  setEmitting.add(2)
  setEmitting.add(3)
  setEmitting.delete(2)
  setEmitting.clear()

  expect(methodAdd).toHaveBeenCalledTimes(3)
  expect(listenAdd).toHaveBeenCalledTimes(3)
  expect(listenRemove).toHaveBeenCalledTimes(1)
  expect(listenChange).toHaveBeenCalledTimes(5)
})

// it('instanceof', () => {
//   const Mixed = Mixin.create({ foo: Foo, bar: Bar })
//   const mixed = new Mixed({
//     foo: [123],
//     bar: ['bar'],
//   })

//   expect(mixed instanceof Mixed).toBe(true)
//   expect(mixed instanceof Foo).toBe(true)
//   expect(mixed instanceof Bar).toBe(true)
// })

// function asd<T extends any[]>(...args: T) {
//   return class {
//     constructor(...args: T) {
//       console.log(args)
//     }
//   }
// }
// const xcv = asd(123, 'asd', true)

// new xcv()
