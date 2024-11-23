# Migration

## Lodash
[NPM](https://www.npmjs.com/package/lodash)
| lodash          | @websrhine/stdlib                      |
| --------------- | -------------------------------------- |
| eq(...)         | areSame(...)                           |
| isEqual(...)    | areEqual(...)                          |
| omit(...)       | omit(clone(...))                       |
| pick(...)       | pick(clone(...))                       |
| cloneDeep(...)  | clone(...) \| copy(...)                |
| uniq(...)       | uniqueItems(...) \| unique(...)        |
<!-- |                 |                                        | -->

## Type-utilities
[NPM](https://www.npmjs.com/package/utility-types)
| type-utilities  | @websrhine/stdlib \| @websrhine/stdtyp |
| --------------- | -------------------------------------- |
| DeepNonNullable | NonNullableDeep                        |
| DeepPartial     | PartialDeep                            |
| DeepReadonly    | ReadonlyDeep                           |
| DeepRequired    | RequiredDeep                           |
<!-- |                 |                                        | -->

## Jest
[NPM](https://www.npmjs.com/package/jest)
| jest                  | @websrhine/stdlib                |
| --------------------- | -------------------------------- |
| expect(a).toBe(b)     | areSameStrict(a, b)              |
<!-- |                       |                                  | -->
::: warning
You don't have to migrate from `jest`,
this table provided to show associations in similar patterns
:::
