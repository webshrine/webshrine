[@webshrine/stdlib](../globals.md) / NonFunctionKeys

# Type Alias: NonFunctionKeys\<T\>

> **NonFunctionKeys**\<`T`\>: `{ [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K }`\[keyof `T`\]

NonFunctionKeys

## Type Parameters

• **T** *extends* `object`

## Desc

Get union type of keys that are non-functions in object type `T`

## Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "name | someKey"
  type Keys = NonFunctionKeys<MixedProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:80
