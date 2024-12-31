import type { ComposableSetup } from './helpers'
import { defineComposable } from './defineComposable'

/**
 *
 */
export const defineModule = <T extends ComposableSetup>(setup: T) => defineComposable({
  singleton: true,
  flat: true,
  readonly: true,
  setup,
})
