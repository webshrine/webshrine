[@webshrine/stdlib](../globals.md) / FunctionKeys

# Type Alias: FunctionKeys\<T\>

> **FunctionKeys**\<`T`\>: `{ [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never }`\[keyof `T`\]

FunctionKeys

## Type Parameters

• **T** *extends* `object`

## Desc

Get union type of keys that are functions in object type `T`

## Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "setName | someFn"
  type Keys = FunctionKeys<MixedProps>;
```

## Defined in

node\_modules/.pnpm/utility-types@3.11.0/node\_modules/utility-types/dist/mapped-types.d.ts:68
