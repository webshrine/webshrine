[@webshrine/stdlib](../globals.md) / UnionToIntersection

# Type Alias: UnionToIntersection\<U\>

> **UnionToIntersection**\<`U`\>: `U` *extends* `any` ? (`k`) => `void` : `never` *extends* (`k`) => `void` ? `I` : `never`

UnionToIntersection

## Type Parameters

• **U**

## Desc

Get intersection type given union type `U`
Credit: jcalz

## See

https://stackoverflow.com/a/50375286/7381355

## Example

```ts
// Expect: { name: string } & { age: number } & { visible: boolean }
  UnionToIntersection<{ name: string } | { age: number } | { visible: boolean }>
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:507
