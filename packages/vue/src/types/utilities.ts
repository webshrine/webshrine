import type { InjectionKey } from 'vue'
import type { MaybePromise } from '../../../stdtyp/src/utilities'

export type InjectableSource<T> = InjectionKey<T> | string

export type AsyncSource<T> = Promise<T> | (() => MaybePromise<T>)