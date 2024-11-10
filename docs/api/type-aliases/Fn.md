[@webshrine/stdlib](../globals.md) / Fn

# Type Alias: Fn\<Parameters, Result, Context\>

> **Fn**\<`Parameters`, `Result`, `Context`\>: `Context` *extends* `undefined` ? `Parameters` *extends* `any`[] ? (...`parameters`) => `Result` : () => `Result` : `Parameters` *extends* `any`[] ? (`this`, ...`parameters`) => `Result` : (`this`) => `Result`

Most general type of function,
matches any types of functions if generics wasn't defined

## Type Parameters

• **Parameters** *extends* [`AnyArrayOptional`](AnyArrayOptional.md) = [`AnyArrayOptional`](AnyArrayOptional.md)

• **Result** *extends* `any` \| `void` = `void`

• **Context** = `undefined`

## Defined in

[packages/stdtyp/src/utilities/fn.ts:10](https://github.com/webshrine/webshrine/blob/8cedc3f2efca3108f17475a5ce8404715d0d24a5/packages/stdtyp/src/utilities/fn.ts#L10)
