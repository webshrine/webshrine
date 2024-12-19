import { ref } from 'vue'
import { defineComposable } from './defineComposable'

describe('defineComposable', () => {
  it('does the same if no props like usual composable definition', () => {
    function useComposableCommon(arg: string) {
      return {
        state: ref(arg),
      }
    }
    const useComposableDeclarative = defineComposable({
      setup(arg: string) {
        return {
          state: ref(arg),
        }
      },
    })

    expect(useComposableCommon('test')).toStrictEqual(useComposableDeclarative('test'))
  })

  it('doesn\'t runs setup more than once if singleton prop was set', () => {
    const spyNonSingleton = vi.fn()
    const useNonSingleton = defineComposable({
      setup() {
        spyNonSingleton()
        return {}
      },
    })

    expect(useNonSingleton()).not.toBe(useNonSingleton())
    expect(spyNonSingleton).toBeCalledTimes(2)

    const spySingleton = vi.fn()
    const useSingleton = defineComposable({
      singleton: true,
      setup() {
        spySingleton()
        return {}
      },
    })

    expect(useSingleton()).toBe(useSingleton())
    expect(spySingleton).toBeCalledTimes(1)
  })

  it('flattens refs', () => {
    const useComposable = defineComposable({
      flatten: true,
      setup() {
        return {
          a: ref(1),
          b: ref(2),
        }
      },
    })

    const result = useComposable()
    expect(result).toEqual({ a: 1, b: 2 })
  })
})
