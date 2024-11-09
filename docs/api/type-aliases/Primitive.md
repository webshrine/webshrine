[@webshrine/stdlib](../globals.md) / Primitive

# Type Alias: Primitive

> **Primitive**: `string` \| `number` \| `bigint` \| `boolean` \| `symbol` \| `null` \| `undefined`

Primitive

## Desc

Type representing [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types in TypeScript: `string | number | bigint | boolean |  symbol | null | undefined`

## Example

```ts
type Various = number | string | object;

   // Expect: object
  type Cleaned = Exclude<Various, Primitive>
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/aliases-and-guards.d.ts:10
