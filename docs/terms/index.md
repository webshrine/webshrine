# Terms

## Abbreviations
- `fn` - function

## Common
- `Collection` - array or object of items
- `Numeric` - unified type of any primitive number
- `Transformer` - fn kind, that changes received value interpretation
- `Wrapper` - fn kind, that wraps received callback and extends logics
- `Path` - keys chain, united by dots, that addresses nested collection item position
- `Key` - keys of object
- `Collection key` - keys of collection
- `Method` - fn with context
- `Nullary (fn)` - fn without parameters
- `Predicate (fn)` - fn with logical result
- `Procedure (fn)` - fn without result
- `Iterate (fn)` - iteration fn
<!-- - `Brand` - asd -->

## Naming
### Prefixes
- `Any~` - type category, that aliases most general types
- `Maybe~` - type category, that optionally wraps received type
- `Fn~` - fn type category

### Postfixes
- `~By` - fn, that accepts callback to customize logics
- `~Deep` - fn, that executes recursively
- `~Strict` - fn, that have stricter typings
- `~Item` - fn, that iterates items of array
- `~Value` - fn, that iterates items of object
