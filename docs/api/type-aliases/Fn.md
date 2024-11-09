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

[packages/stdtyp/src/utilities/fn.ts:10](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdtyp/src/utilities/fn.ts#L10)
