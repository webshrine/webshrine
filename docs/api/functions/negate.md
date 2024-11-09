[@webshrine/stdlib](../globals.md) / negate

# Function: negate()

> **negate**\<`T`\>(`predicate`): (...`args`) => `boolean`

Creates a function that negates the result of the predicate func. The func predicate is invoked with
the this binding and arguments of the created function.

## Type Parameters

• **T** *extends* `any`[]

## Parameters

• **predicate**

The predicate to negate.

## Returns

`Function`

Returns the new function.

### Parameters

• ...**args**: `T`

### Returns

`boolean`

## Defined in

[packages/stdlib/src/wrappers/index.ts:12](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdlib/src/wrappers/index.ts#L12)
