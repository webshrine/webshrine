[@webshrine/stdlib](../globals.md) / PickByValue

# Type Alias: PickByValue\<T, ValueType\>

> **PickByValue**\<`T`, `ValueType`\>: `Pick`\<`T`, `{ [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }`\[keyof `T`\]\>

PickByValue

## Type Parameters

• **T**

• **ValueType**

## Desc

From `T` pick a set of properties by value matching `ValueType`.
Credit: [Piotr Lewandowski](https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c)

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; };

  // Expect: { req: number }
  type Props = PickByValue<Props, number>;
  // Expect: { req: number; reqUndef: number | undefined; }
  type Props = PickByValue<Props, number | undefined>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:159
