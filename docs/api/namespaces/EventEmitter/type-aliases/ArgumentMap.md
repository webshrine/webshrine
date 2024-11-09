[@webshrine/stdlib](../../../globals.md) / [EventEmitter](../index.md) / ArgumentMap

# Type Alias: ArgumentMap\<T\>

> **ArgumentMap**\<`T`\>: `{ [K in keyof T]: T[K] extends Function ? Parameters<T[K]> : T[K] extends any[] ? T[K] : any[] }`

## Type Parameters

• **T** *extends* `object`

## Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:109
