import { pick } from '@/transformers'
import { sleep } from '@/utils/common'
import { compose, pipe, pre } from './fp'

describe('pre', () => {
  it('basic', async () => {
    const fnMock = vi.fn()

    const schedule = pre(setTimeout, 5)

    schedule(fnMock)
    expect(fnMock).toBeCalledTimes(0)

    await sleep(10)
    expect(fnMock).toBeCalledTimes(1)
    schedule(fnMock)
    schedule(fnMock)

    await sleep(2)
    expect(fnMock).toBeCalledTimes(1)
  })
})

describe('pipe', () => {
  it('basic', () => {
    const process = pipe(
      (str: string) => +str,
      v => v > 10,
      asd => `Is bigger than 10: ${asd}`,
    )

    expect(process('20')).toBe('Is bigger than 10: true')
    expect(process('5')).toBe('Is bigger than 10: false')
  })

  it('complex', () => {
    interface IUser {
      name: string
      age: number
      email?: string
      address?: string
    }

    const process = pipe(
      (users: IUser[]) => users,
      users => users.filter(user => user.age >= 18),
      users => users.sort((a, b) => a.age - b.age),
      users => users.map(user => user.name),
      v => v.join(', '),
    )

    expect(process([
      { name: 'John', age: 20 },
      { name: 'Jane', age: 17 },
      { name: 'Jack', age: 30 },
    ])).toBe('John, Jack')
  })
})

describe('compose', () => {
  it('basic', () => {
    const process = compose(
      asd => `Is bigger than 10: ${asd}`,
      v => v > 10,
      (str: string) => +str,
    )

    expect(process('20')).toBe('Is bigger than 10: true')
    expect(process('5')).toBe('Is bigger than 10: false')
  })
})
