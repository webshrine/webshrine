[@webshrine/stdlib](../globals.md) / Keys

# Type Alias: Keys\<T\>

> **Keys**\<`T`\>: `NormalizeObjectKey`\<keyof `T`\>

Return all keys of `T`, converting number keys to strings and ignore Symbol keys
Instead of `keyof T`, returns only strings

## Type Parameters

• **T** *extends* [`AnyObject`](AnyObject.md)

## Defined in

[packages/stdtyp/src/utilities/other.ts:27](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdtyp/src/utilities/other.ts#L27)
