# Loops Utilities
Loops utilities are functions that help in iterating over collections and executing operations on each item.

## `forEach`
Iterates over collection and executes a callback function.

```ts
const numbers = ['1', 'abc', true]
const person = { name: 'Alice', age: 30 }

const iterate: FnIterate<any, CollectionKey> = (item, idx, parent) => {
  if (Array.isArray(parent))
    console.log(`Item at index ${idx} is ${item}`)
  else
    console.log(`Key ${idx} has value ${item}`)
}

forEach(numbers, iterate)
// Output:
// Item at index 0 is 1
// Item at index 1 is abc
// Item at index 2 is true

forEach(person, iterate)
// Output:
// Key name has value Alice
// Key age has value 30
```

## `forItems`, `forValues`
The same as `forEach`, but more specified:
- `forItems` - for arrays
- `forValues` - for objects

## `forSymbols`
Iterates over the symbol properties of an object and executes a callback function.

```ts
const obj = { [Symbol('foo')]: 'bar' }
forSymbols(obj, (value, key, object) => {
  console.log(`Key ${key.toString()} has value ${value}`)
})
// Output:
// Key Symbol(foo) has value bar
```

## `forEachDeep`

Recursively iterates over all nested collections (arrays and objects) and executes a callback function.

```ts
const data = {
  fruits: ['apple', 'banana'],
  vegetables: [{ name: 'carrot', type: 'root' }],
}
forEachDeep(data, (value, key, parent, level) => {
  console.log(`Level ${level}: Key ${key} has value`, value)
})
// Output:
// Level 0: Key fruits has value [ 'apple', 'banana' ]
// Level 1: Key 0 has value apple
// Level 1: Key 1 has value banana
// Level 0: Key vegetables has value [ { name: 'carrot', type: 'root' } ]
// Level 1: Key 0 has value { name: 'carrot', type: 'root' }
// Level 2: Key name has value carrot
// Level 2: Key type has value root
```

## `map`
Iterates over collection, executes a callback function for each item, and returns a new collection with the results.

```ts
const numbers = [1, 2, 3]
const person = { name: 'Alice', age: 30 }

const doubled = mapItems(numbers, (value, index, array) => value * 2)
console.log(doubled) // Output: [2, 4, 6]

const uppercasedNames = mapValues(person, (value, key) => {
  return typeof value === 'string' ? value.toUpperCase() : value - 10
})
console.log(uppercasedNames) // Output: { name: 'ALICE', age: 20 }
```

## `mapItems`, `mapValues`
The same as `map`, but more specified:
- `mapItems` - for arrays
- `mapValues` - for objects

## `times`
Executes a callback function a specified number of times.

```ts
times(3, (number, index, count) => {
  console.log(`Iteration ${index + 1} of ${count}`)
})
// Output:
// Iteration 1 of 3
// Iteration 2 of 3
// Iteration 3 of 3
```

## `timesMap`
Executes a callback function a specified number of times and returns an array with the results.

```ts
const numbers = timesMap(5, (number, index, count) => {
  return number * 2
})
console.log(numbers) // Output: [2, 4, 6, 8, 10]
```
