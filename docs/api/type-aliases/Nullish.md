[@webshrine/stdlib](../globals.md) / Nullish

# Type Alias: Nullish

> **Nullish**: `null` \| `undefined`

Nullish

## Desc

Type representing [nullish values][https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing] in TypeScript: `null | undefined`

## Example

```ts
type Various = 'a' | 'b' | undefined;

  // Expect: "a" | "b"
  Exclude<Various, Nullish>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/aliases-and-guards.d.ts:30
