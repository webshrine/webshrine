<script setup>
import ApiLink from '../.vitepress/components/ApiLink.vue'
</script>

# Choosers
## Overview
Choosers are functions that returns one of received values

Satisfies type <ApiLink name="FnChoose"/>

## Extremum
Extremum choosers are functions that returns the minimum or maximum value between two inputs.

### `min`, `max`
These functions is a unified utilities that returns the minimal/maximal value between two inputs, which can be either number, bigint or Lengthy objects.
- If inputs are <ApiLink name="Numeric"/>, it compares them numerically to find the minimum
- If inputs are <ApiLink name="Lengthy"/> objects, it returns the one with the shortest/longest length
- If inputs are <ApiLink name="Sized"/> objects, it returns the one with the smallest/biggest size

```ts
min(5, 10) // => 5
max(5, 10) // => 10

min(5n, 10n) // => 5n
max(5n, 10n) // => 10n

min('hello', 'world!') // => "hello"
max('hello', 'world!') // => "world!"

min([1], [1, 2]) // => [1]
max([1], [1, 2]) // => [1, 2]

min(new Set([5]), new Set([1, 2])) // => Set(5)
max(new Set([5]), new Set([1, 2])) // => Set(1, 2)
```

There is a more specified functions for exact types:
- `minNumber`, `maxNumber` - for number type
- `minBigInt`, `maxBigInt` - for bigint type
- `shortest`, `longest` - for Lengthy objects
- `smallest`, `biggest` - for Sized objects

## Clamping
Clamping choosers are functions that returns the value between two Numeric inputs.

### `clamp`
The `clamp` function is a unified utility that clamps either a number or a bigint between specified minimum and maximum values.

```ts
// Limits:
clamp(-5, 0, 10) // => 0
clamp(5, 0, 10) // => 5
clamp(15, 0, 10) // => 10

// BigInt:
clamp(15n, 0n, 10n) // => 10n

// Mixed types, return type will be converted to type of the first parameter
clamp(15n, 0, 10) // => 10n
clamp(15, 0n, 10) // => 15
```

There is a more specified functions for exact types:
- `clampNumber` - for number type
- `clampBigInt` - for bigint type
