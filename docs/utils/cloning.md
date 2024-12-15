# Cloning
The cloning functions are designed to create deep copies of various data structures.

## `copy`
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

## `clone`
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
