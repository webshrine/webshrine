[@webshrine/stdlib](../globals.md) / SetDifference

# Type Alias: SetDifference\<A, B\>

> **SetDifference**\<`A`, `B`\>: `A` *extends* `B` ? `never` : `A`

SetDifference (same as Exclude)

## Type Parameters

• **A**

• **B**

## Desc

Set difference of given union types `A` and `B`

## Example

```ts
// Expect: "1"
  SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;

  // Expect: string | number
  SetDifference<string | number | (() => void), Function>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:27
