[@webshrine/stdlib](../globals.md) / SymmetricDifference

# Type Alias: SymmetricDifference\<A, B\>

> **SymmetricDifference**\<`A`, `B`\>: [`SetDifference`](SetDifference.md)\<`A` \| `B`, `A` & `B`\>

SymmetricDifference

## Type Parameters

• **A**

• **B**

## Desc

Set difference of union and intersection of given union types `A` and `B`

## Example

```ts
// Expect: "1" | "4"
  SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:43
