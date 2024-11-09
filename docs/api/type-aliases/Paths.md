[@webshrine/stdlib](../globals.md) / Paths

# Type Alias: Paths\<T\>

> **Paths**\<`T`\>: \{ \[K in keyof T\]: K extends string ? T\[K\] extends AnyObject ? \`$\{K\}.$\{IfString\<Paths\<T\[K\]\>\>\}\` : K : never \}\[keyof `T`\]

## Type Parameters

• **T** *extends* [`AnyObject`](AnyObject.md)

## Defined in

[packages/stdtyp/src/utilities/other.ts:38](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdtyp/src/utilities/other.ts#L38)
