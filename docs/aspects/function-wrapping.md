<script setup lang="ts">
import Timeline from '../.vitepress/components/Timeline.vue'
import { createAsyncWrapperSimulator, generateRandomCallList } from '../.vitepress/components/helpers'
import { debounce, sleep, throttle,  } from '../../packages/stdlib/src'

const calls = () => generateRandomCallList(50, 900)

const asyncExecutor = (...args) => sleep(100).then(() => args)

const debounceSimulatorBasic = createAsyncWrapperSimulator({
  wrapper: fn => debounce(fn, 40),
  getCalls: calls,
  params: {title: 'Debounce sync'}
})
const debounceSimulatorAsync = createAsyncWrapperSimulator({
  executor: asyncExecutor,
  wrapper: fn => debounce(fn, 40),
  getCalls: calls,
  params: {title: 'Debounce async'}
})

const throttleSimulatorBasic = createAsyncWrapperSimulator({
  wrapper: fn => throttle(fn, 40),
  getCalls: calls,
  params: {title: 'Throttle sync'}
})
const throttleSimulatorAsync = createAsyncWrapperSimulator({
  executor: asyncExecutor,
  wrapper: fn => throttle(fn, 40),
  getCalls: calls,
  params: {title: 'Throttle sync'}
})
</script>

# Function wrapping
Function wrapping is a technique used to enhance or modify existing functions without altering their original implementation.

## Async behaviour modifying
### `debounce`
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
#### Simulation:
<Timeline :get-data="debounceSimulatorBasic" />
<Timeline :get-data="debounceSimulatorAsync" />

### `throttle`
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
#### Simulation:
<Timeline :get-data="throttleSimulatorBasic" />
<Timeline :get-data="throttleSimulatorAsync" />

## Result value modifying
### `negate`
Creates a function that negates the result of the provided `predicate` function.

Basic usage:
```ts
const isEven = n => n % 2 === 0
const isOdd = negate(isEven)

console.log(isEven(2)) // true
console.log(isOdd(2)) // false
```
Async usage:
```ts
async function checkValid(data) {
  const api = useApi()
  return await api.validateData(data)
}
const checkInvalid = negate(checkValid)

console.log(await checkValid(validData)) // true
console.log(await checkInvalid(validData)) // false
```

### `invert`
Creates a function that inverts the comparison result of the provided `compareFn` function.

Useful for invert sorting order.

```ts
const ascending = compareNumber
const descending = invert(ascending)

console.log([3, 1, 2].sort(ascending)) // [1, 2, 3]
console.log([3, 1, 2].sort(descending)) // [3, 2, 1]
```

## Other

### `once`
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
