# Other packages
These tables provided to show associations of similar patterns

## [Lodash](https://www.npmjs.com/package/lodash)
| lodash          | @websrhine/stdlib                      |
| --------------- | -------------------------------------- |
| eq(...)         | areSameValueZero(...)                  |
| isEqual(...)    | areEqual(...)                          |
| omit(...)       | omit(clone(...))                       |
| pick(...)       | pick(clone(...))                       |
| cloneDeep(...)  | clone(...) \| copy(...)                |
| uniq(...)       | dedupeItems(...) \| dedupe(...)        |
| negate(...)     | negate(...)                            |
| times(...)      | times(...) | timesMap(...)             |
| clamp(...)      | clamp(...) | clampNumber(...)          |
| identity(...)   | through(...)                           |
<!-- |                 |                                        | -->

## [Utility types](https://www.npmjs.com/package/utility-types)
| utility-types   | @websrhine/stdlib \| @websrhine/stdtyp |
| --------------- | -------------------------------------- |
| DeepNonNullable | NonNullableDeep                        |
| DeepPartial     | PartialDeep                            |
| DeepReadonly    | ReadonlyDeep                           |
| DeepRequired    | RequiredDeep                           |
<!-- |                 |                                        | -->
