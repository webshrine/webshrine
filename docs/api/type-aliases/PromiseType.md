[@webshrine/stdlib](../globals.md) / PromiseType

# Type Alias: PromiseType\<T\>

> **PromiseType**\<`T`\>: `T` *extends* `Promise`\<infer U\> ? `U` : `never`

PromiseType

## Type Parameters

• **T** *extends* `Promise`\<`any`\>

## Desc

Obtain Promise resolve type

## Example

```ts
// Expect: string;
  type Response = PromiseType<Promise<string>>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:298
