import { sleep } from '@/utils/common'
import { cope } from './error-handling'

const positiveExecution = () => JSON.parse('{"asd": 123}') as Record<string, number>
const failingExecution = () => JSON.parse('_broken_"asd"__: 123}__') as Record<string, number>

it('basic success', () => {
  const [syncParse, syncParseErr] = cope(positiveExecution)

  expect(syncParse).toEqual({ asd: 123 })
  expect(syncParseErr).toBeUndefined()
})

it('basic fail', () => {
  const [syncParse, syncParseErr] = cope(failingExecution)

  expect(syncParse).toBeUndefined()
  expect(syncParseErr).toBeInstanceOf(SyntaxError)
})

it('basic with default', () => {
  const [syncParse = { qwe: 789 }, syncParseErr] = cope(failingExecution)

  expect(syncParse).toEqual({ qwe: 789 })
  expect(syncParseErr).toBeInstanceOf(SyntaxError)
})

it('async success', async () => {
  const [syncParse, syncParseErr] = await cope(async () => {
    await sleep(20) // simulate async work
    return positiveExecution()
  })

  expect(syncParse).toEqual({ asd: 123 })
  expect(syncParseErr).toBeUndefined()
})

it('async fail', async () => {
  const [syncParse, syncParseErr] = await cope(async () => {
    await sleep(20) // simulate async work
    return failingExecution()
  })

  expect(syncParse).toBeUndefined()
  expect(syncParseErr).toBeInstanceOf(SyntaxError)
})
