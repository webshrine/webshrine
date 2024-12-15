# Guards
## Overview
Guards are functions that are used to check if a value meets certain criteria. They are often used in conjunction with other functions or methods to ensure that the input is valid before proceeding.

Satisfies type <ApiLink name="FnGuard"/>

## Basic guards
These guards filters the only one simple type
- `isNumber` - the same as `typeof value === 'number'`
- `isString` - the same as `typeof value === 'string'`
- `isBoolean` - the same as `typeof value === 'boolean'`
- `isSymbol` - the same as `typeof value === 'symbol'`
- `isBigInt` - the same as `typeof value === 'bigint'`
- `isArray` - the same as `Array.isArray(value)`
- `isObject` - checks if the value is an object and not null
<!-- - `isFunction` - -->

## Aliases guards
These guards filters the set of types
- `isFalsy` - checks if the value is falsy (false, 0, '', null, undefined)
- `isNullish` - checks if the value is null or undefined
- `isNumeric` - checks if the value is a number or bigint
- `isCollection` - checks if the value is an array or object
- `isPrimitive` - checks if the value is a primitive type (number, string, boolean, symbol, bigint, null, undefined)

<!-- ## Instance guards
`isDate`
`isPlainObject` -->
