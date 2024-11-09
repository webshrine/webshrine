[@webshrine/stdlib](../globals.md) / NonNullableDeep

# Type Alias: NonNullableDeep\<T\>

> **NonNullableDeep**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `any`[] ? `_DeepNonNullableArray`\<`T`\[`number`\]\> : `T` *extends* `object` ? `_DeepNonNullableObject`\<`T`\> : `T`

DeepNonNullable

## Type Parameters

• **T**

## Desc

NonNullable that works for deeply nested structure

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
    first?: null | {
      second?: null | {
        name?: string | null |
        undefined;
      };
    };
  };
  type RequiredNestedProps = DeepNonNullable<NestedProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:376
