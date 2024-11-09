[@webshrine/stdlib](../globals.md) / Falsy

# Type Alias: Falsy

> **Falsy**: `false` \| `""` \| `0` \| `null` \| `undefined`

Falsy

## Desc

Type representing falsy values in TypeScript: `false | "" | 0 | null | undefined`

## Example

```ts
type Various = 'a' | 'b' | undefined | false;

  // Expect: "a" | "b"
  Exclude<Various, Falsy>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/aliases-and-guards.d.ts:20
