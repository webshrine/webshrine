import { mount } from '@vue/test-utils'
import { sleep } from '@webshrine/stdlib'
import { h, nextTick, provide } from 'vue'
import { use } from './use'

describe('use', () => {
  it('promise source: useAsync(source)', async () => {
    const data = { foo: 'bar' }
    const initialData = { foo: 'default' }
    const source = new Promise<typeof data>(resolve => resolve(data))
    const result = use(source, initialData)

    expect(result.value).toBe(initialData)
    await nextTick()
    expect(result.value).toBe(data)
  })

  it('function source: useAsync(source)', async () => {
    const data = { foo: 'bar' }
    const initialData = { foo: 'default' }
    const source = () => new Promise<typeof data>(resolve => setTimeout(() => resolve(data), 5))
    const result = use(source, initialData)

    expect(result.value).toBe(initialData)
    await sleep(5)
    expect(result.value).toBe(data)
  })

  it('string source: inject(source)', () => {
    const wrapper = mount({
      setup() {
        provide('foo', 777)
        return () => h({
          setup() {
            const foo = use<number>('foo')
            return () => `${foo}`
          },
        })
      },
    })
    expect(wrapper.text()).toBe('777')
  })

  it('symbol source: inject(source)', () => {
    const wrapper = mount({
      setup() {
        const sym = Symbol('')
        provide(sym, 777)
        return () => h({
          setup() {
            const foo = use<number>(sym)
            return () => `${foo}`
          },
        })
      },
    })
    expect(wrapper.text()).toBe('777')
  })
})
