[@webshrine/stdlib](../globals.md) / MutableKeys

# Type Alias: MutableKeys\<T\>

> **MutableKeys**\<`T`\>: `{ [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P> }`\[keyof `T`\]

MutableKeys

## Type Parameters

• **T** *extends* `object`

## Desc

Get union type of keys that are mutable in object type `T`
Credit: Matt McCutchen
https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript

## Example

```ts
type Props = { readonly foo: string; bar: number };

  // Expect: "bar"
  type Keys = MutableKeys<Props>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:94
