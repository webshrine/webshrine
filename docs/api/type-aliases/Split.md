[@webshrine/stdlib](../globals.md) / Split

# Type Alias: Split\<T, Separator\>

> **Split**\<`T`, `Separator`\>: `string` *extends* `T` ? `string`[] : `T` *extends* `""` ? [] : `T` *extends* \`$\{infer T\}$\{Separator\}$\{infer U\}\` ? [`T`, `...Split<U, Separator>`] : [`T`]

## Type Parameters

• **T** *extends* `string`

• **Separator** *extends* `string`

## Defined in

[packages/stdtyp/src/utilities/other.ts:62](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdtyp/src/utilities/other.ts#L62)
