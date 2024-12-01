import { negate } from '.'

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
