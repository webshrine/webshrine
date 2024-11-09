[@webshrine/stdlib](../globals.md) / Omit

# Type Alias: Omit\<T, K\>

> **Omit**\<`T`, `K`\>: `Pick`\<`T`, [`SetDifference`](SetDifference.md)\<keyof `T`, `K`\>\>

Omit (complements Pick)

## Type Parameters

• **T**

• **K** *extends* keyof `any`

## Desc

From `T` remove a set of properties by key `K`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };

  // Expect: { name: string; visible: boolean; }
  type Props = Omit<Props, 'age'>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:185
