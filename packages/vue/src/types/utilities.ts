import type { InjectionKey } from 'vue'
import type { MaybePromise } from '../../../stdtyp/src/utilities'

/** @category Types */
export type InjectableSource<T> = InjectionKey<T> | string

/** @category Types */
export type AsyncSource<T> = Promise<T> | (() => MaybePromise<T>)
