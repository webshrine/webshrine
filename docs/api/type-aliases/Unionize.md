[@webshrine/stdlib](../globals.md) / Unionize

# Type Alias: Unionize\<T\>

> **Unionize**\<`T`\>: `{ [P in keyof T]: { [Q in P]: T[P] } }`\[keyof `T`\]

Unionize

## Type Parameters

• **T** *extends* `object`

## Desc

Disjoin object to form union of objects, each with single property

## Example

```ts
type Props = { name: string; age: number; visible: boolean };

  // Expect: { name: string; } | { age: number; } | { visible: boolean; }
  type UnionizedType = Unionize<Props>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:286
