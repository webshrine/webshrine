[@webshrine/stdlib](../globals.md) / Split

# Type Alias: Split\<T, Separator\>

> **Split**\<`T`, `Separator`\>: `string` *extends* `T` ? `string`[] : `T` *extends* `""` ? [] : `T` *extends* \`$\{infer T\}$\{Separator\}$\{infer U\}\` ? [`T`, `...Split<U, Separator>`] : [`T`]

## Type Parameters

• **T** *extends* `string`

• **Separator** *extends* `string`

## Defined in

[packages/stdtyp/src/utilities/other.ts:62](https://github.com/webshrine/webshrine/blob/8cedc3f2efca3108f17475a5ce8404715d0d24a5/packages/stdtyp/src/utilities/other.ts#L62)
