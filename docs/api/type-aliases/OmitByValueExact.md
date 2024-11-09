[@webshrine/stdlib](../globals.md) / OmitByValueExact

# Type Alias: OmitByValueExact\<T, ValueType\>

> **OmitByValueExact**\<`T`, `ValueType`\>: `Pick`\<`T`, `{ [Key in keyof T]-?: [ValueType] extends [T[Key]] ? [T[Key]] extends [ValueType] ? never : Key : Key }`\[keyof `T`\]\>

OmitByValueExact

## Type Parameters

• **T**

• **ValueType**

## Desc

From `T` remove a set of properties by value matching exact `ValueType`.

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; };

  // Expect: { reqUndef: number | undefined; opt?: string; }
  type Props = OmitByValueExact<Props, number>;
  // Expect: { req: number; opt?: string }
  type Props = OmitByValueExact<Props, number | undefined>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:212
