import type { Fn, FnWrapper } from '../../../packages/stdtyp/src'
import type { CallData, TimelineData } from './Timeline.vue'
import { sleep, through } from '../../../packages/stdlib/src'

/**
 *
 */
export function generateRandomCallList(count: number, duration: number): number[] {
  return Array.from({ length: count }, () => Math.trunc(Math.random() * duration))
}

/**
 *
 */
export function createTracer<Res, Id = number>(target: Fn<[Id], Res>, options: {
  wrapper: FnWrapper
  onCalled: (id: Id) => void
  onExecute: (id: Id) => void
  onResolved: (id: Id, res: Res) => void
}) {
  const execute = async (id: Id) => {
    options.onExecute(id)
    const result = await target(id)
    options.onResolved(id, result)
    return result
  }

  const callWrapped = options.wrapper(execute)

  const call = (id: Id) => {
    options.onCalled(id)
    return callWrapped(id)
  }

  return call
}

export const TRACE_STATUS = {
  CALLED: 0,
  EXECUTE: 1,
  RESOLVED: 2,
  REJECTED: 3,
} as const

/**
 *
 */
export const createAsyncWrapperSimulator = (
  options: {
    executor?: Fn<[number], any>
    wrapper: FnWrapper
    getCalls: () => number[]
    params?: Partial<TimelineData>
  },
) => {
  const {
    executor,
    wrapper,
    getCalls,
    params,
  } = {
    executor: through,
    params: {},
    ...options,
  }

  return async (): Promise<TimelineData> => {
    const result: CallData[] = []
    const startedAt = Date.now()
    const setProcessStatus = (processId: number, status: typeof TRACE_STATUS[keyof typeof TRACE_STATUS]) => {
      result[processId].timestampByStatus[status] = Date.now() - startedAt
    }

    const callWithTrace = createTracer<string>(executor, {
      wrapper,
      onCalled(id) {
        result[id] = {
          title: 'string',
          timestampByStatus: [],
        }
        setProcessStatus(id, TRACE_STATUS.CALLED)
      },
      onExecute(id) {
        setProcessStatus(id, TRACE_STATUS.EXECUTE)
      },
      onResolved(id) {
        setProcessStatus(id, TRACE_STATUS.RESOLVED)
      },
    })

    const calls = getCalls()
    calls.forEach((time, processIndex) => setTimeout(callWithTrace, time, processIndex))

    await sleep(Math.max(...calls))

    return {
      title: '',
      ...params,
      calls: result,
    }
  }
}
