# Matchers
## Overview
Matchers are functions that compare two values and return a boolean indicating whether they are considered equal or not.

Satisfies type <ApiLink name="FnMatch"/>

## `areSame`

Performs a **strict** equality comparison between two values using the `===` operator. This means that both the value and type must be the same.

### Examples

```ts
areSame(1, 1) // => true
areSame(1, '1') // => false
areSame({}, {}) // => false
```

## `areSimilar`

Performs a **loose** equality comparison between two values using the `==` operator. This means that the values are compared after type coercion.

### Examples

```ts
areSimilar(1, 1) // => true
areSimilar(1, '1') // => true
areSimilar({}, {}) // => false
```

## `areSameValueZero`

Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) comparison between two values. This is similar to strict equality (`===`) but treats `NaN` as equal to itself and `-0` as not equal to `+0`.

### Examples

```ts
const object = { user: 'fred' }
const other = { user: 'fred' }

areSameValueZero(object, object) // => true
areSameValueZero(object, other) // => false
areSameValueZero('a', 'a') // => true
areSameValueZero('a', new Object('a')) // => false
areSameValueZero(Number.NaN, Number.NaN) // => true
```

## `areEqual`

Performs a **deep** comparison between two values to determine if they are equivalent. This function supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, plain objects, regexes, sets, strings, symbols, and typed arrays. Functions and DOM nodes are not supported.

### Examples

```ts
const object = { user: 'fred' }
const other = { user: 'fred' }

areEqual(object, other) // => true
object === other // => false
```

This utility is particularly useful when you need to check if two complex objects have the same structure and values.
