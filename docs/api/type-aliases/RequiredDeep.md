[@webshrine/stdlib](../globals.md) / RequiredDeep

# Type Alias: RequiredDeep\<T\>

> **RequiredDeep**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `any`[] ? `_DeepRequiredArray`\<`T`\[`number`\]\> : `T` *extends* `object` ? `_DeepRequiredObject`\<`T`\> : `T`

DeepRequired

## Type Parameters

• **T**

## Desc

Required that works for deeply nested structure

## Example

```ts
// Expect: {
  //   first: {
  //     second: {
  //       name: string;
  //     };
  //   };
  // }
  type NestedProps = {
    first?: {
      second?: {
        name?: string;
      };
    };
  };
  type RequiredNestedProps = DeepRequired<NestedProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:347
