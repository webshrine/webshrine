[@webshrine/stdlib](../globals.md) / NonUndefined

# Type Alias: NonUndefined\<A\>

> **NonUndefined**\<`A`\>: `A` *extends* `undefined` ? `never` : `A`

NonUndefined

## Type Parameters

• **A**

## Desc

Exclude undefined from set `A`

## Example

```ts
// Expect: "string | null"
  SymmetricDifference<string | null | undefined>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:51
