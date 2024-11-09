[@webshrine/stdlib](../globals.md) / throttle

# Function: throttle()

## throttle(func, wait, options)

> **throttle**\<`T`\>(`func`, `wait`?, `options`?): `DebouncedFuncLeading`\<`T`\>

Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
the the throttled function is invoked more than once during the wait timeout.

### Type Parameters

• **T** *extends* (...`args`) => `any`

### Parameters

• **func**: `T`

The function to throttle.

• **wait?**: `number`

The number of milliseconds to throttle invocations to.

• **options?**: `ThrottleSettingsLeading`

The options object.

### Returns

`DebouncedFuncLeading`\<`T`\>

Returns the new throttled function.

### Defined in

[packages/stdlib/src/wrappers/index.ts:14](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdlib/src/wrappers/index.ts#L14)

## throttle(func, wait, options)

> **throttle**\<`T`\>(`func`, `wait`?, `options`?): `DebouncedFunc`\<`T`\>

### Type Parameters

• **T** *extends* (...`args`) => `any`

### Parameters

• **func**: `T`

• **wait?**: `number`

• **options?**: `ThrottleSettings`

### Returns

`DebouncedFunc`\<`T`\>

### Defined in

[packages/stdlib/src/wrappers/index.ts:14](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdlib/src/wrappers/index.ts#L14)
