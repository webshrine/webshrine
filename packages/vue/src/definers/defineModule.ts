import type { ComposableSetup } from './helpers'
import { defineComposable } from './defineComposable'

/**
 * Returns module creator...
 */
export const defineModule = <T extends ComposableSetup>(setup: T) => defineComposable({
  singleton: true,
  flat: true,
  setup,
})
