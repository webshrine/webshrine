[@webshrine/stdlib](../../../globals.md) / [EventEmitter](../index.md) / ValidEventTypes

# Type Alias: ValidEventTypes

> **ValidEventTypes**: `string` \| `symbol` \| `object`

`object` should be in either of the following forms:
```
interface EventTypes {
  'event-with-parameters': any[]
  'event-with-example-handler': (...args: any[]) => void
}
```

## Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:103
