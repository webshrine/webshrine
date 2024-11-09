[@webshrine/stdlib](../globals.md) / OmitDeep

# Type Alias: OmitDeep\<T, K\>

> **OmitDeep**\<`T`, `K`\>: `{ [P in Exclude<keyof T, K>]: T[P] extends AnyObject ? OmitDeep<T[P], K> : T[P] }`

## Type Parameters

• **T** *extends* [`AnyObject`](AnyObject.md)

• **K** *extends* `string`

## Defined in

[packages/stdtyp/src/utilities/other.ts:58](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdtyp/src/utilities/other.ts#L58)
