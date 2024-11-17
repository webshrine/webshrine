# Error handling
[Source lib](https://github.com/TheLucifurry/cope)

## Basic
Error handling using try-catch syntax is pretty weird,
because it adds an extra block nesting usually makes you to
use let instead of const keyword and spend more lines of code, than it needed

There is a simple util to avoid such cons:
```ts
const [result, error] = cope(() => JSON.parse(UNRELIABLE_JSON_STRING))
```
It's a lot simpler, than:
```ts
let result: SomeData | undefined // [!code error]
try { // [!code error]
  result = JSON.parse(UNRELIABLE_JSON_STRING) // [!code error]
} // [!code error]
catch (e) { /* ... */ } // [!code error]
```

The util inspired by error handling in Golang,
and also makes code to be more obvious in complex error handling

```ts
const [response, fetchError] = await cope(() => api.loadData())
if (fetchError)
  alert('server cant be reached or request is broken')

const [data, parsingError] = await cope(() => response.json())
if (parsingError)
  alert('failed to parse received data')
```

## Examples
### Default value
You can use native syntax
```ts
const [result = 'default value', syncParseErr] = cope(/* ... */)
result // is always defined
```

### Force execution
You can use this util just to ignoring execution:
```ts
// Some preparing execution
cope(() => window.querySelector('#dynamic-element').scrollTo(123, 0))
// Some guaranteed executions
```
