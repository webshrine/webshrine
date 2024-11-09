[@webshrine/stdlib](../globals.md) / SetIntersection

# Type Alias: SetIntersection\<A, B\>

> **SetIntersection**\<`A`, `B`\>: `A` *extends* `B` ? `A` : `never`

SetIntersection (same as Extract)

## Type Parameters

• **A**

• **B**

## Desc

Set intersection of given union types `A` and `B`

## Example

```ts
// Expect: "2" | "3"
  SetIntersection<'1' | '2' | '3', '2' | '3' | '4'>;

  // Expect: () => void
  SetIntersection<string | number | (() => void), Function>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:16
