[@webshrine/stdlib](../globals.md) / Subtract

# Type Alias: Subtract\<T, T1\>

> **Subtract**\<`T`, `T1`\>: `Pick`\<`T`, [`SetComplement`](SetComplement.md)\<keyof `T`, keyof `T1`\>\>

Subtract

## Type Parameters

• **T** *extends* `T1`

• **T1** *extends* `object`

## Desc

From `T` remove properties that exist in `T1` (`T1` has a subset of the properties of `T`)

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { name: string; visible: boolean; }
  type RestProps = Subtract<Props, DefaultProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:247
