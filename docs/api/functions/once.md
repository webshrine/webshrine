[@webshrine/stdlib](../globals.md) / once

# Function: once()

> **once**\<`T`\>(`func`): `T`

Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
of the first call. The func is invoked with the this binding and arguments of the created function.

## Type Parameters

• **T** *extends* (...`args`) => `any`

## Parameters

• **func**: `T`

The function to restrict.

## Returns

`T`

Returns the new restricted function.

## Defined in

[packages/stdlib/src/wrappers/index.ts:13](https://github.com/webshrine/webshrine/blob/8cedc3f2efca3108f17475a5ce8404715d0d24a5/packages/stdlib/src/wrappers/index.ts#L13)
