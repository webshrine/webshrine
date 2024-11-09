[@webshrine/stdlib](../globals.md) / PickByValueExact

# Type Alias: PickByValueExact\<T, ValueType\>

> **PickByValueExact**\<`T`, `ValueType`\>: `Pick`\<`T`, `{ [Key in keyof T]-?: [ValueType] extends [T[Key]] ? [T[Key]] extends [ValueType] ? Key : never : never }`\[keyof `T`\]\>

PickByValueExact

## Type Parameters

• **T**

• **ValueType**

## Desc

From `T` pick a set of properties by value matching exact `ValueType`.

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; };

  // Expect: { req: number }
  type Props = PickByValueExact<Props, number>;
  // Expect: { reqUndef: number | undefined; }
  type Props = PickByValueExact<Props, number | undefined>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:173
