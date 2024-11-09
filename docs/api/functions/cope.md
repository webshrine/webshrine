[@webshrine/stdlib](../globals.md) / cope

# Function: cope()

> **cope**\<`Throws`, `Executor`, `Result`\>(`executor`): `Result` *extends* `Promise`\<`any`\> ? `Promise`\<[`CopeResult`](../type-aliases/CopeResult.md)\<`Awaited`\<`Result`\>, `Throws`\>\> : [`CopeResult`](../type-aliases/CopeResult.md)\<`Result`, `Throws`\>

Golang-like error handling util

## Type Parameters

• **Throws** *extends* `Error` = `Error`

• **Executor** *extends* `FnNullary` \| `FnAsyncNullary` = `FnNullary` \| `FnAsyncNullary`

• **Result** *extends* `any` = `ReturnType`\<`Executor`\>

## Parameters

• **executor**: `Executor`

## Returns

`Result` *extends* `Promise`\<`any`\> ? `Promise`\<[`CopeResult`](../type-aliases/CopeResult.md)\<`Awaited`\<`Result`\>, `Throws`\>\> : [`CopeResult`](../type-aliases/CopeResult.md)\<`Result`, `Throws`\>

## Examples

## Defined in

node\_modules/.pnpm/cope@1.0.9\_typescript@5.6.2/node\_modules/cope/index.d.ts:31
