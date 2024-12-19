import { nextTick, ref, watch } from 'vue'
import { unwrapRefs } from './unwrapRefs'

describe('unwrapRefs', () => {
  it('just unwraps refs when they are passed in as an object', () => {
    const result = unwrapRefs({
      foo: ref(1),
      bar: ref(2),
    })
    expect(result).toEqual({
      foo: 1,
      bar: 2,
    })
  })

  it('don\'t looses reactivity', async () => {
    const source = {
      foo: ref(1),
      bar: ref(5),
    }
    const unwrapped = unwrapRefs(source)
    expect(unwrapped).toEqual({
      foo: 1,
      bar: 5,
    })

    unwrapped.foo++
    expect(unwrapped).toEqual({
      foo: 2,
      bar: 5,
    })

    const spyWatcher = vi.fn()
    watch(() => unwrapped.foo, spyWatcher)
    unwrapped.foo++ // should trigger the watcher
    await nextTick()
    expect(spyWatcher).toBeCalledTimes(1)
  })
})
