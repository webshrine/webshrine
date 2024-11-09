[@webshrine/stdlib](../globals.md) / Diff

# Type Alias: Diff\<T, U\>

> **Diff**\<`T`, `U`\>: `Pick`\<`T`, [`SetDifference`](SetDifference.md)\<keyof `T`, keyof `U`\>\>

Diff

## Type Parameters

• **T** *extends* `object`

• **U** *extends* `object`

## Desc

From `T` remove properties that exist in `U`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { name: string; visible: boolean; }
  type DiffProps = Diff<Props, DefaultProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:236
