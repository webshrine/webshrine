import type { AnyArrayOptional, AnyObject, Fn } from '@webshrine/stdtyp'

/** @category Definers */
export type ComposableInstance = AnyObject

/** @category Definers */
export type ComposableSetup = Fn<AnyArrayOptional, ComposableInstance>
