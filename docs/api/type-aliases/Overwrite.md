[@webshrine/stdlib](../globals.md) / Overwrite

# Type Alias: Overwrite\<T, U, I\>

> **Overwrite**\<`T`, `U`, `I`\>: `Pick`\<`I`, keyof `I`\>

Overwrite

## Type Parameters

• **T** *extends* `object`

• **U** *extends* `object`

• **I** = [`Diff`](Diff.md)\<`T`, `U`\> & [`Intersection`](Intersection.md)\<`U`, `T`\>

## Desc

From `U` overwrite properties to `T`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type NewProps = { age: string; other: string };

  // Expect: { name: string; age: string; visible: boolean; }
  type ReplacedProps = Overwrite<Props, NewProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:258
