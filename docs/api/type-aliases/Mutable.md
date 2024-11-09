[@webshrine/stdlib](../globals.md) / Mutable

# Type Alias: Mutable\<T\>

> **Mutable**\<`T`\>: `{ -readonly [P in keyof T]: T[P] }`

Mutable

## Type Parameters

• **T**

## Desc

From `T` make all properties become mutable

## Example

```ts
type Props = {
     readonly name: string;
     readonly age: number;
     readonly visible: boolean;
   };

   // Expect: { name: string; age: number; visible: boolean; }
   Mutable<Props>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:521
