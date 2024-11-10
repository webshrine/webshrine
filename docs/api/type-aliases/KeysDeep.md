[@webshrine/stdlib](../globals.md) / KeysDeep

# Type Alias: KeysDeep\<T, Depth\>

> **KeysDeep**\<`T`, `Depth`\>: `Depth` *extends* `-1` ? `never` : \{ \[K in keyof T\]: NormalizeObjectKey\<K\> \| (T\[K\] extends AnyObject ? KeysDeep\<T\[K\], Decrement\[Depth\]\> : never) \}\[keyof `T`\]

The same as `Keys<T>`, but recursively for all nested objects

## Type Parameters

• **T** *extends* [`AnyObject`](AnyObject.md)

• **Depth** *extends* `number` = `20`

## Defined in

[packages/stdtyp/src/utilities/other.ts:30](https://github.com/webshrine/webshrine/blob/8cedc3f2efca3108f17475a5ce8404715d0d24a5/packages/stdtyp/src/utilities/other.ts#L30)
