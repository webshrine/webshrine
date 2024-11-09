[@webshrine/stdlib](../globals.md) / ReadonlyKeys

# Type Alias: ReadonlyKeys\<T\>

> **ReadonlyKeys**\<`T`\>: `{ [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P> }`\[keyof `T`\]

ReadonlyKeys

## Type Parameters

• **T** *extends* `object`

## Desc

Get union type of keys that are readonly in object type `T`
Credit: Matt McCutchen
https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript

## Example

```ts
type Props = { readonly foo: string; bar: number };

  // Expect: "foo"
  type Keys = ReadonlyKeys<Props>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:113
