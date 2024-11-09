[@webshrine/stdlib](../globals.md) / Assign

# Type Alias: Assign\<T, U, I\>

> **Assign**\<`T`, `U`, `I`\>: `Pick`\<`I`, keyof `I`\>

Assign

## Type Parameters

• **T** *extends* `object`

• **U** *extends* `object`

• **I** = [`Diff`](Diff.md)\<`T`, `U`\> & [`Intersection`](Intersection.md)\<`U`, `T`\> & [`Diff`](Diff.md)\<`U`, `T`\>

## Desc

From `U` assign properties to `T` (just like object assign)

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type NewProps = { age: string; other: string };

  // Expect: { name: string; age: number; visible: boolean; other: string; }
  type ExtendedProps = Assign<Props, NewProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:269
