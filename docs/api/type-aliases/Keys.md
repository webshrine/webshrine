[@webshrine/stdlib](../globals.md) / Keys

# Type Alias: Keys\<T\>

> **Keys**\<`T`\>: `NormalizeObjectKey`\<keyof `T`\>

Return all keys of `T`, converting number keys to strings and ignore Symbol keys
Instead of `keyof T`, returns only strings

## Type Parameters

• **T** *extends* [`AnyObject`](AnyObject.md)

## Defined in

[packages/stdtyp/src/utilities/other.ts:27](https://github.com/webshrine/webshrine/blob/8cedc3f2efca3108f17475a5ce8404715d0d24a5/packages/stdtyp/src/utilities/other.ts#L27)
