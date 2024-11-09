[@webshrine/stdlib](../globals.md) / PartialDeep

# Type Alias: PartialDeep\<T\>

> **PartialDeep**\<`T`\>: `{ [P in keyof T]?: _DeepPartial<T[P]> }`

DeepPartial

## Type Parameters

• **T**

## Desc

Partial that works for deeply nested structure

## Example

```ts
// Expect: {
  //   first?: {
  //     second?: {
  //       name?: string;
  //     };
  //   };
  // }
  type NestedProps = {
    first: {
      second: {
        name: string;
      };
    };
  };
  type PartialNestedProps = DeepPartial<NestedProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:404
