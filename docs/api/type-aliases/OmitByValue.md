[@webshrine/stdlib](../globals.md) / OmitByValue

# Type Alias: OmitByValue\<T, ValueType\>

> **OmitByValue**\<`T`, `ValueType`\>: `Pick`\<`T`, `{ [Key in keyof T]-?: T[Key] extends ValueType ? never : Key }`\[keyof `T`\]\>

OmitByValue

## Type Parameters

• **T**

• **ValueType**

## Desc

From `T` remove a set of properties by value matching `ValueType`.
Credit: [Piotr Lewandowski](https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c)

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; };

  // Expect: { reqUndef: number | undefined; opt?: string; }
  type Props = OmitByValue<Props, number>;
  // Expect: { opt?: string; }
  type Props = OmitByValue<Props, number | undefined>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:198
