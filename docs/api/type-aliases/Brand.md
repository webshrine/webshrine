[@webshrine/stdlib](../globals.md) / Brand

# Type Alias: Brand\<T, U\>

> **Brand**\<`T`, `U`\>: `T` & `object`

Brand

## Type declaration

### \_\_brand

> **\_\_brand**: `U`

## Type Parameters

• **T**

• **U**

## Desc

Define nominal type of U based on type of T. Similar to Opaque types in Flow.

## Example

```ts
type USD = Brand<number, "USD">
  type EUR = Brand<number, "EUR">

  const tax = 5 as USD;
  const usd = 10 as USD;
  const eur = 10 as EUR;

  function gross(net: USD): USD {
    return (net + tax) as USD;
  }

  // Expect: No compile error
  gross(usd);
  // Expect: Compile error (Type '"EUR"' is not assignable to type '"USD"'.)
  gross(eur);
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:432
