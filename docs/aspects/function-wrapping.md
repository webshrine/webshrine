# Function wrapping
Function wrapping is a technique used to enhance or modify existing functions without altering their original implementation.

## Debounce
Creates a debounced version of the provided function.

The original function will only be called after `wait` milliseconds have elapsed since the last time it was invoked.

This is useful for rate-limiting functions that are called frequently.

```ts
const update = () => {
  console.log('Window resized')
}
const scheduleUpdate = debounce(update, 300)

window.addEventListener('resize', scheduleUpdate)
```

## Throttle
Creates a throttled version of the provided function.

The original function will be invoked at most once per every `wait` milliseconds.

This is useful for limiting the rate at which a function can fire.

```ts
const scrollHandler = () => {
  console.log('Window scrolled')
}
const throttledScrollHandler = throttle(scrollHandler, 100)

window.addEventListener('scroll', throttledScrollHandler)
```

## Once
Creates a function that is restricted to invoking the provided callback once.

Repeat calls to the created function will return the value of the first call.

```ts
const createApiClient = () => {
  console.info('Api client initialized')
  return {
    // ... implementation of the API client
  }
}
const useApi = once(createApiClient)

const api = useApi() // Logs: "Api client initialized"
const api2 = useApi() // Returns the same instance as above
```

## Negate
Creates a function that negates the result of the provided `predicate` function.

Supports both synchronous and asynchronous predicates.

```ts
const isEven = n => n % 2 === 0
const isOdd = negate(isEven)

console.log(isEven(2)) // true
console.log(isOdd(2)) // false
```
```ts
async function checkValid(data) {
  const api = useApi()
  return await api.validateData(data)
}
const checkInvalid = negate(checkValid)

console.log(checkValid(validData)) // true
console.log(checkInvalid(validData)) // false
```

## Invert
Creates a function that inverts the comparison result of the provided `compareFn` function.

Useful for invert sorting order.

```ts
const ascending = compareNumber
const descending = invert(ascending)

console.log([3, 1, 2].sort(ascending)) // [1, 2, 3]
console.log([3, 1, 2].sort(descending)) // [3, 2, 1]
```
