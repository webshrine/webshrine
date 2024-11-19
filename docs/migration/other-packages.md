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

## Type-utilities
[NPM](https://www.npmjs.com/package/utility-types)
| type-utilities  | @websrhine/stdlib \| @websrhine/stdtyp |
| --------------- | -------------------------------------- |
| DeepNonNullable | NonNullableDeep                        |
| DeepPartial     | PartialDeep                            |
| DeepReadonly    | ReadonlyDeep                           |
| DeepRequired    | RequiredDeep                           |
