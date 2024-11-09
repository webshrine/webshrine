[@webshrine/stdlib](../globals.md) / debounce

# Function: debounce()

## debounce(func, wait, options)

> **debounce**\<`T`\>(`func`, `wait`, `options`): `DebouncedFuncLeading`\<`T`\>

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
the last time the debounced function was invoked. The debounced function comes with a cancel method to
cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
calls to the debounced function return the result of the last func invocation.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
if the the debounced function is invoked more than once during the wait timeout.

See David Corbacho’s article for details over the differences between _.debounce and _.throttle.

### Type Parameters

• **T** *extends* (...`args`) => `any`

### Parameters

• **func**: `T`

The function to debounce.

• **wait**: `number`

The number of milliseconds to delay.

• **options**: `DebounceSettingsLeading`

The options object.

### Returns

`DebouncedFuncLeading`\<`T`\>

Returns the new debounced function.

### Defined in

[packages/stdlib/src/wrappers/index.ts:10](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdlib/src/wrappers/index.ts#L10)

## debounce(func, wait, options)

> **debounce**\<`T`\>(`func`, `wait`?, `options`?): `DebouncedFunc`\<`T`\>

### Type Parameters

• **T** *extends* (...`args`) => `any`

### Parameters

• **func**: `T`

• **wait?**: `number`

• **options?**: `DebounceSettings`

### Returns

`DebouncedFunc`\<`T`\>

### Defined in

[packages/stdlib/src/wrappers/index.ts:10](https://github.com/webshrine/webshrine/blob/0e16c5948921e0c95cce645760c4a8b0855b196b/packages/stdlib/src/wrappers/index.ts#L10)
