[@webshrine/stdlib](../globals.md) / Intersection

# Type Alias: Intersection\<T, U\>

> **Intersection**\<`T`, `U`\>: `Pick`\<`T`, `Extract`\<keyof `T`, keyof `U`\> & `Extract`\<keyof `U`, keyof `T`\>\>

Intersection

## Type Parameters

• **T** *extends* `object`

• **U** *extends* `object`

## Desc

From `T` pick properties that exist in `U`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { age: number; }
  type DuplicateProps = Intersection<Props, DefaultProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:225
