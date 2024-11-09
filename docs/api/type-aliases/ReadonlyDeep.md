[@webshrine/stdlib](../globals.md) / ReadonlyDeep

# Type Alias: ReadonlyDeep\<T\>

> **ReadonlyDeep**\<`T`\>: `T` *extends* (...`args`) => `any` \| [`Primitive`](Primitive.md) ? `T` : `T` *extends* `_DeepReadonlyArray`\<infer U\> ? `_DeepReadonlyArray`\<`U`\> : `T` *extends* `_DeepReadonlyObject`\<infer V\> ? `_DeepReadonlyObject`\<`V`\> : `T`

DeepReadonly

## Type Parameters

• **T**

## Desc

Readonly that works for deeply nested structure

## Example

```ts
// Expect: {
  //   readonly first: {
  //     readonly second: {
  //       readonly name: string;
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
  type ReadonlyNestedProps = DeepReadonly<NestedProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:319
