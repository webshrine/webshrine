[@webshrine/stdlib](../globals.md) / Required

# Type Alias: Required\<T, K\>

> **Required**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `Required`\<`Pick`\<`T`, `K`\>\>

Required

## Type Parameters

• **T** *extends* `object`

• **K** *extends* keyof `T` = keyof `T`

## Desc

From `T` make a set of properties by key `K` become required

## Example

```ts
type Props = {
     name?: string;
     age?: number;
     visible?: boolean;
   };

   // Expect: { name: string; age: number; visible: boolean; }
   type Props = Required<Props>;

   // Expect: { name?: string; age: number; visible: boolean; }
   type Props = Required<Props, 'age' | 'visible'>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:497
