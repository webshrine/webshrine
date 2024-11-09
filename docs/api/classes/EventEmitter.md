[@webshrine/stdlib](../globals.md) / EventEmitter

# Class: EventEmitter\<EventTypes, Context\>

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Type Parameters

• **EventTypes** *extends* [`ValidEventTypes`](../namespaces/EventEmitter/type-aliases/ValidEventTypes.md) = `string` \| `symbol`

• **Context** *extends* `any` = `any`

## Constructors

### new EventEmitter()

> **new EventEmitter**\<`EventTypes`, `Context`\>(): [`EventEmitter`](EventEmitter.md)\<`EventTypes`, `Context`\>

#### Returns

[`EventEmitter`](EventEmitter.md)\<`EventTypes`, `Context`\>

## Properties

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:9

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn**: [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

• **context?**: `Context`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:45

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• ...**args**: `Parameters`\<[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>\>

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): [`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

[`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>[]

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:15

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: [`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`number`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:27

***

### listeners()

> **listeners**\<`T`\>(`event`): [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

#### Returns

[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>[]

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:20

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn?**: [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

• **context?**: `Context`

• **once?**: `boolean`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:69

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn**: [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

• **context?**: `Context`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:40

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn**: [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

• **context?**: `Context`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:54

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: [`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:79

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

• **event**: `T`

• **fn?**: [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

• **context?**: `Context`

• **once?**: `boolean`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:63
