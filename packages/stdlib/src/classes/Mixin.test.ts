import { Mixin } from './Mixin'

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
    constructor(public grandfatherArg: string = 'grandfather default') { }
    grandfatherMethod() { return 'grandfather return' }
  }
  class Father extends Grandfather {
    constructor(public fatherArg: string = 'father default') { super() }
    fatherMethod() { return 'father return' }
  }
  return class Son extends Father {
    constructor(public sonArg: string = 'son default') { super() }
    sonMethod() { return 'son return' }
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

it('must extend base Mixin abstract class', () => {
  const Mixed = Mixin.create({ n: Nullary })
  const mixed = new Mixed({})

  expect(mixed).toBeInstanceOf(Mixin)
})

it('mixin check consist constructor', () => {
  const Mixed = Mixin.create({
    foo: Foo,
    bar: Bar,
    emp: Nullary,
  })
  const mixed = new Mixed({ foo: [], bar: [] })

  expect(Mixin.consistOf(mixed, Foo)).toBe(true)
  expect(Mixin.consistOf(mixed, Bar)).toBe(true)
  expect(Mixin.consistOf(mixed, Nullary)).toBe(true)
  expect(Mixin.consistOf(mixed, Set)).toBe(false)
  expect(Mixin.consistOf(mixed, Map)).toBe(false)
  expect(Mixin.consistOf(mixed, Number)).toBe(false)
})

it('keep members for long extend chain', () => {
  const Mixed = Mixin.create({
    dyn: Dynasty,
  })
  const mixed = new Mixed()

  expect(mixed.sonArg).toBe('son default')
  expect(mixed.sonMethod()).toBe('son return')
  expect(mixed.fatherArg).toBe('father default')
  expect(mixed.fatherMethod()).toBe('father return')
  expect(mixed.grandfatherArg).toBe('grandfather default')
  expect(mixed.grandfatherMethod()).toBe('grandfather return')
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
