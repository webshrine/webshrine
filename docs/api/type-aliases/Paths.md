[@webshrine/stdlib](../globals.md) / Paths

# Type Alias: Paths\<T\>

> **Paths**\<`T`\>: \{ \[K in keyof T\]: K extends string ? T\[K\] extends AnyObject ? \`$\{K\}.$\{IfString\<Paths\<T\[K\]\>\>\}\` : K : never \}\[keyof `T`\]

## Type Parameters

• **T** *extends* [`AnyObject`](AnyObject.md)

## Defined in

[packages/stdtyp/src/utilities/other.ts:38](https://github.com/webshrine/webshrine/blob/8cedc3f2efca3108f17475a5ce8404715d0d24a5/packages/stdtyp/src/utilities/other.ts#L38)
