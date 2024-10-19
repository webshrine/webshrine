import { Mixin, mixin } from './mixin'

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
const createEmpConstructor = () => {
  return class Bar {
    constructor() { }
    empMethod() { return 'emp return' }
  }
}

let Foo = createFooConstructor()
let Bar = createBarConstructor()
let Emp = createEmpConstructor()
beforeEach(() => {
  Foo = createFooConstructor()
  Bar = createBarConstructor()
  Emp = createEmpConstructor()
})

it('basic', () => {
  const Mixed = mixin([
    Foo,
    Bar,
    Emp,
  ] as const)
  const mixed = new Mixed([
    [687],
    ['bar'],
    [],
  ])

  expect(mixed.fooArg).toBe(687)
  expect(mixed.barArg).toBe('bar')
  expect(mixed.fooMethod()).toBe('foo return')
  expect(mixed.barMethod()).toBe('bar return')
  expect(mixed.empMethod()).toBe('emp return')
})

it('basic record', () => {
  const Mixed = mixin({
    foo: Foo,
    bar: Bar,
    emp: Emp,
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
  const Mixed = mixin([Emp])
  const mixed = new Mixed([])

  expect(mixed).toBeInstanceOf(Mixin)
})

it('mixin check consist constructor', () => {
  const Mixed = mixin({
    foo: Foo,
    bar: Bar,
    emp: Emp,
  })
  const mixed = new Mixed({ foo: [], bar: [] })

  expect(Mixin.consistOf(mixed, Foo)).toBe(true)
  expect(Mixin.consistOf(mixed, Bar)).toBe(true)
  expect(Mixin.consistOf(mixed, Emp)).toBe(true)
  expect(Mixin.consistOf(mixed, Set)).toBe(false)
  expect(Mixin.consistOf(mixed, Map)).toBe(false)
  expect(Mixin.consistOf(mixed, Number)).toBe(false)
})

// it('instanceof', () => {
//   const Mixed = mixin({ foo: Foo, bar: Bar })
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
