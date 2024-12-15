# Common

## Cloning
The cloning functions are designed to create deep copies of various data structures.

### `copy`
The `copy` function clones primitive values, plain objects, and arrays recursively using the `klona/json` method.

It is optimized for basic cloning tasks and is faster than the more comprehensive `clone` function.

```ts
const original = {
  name: 'John Doe',
  age: 30,
  skills: ['JS', 'TS']
}

const cloned = copy(original)
console.log(cloned.skills === original.skills) // Output: false
console.log(areEqual(cloned, original)) // Output: true

cloned.name = 'Jane Doe'
console.log(cloned) // { name: 'Jane Doe', age: 30, skills: ['JS', 'TS'] }
console.log(original) // { name: 'John Doe', age: 30, skills: ['JS', 'TS'] }
```

### `clone`
The `clone` function clones complex structures recursively using the `klona` method.

It supports a wider range of data types, including custom classes, Date, RegExp, Map, Set, DataView, ArrayBuffer, and TypedArray.

This function is more comprehensive but slower than the `copy` function.

```ts
const original = {
  name: 'John Doe',
  age: 30,
  skills: ['JS', 'TS'],
  date: new Date('1992-05-17'),
  regex: /\d+/g
}

const cloned = clone(original)
// Output: { name: 'John Doe', age: 30, skills: ['JS', 'TS'], date: [Date], regex: /[object RegExp]/ }

cloned.name = 'Jane Doe'
console.log(cloned) // { name: 'Jane Doe', age: 30, skills: ['JS', 'TS'], date: [Date], regex: /[object RegExp]/ }
console.log(original) // { name: 'John Doe', age: 30, skills: ['JS', 'TS'], date: [Date], regex: /\d+/g }
```

## Mocking
The mocking utils are used to replace real implementations to satisfy types or logics without change usage.

### `noop`
This until does nothing, but it can be useful in some cases where you need a placeholder function.

```ts
class SomeClass {
  onMethod: Fn = noop
  method() {
    // ...
    this.onMethod()
  }
}
```

Sometimes its better, than handle empty values:

```ts
class SomeClass {
  onMethod: Fn | undefined
  method() {
    // ...
    if (this.onMethod)
      this.onMethod()
  }
}
```

### `through`
This function returns the argument it received. It can be useful in some cases where you need a placeholder function that does nothing but return the value.

```ts
const order: FnWrapper = isDesc ? inverse : through
const sorter = order(compareNumber)

SOME_DATA.sort(sorter)
```

## Other
### `sleep`
This function returns a promise that resolves after a specified number of milliseconds. It can be useful in some cases where you need to wait for something before continuing.

```ts
async function fetchData() {
  // ... do something
  await sleep(1000)
  // ... do something after waiting 1 second
}
```
