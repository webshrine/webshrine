import { isReadonly, ref } from 'vue'
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

  it('flattens nested refs', () => {
    const useComposable = defineComposable({
      flat: true,
      setup() {
        return {
          a: ref(1),
          b: ref(2),
          nested: {
            c: ref(3),
          },
        }
      },
    })

    const result = useComposable()
    expect(result).toEqual({
      a: 1,
      b: 2,
      nested: {
        c: 3,
      },
    })
  })

  it('makes instance readonly', () => {
    const useComposable = defineComposable({
      readonly: true,
      setup() {
        return {
          a: ref(1),
          b: ref(2),
          nested: {
            c: ref(3),
          },
        }
      },
    })

    const result = useComposable()
    expect(result).toEqual({
      a: ref(1),
      b: ref(2),
      nested: {
        c: ref(3),
      },
    })
    expect(isReadonly(result)).toBe(true)
  })

  it('makes instance readonly and flattens it', () => {
    const useComposable = defineComposable({
      flat: true,
      readonly: true,
      setup() {
        return {
          a: ref(1),
          b: ref(2),
          nested: {
            c: ref(3),
          },
        }
      },
    })

    const result = useComposable()
    expect(result).toEqual({
      a: 1,
      b: 2,
      nested: {
        c: 3,
      },
    })
    expect(isReadonly(result)).toBe(true)
  })
})
