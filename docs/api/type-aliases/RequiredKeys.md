[@webshrine/stdlib](../globals.md) / RequiredKeys

# Type Alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\>: `{ [K in keyof T]-?: Object extends Pick<T, K> ? never : K }`\[keyof `T`\]

RequiredKeys

## Type Parameters

• **T**

## Desc

Get union type of keys that are required in object type `T`

## See

https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };

  // Expect: "req" | "reqUndef"
  type Keys = RequiredKeys<Props>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:131
