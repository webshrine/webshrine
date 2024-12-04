import { sleep } from '@/utils'
import { negate, once } from '.'

describe('once', () => {
  it('sync', () => {
    const callback = vi.fn(() => '123')
    const onceCall = once(callback)

    expect(onceCall()).toBe('123')
    expect(onceCall()).toBe('123')
    expect(onceCall()).toBe('123')
    expect(callback).toBeCalledTimes(1)
  })

  it('async', async () => {
    const callback = vi.fn(async () => {
      await sleep(10)
      return '123'
    })
    const onceCall = once(callback)

    const prom = onceCall()
    expect(prom).toBeInstanceOf(Promise)
    expect(onceCall()).toBe(prom)

    await sleep(15)

    expect(onceCall()).toBe(prom)
    expect(await onceCall()).toBe('123')
    expect(await onceCall()).toBe('123')
    expect(callback).toBeCalledTimes(1)
  })
})

describe('negate', () => {
  it('sync', () => {
    expect(negate(() => true)()).toBe(false)
    expect(negate(() => false)()).toBe(true)
  })
  it('async', async () => {
    expect(
      await negate(async () => true)(),
    ).toBe(false)
    expect(
      await negate(() => new Promise<boolean>(r => setTimeout(() => r(true), 1)))(),
    ).toBe(false)
  })
})
