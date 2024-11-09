[@webshrine/stdlib](../globals.md) / SetComplement

# Type Alias: SetComplement\<A, A1\>

> **SetComplement**\<`A`, `A1`\>: [`SetDifference`](SetDifference.md)\<`A`, `A1`\>

SetComplement

## Type Parameters

• **A**

• **A1** *extends* `A`

## Desc

Set complement of given union types `A` and (it's subset) `A1`

## Example

```ts
// Expect: "1"
  SetComplement<'1' | '2' | '3', '2' | '3'>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:35
