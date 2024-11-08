[@webshrine/stdlib](../globals.md) / mixin

# Function: mixin()

> **mixin**\<`Constructors`, `MixedConstructorParams`\>(`constructors`): `Constructors` *extends* `MixinArray` ? [`Constructor`](../type-aliases/Constructor.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`Mixin`](../classes/Mixin.md) \| `InstanceType`\<`Constructors`\[`number`\]\>\>, [`MixedConstructorParamsFromArray`\<`Constructors`\>]\> : `Constructors` *extends* `MixinRecord` ? [`Constructor`](../type-aliases/Constructor.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`Mixin`](../classes/Mixin.md) \| `InstanceType`\<[`ValuesType`](../type-aliases/ValuesType.md)\<`Constructors`\>\>\>, [`MixedConstructorParams`]\> : `never`

## Type Parameters

• **Constructors** *extends* `MixinArray` \| `MixinRecord`

• **MixedConstructorParams** = `Constructors` *extends* `MixinArray` ? `MixedConstructorParamsFromArray`\<`Constructors`\<`Constructors`\>\> : `Constructors` *extends* `MixinRecord` ? `MixedConstructorParamsFromRecord`\<`Constructors`\<`Constructors`\>\> : `never`

## Parameters

• **constructors**: `Constructors`

## Returns

`Constructors` *extends* `MixinArray` ? [`Constructor`](../type-aliases/Constructor.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`Mixin`](../classes/Mixin.md) \| `InstanceType`\<`Constructors`\[`number`\]\>\>, [`MixedConstructorParamsFromArray`\<`Constructors`\>]\> : `Constructors` *extends* `MixinRecord` ? [`Constructor`](../type-aliases/Constructor.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`Mixin`](../classes/Mixin.md) \| `InstanceType`\<[`ValuesType`](../type-aliases/ValuesType.md)\<`Constructors`\>\>\>, [`MixedConstructorParams`]\> : `never`

## Defined in

[packages/stdlib/src/utils/mixin.ts:54](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdlib/src/utils/mixin.ts#L54)
