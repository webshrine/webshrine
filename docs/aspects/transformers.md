<script setup>
import ApiLink from '../.vitepress/components/ApiLink.vue'
</script>

# Transformers
## Overview
Transformers are functions that transform input data into output data

They are not mutates input data, but can return same nested values links to input contents

Satisfies type <ApiLink name="FnTransform"/>

## Picking
The picking functions are designed to extract specific key-value pairs from objects or nested collections based on provided criteria.

### `pick`
The `pick` function returns a new object containing only the specified keys from the input object.
It implements the TypeScript `Pick` utility type.

```ts
const data = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}

const pickedData = pick(data, ['name', 'email'])
// Output: { name: 'John', email: 'john@example.com' }
```

### `pickBy`
The `pickBy` function returns a new object containing only the key-value pairs where the value satisfies the provided predicate function.

```ts
const data = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}

const pickedData = pickBy(data, value => typeof value === 'string')
// Output: { name: 'John', email: 'john@example.com' }
```

### `pickDeep`, `pickDeepBy`
The `pickDeep` function returns a new object containing only the specified keys from nested collections.
It implements the `PickDeep` utility type and executes recursively on nested collections.

The `pickDeepBy` is the same, but works with a predicate function instead of key names a as `pickBy` function.

```ts
const data = {
  user: {
    name: 'John',
    age: 30,
    contact: {
      email: 'john@example.com',
      phone: '123-456-7890'
    }
  }
}

const pickedData = pickDeep(data, ['name', 'email'])
// Output: { user: { name: 'John', contact: { email: 'john@example.com' } } }
```

### `pickStrict`, `pickDeepStrict`
The `pickStrict` and `pickDeepStrict` functions are similar to their non-strict counterparts but typings more strict, ensuring that the keys provided must exist in the object.

```ts
const data = {
  user: {
    name: 'John',
    age: 30,
  }
}

const pickedData = pickStrict(data, ['contact']) // TSC Error
```

## Omitting
The omitting functions are designed to remove specific key-value pairs from objects or nested collections based on provided criteria.

### `omit`
The `omit` function returns a new object without the specified keys from the input object. It implements the TypeScript `Omit` utility type.

```ts
const data = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}

const omittedData = omit(data, ['name', 'email'])
// Output: { age: 30 }
```

### `omitBy`
The `omitBy` function returns a new object without the key-value pairs where the value satisfies the provided predicate function.

```ts
const data = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}

const omittedData = omitBy(data, value => typeof value === 'string')
// Output: { age: 30 }
```

### `omitDeep`, `omitDeepBy`, `omitStrict`, `omitDeepStrict`
All these functions are implements similar behaviour like in set of `pick*` functions, but main transform logics is omitting.

## Uniqueize
The uniqueize functions are designed to remove duplicate items or values from arrays or objects based on provided criteria. This section explains how each function works and provides usage examples.

### `unique`
Returns a new collection with only the unique items/values.

```ts
const uniqueArray = unique([1, 2, 2, 3, 4, 4, 5])
// Output: [1, 2, 3, 4, 5]

const uniqueObject = unique({
  a: '123',
  b: '123',
  c: 123,
  obj_1: { a: 1 },
  obj_2: { a: 1 },
})
// Output: { a: '123', c: 123, obj_1: { a: 1 }, obj_2: { a: 1 } }
```

### `uniqueBy`
Returns a new collection with only the unique items/values, using a custom matcher function.

```ts
const arrayData = [
  '123',
  123,
  { a: 1 },
  { a: 1 },
]

const uniqueArrayBy = uniqueBy(arrayData, areEqual)
// Output: [ '123', 123, { a: 1 } ]
```

### `uniqueItems`, `uniqueValues`
More specific variants of `unique` function for working only with arrays or objects.

```ts
const data = [1, 2, 2, 3, 4, 4, 5]

const uniqueArr = uniqueItems(data)
const uniqueObj = uniqueValues(data) // [!code error]
```

### `uniqueItemsBy`, `uniqueValuesBy`
More specific variants of `uniqueBy` function for working only with arrays or objects.

## Numberable
The numberable transformers

### `min`, `max`
These functions is a unified utilities that returns the minimal/maximal value between two inputs, which can be either number, bigint or Lengthy objects.
- If inputs are <ApiLink name="Numeric"/>, it compares them numerically to find the minimum.
- If inputs are <ApiLink name="Lengthy"/> objects, it returns the one with the shortest/longest length.

```ts
min(5, 10) // => 5
max(5, 10) // => 10

min(5n, 10n) // => 5n
max(5n, 10n) // => 10n

min('hello', 'world!') // => "hello"
max('hello', 'world!') // => "world!"

min([1], [1, 2]) // => [1]
max([1], [1, 2]) // => [1, 2]
```

There is a more specified functions for exact types:
- `minNumber`, `maxNumber` - for number type
- `minBigInt`, `maxBigInt` - for bigint type
- `shorter`, `longest` - for Lengthy objects

### `clamp`
The `clamp` function is a unified utility that clamps either a number or a bigint between specified minimum and maximum values.

```ts
// Limits:
clamp(-5, 0, 10) // => 0
clamp(5, 0, 10) // => 5
clamp(15, 0, 10) // => 10

// BigInt:
clamp(15n, 0n, 10n) // => 10n

// Mixed types, return type will be converted to type of first parameter
clamp(15n, 0, 10) // => 10n
clamp(15, 0n, 10) // => 15
```

There is a more specified functions for exact types:
- `clampNumber` - for number type
- `clampBigInt` - for bigint type
