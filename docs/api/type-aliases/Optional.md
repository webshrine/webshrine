[@webshrine/stdlib](../globals.md) / Optional

# Type Alias: Optional\<T, K\>

> **Optional**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `Partial`\<`Pick`\<`T`, `K`\>\>

Optional

## Type Parameters

• **T** *extends* `object`

• **K** *extends* keyof `T` = keyof `T`

## Desc

From `T` make a set of properties by key `K` become optional

## Example

```ts
type Props = {
     name: string;
     age: number;
     visible: boolean;
   };

   // Expect: { name?: string; age?: number; visible?: boolean; }
   type Props = Optional<Props>;

   // Expect: { name: string; age?: number; visible?: boolean; }
   type Props = Optional<Props, 'age' | 'visible'>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:451
