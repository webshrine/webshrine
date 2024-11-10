[@webshrine/stdlib](../globals.md) / OmitDeep

# Type Alias: OmitDeep\<T, K\>

> **OmitDeep**\<`T`, `K`\>: `{ [P in Exclude<keyof T, K>]: T[P] extends AnyObject ? OmitDeep<T[P], K> : T[P] }`

## Type Parameters

• **T** *extends* [`AnyObject`](AnyObject.md)

• **K** *extends* `string`

## Defined in

[packages/stdtyp/src/utilities/other.ts:58](https://github.com/webshrine/webshrine/blob/8cedc3f2efca3108f17475a5ce8404715d0d24a5/packages/stdtyp/src/utilities/other.ts#L58)
