# 📝 Code style

## Rules

#### FnCompare
- must return -1 | 0 | 1

#### FnGuard
- has one parameter
- type must be assigned via "as" keyword (e.g. `(arrow-function) as FnGuard<MyType>`)

#### FnMatch
- has two parameter

#### FnTransform
- must return value

#### FnFormat
- the same as FnTransform, but may return null as a result of failed argument transformation

## Namings

#### FnGuard
- naming pattern 'is(Name)' (e.g `isPrimitive`)

#### FnMatch
- naming pattern 'are(Name)' (e.g `areEqual`)

#### FnReduce
- naming pattern 'reduce(Source)To(Target)' (e.g `reduceNumbersToSumNumber`)
- if return one of collection items, must be named by `find(Target)` (e.g. `findMaxNumber`)

#### FnCompare
- naming pattern 'compare(Name)' (e.g `compareNumbers`)

<!-- #### FnFormat
- naming pattern 'to(Name)' (e.g `toCamelCase`) -->

#### FnTransform
- if it's a function, that executes recursively, should be named by '(name)Deep' pattern (e.g `omitDeep`)
- if it's a function, that accepts executor callback, should be named by '(name)By' pattern (e.g `omitBy`)
- Doesn't have to mutate received data
<!-- - if it's a cloning method, should be named by 'to(Name)ed' pattern (e.g `Array.prototype.toSpliced()`) -->
