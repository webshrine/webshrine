# Associations
These tables provided to show associations of similar patterns,
you don't have to migrate from them

## [Native](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
| Native                                            | @websrhine/stdlib                             |
| ------------------------------------------------- | --------------------------------------------- |
| a == b                                            | areSimilar(a, b)                              |
| a === b                                           | areSame(a, b)                                 |
| arr.forEach(...)                                  | forItems(arr, ...) \| forEach(arr, ...)       |
| for (const [k, v] of Object.entries(obj)) {...}   | forValues(obj, ...) \| forEach(obj, ...)      |
| structuredClone(data)                             | clone(data)                                   |
| obj.hasOwnProperty(key)                           | hasOwn(obj, key)                              |

## [Jest](https://www.npmjs.com/package/jest)
| jest                  | @websrhine/stdlib                |
| --------------------- | -------------------------------- |
| expect(a).toEqual(b)     | areEqual(a, b)              |
<!-- |                       |                                  | -->
