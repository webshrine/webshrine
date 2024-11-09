[@webshrine/stdlib](../globals.md) / OptionalKeys

# Type Alias: OptionalKeys\<T\>

> **OptionalKeys**\<`T`\>: `{ [K in keyof T]-?: Object extends Pick<T, K> ? K : never }`\[keyof `T`\]

OptionalKeys

## Type Parameters

• **T**

## Desc

Get union type of keys that are optional in object type `T`

## See

https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };

  // Expect: "opt" | "optUndef"
  type Keys = OptionalKeys<Props>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:144
