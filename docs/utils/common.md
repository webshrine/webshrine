# Common

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
const sorter = order(compareNumbers)

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
