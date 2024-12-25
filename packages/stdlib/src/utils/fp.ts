import type { Fn } from '@webshrine/stdtyp'

/** @category Utils */
const runPipe = <T>(acc: T, func: (arg: T) => T) => func(acc)

/** @category Utils */
type FnUnaryOp<I, O> = (operand: I) => O

/** @category Utils */
interface FnPipe {
  <A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (...args: A) => R2
  <A extends any[], R1, R2, R3>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (...args: A) => R3
  <A extends any[], R1, R2, R3, R4>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (...args: A) => R4
  <A extends any[], R1, R2, R3, R4, R5>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (...args: A) => R5
  <A extends any[], R1, R2, R3, R4, R5, R6>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (...args: A) => R6
  <A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (...args: A) => R7
  <A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: FnUnaryOp<any, any>[]): (...args: A) => any
  (...func: FnUnaryOp<any, any>[]): (...args: any[]) => any
}

/**
 * @experimental
 * @category Utils
 */
export const pipe = (<T>(...operations: Fn[]) => {
  // TODO: Rewrite to imperative loop to improve pref
  return (argument: T): T => operations.reduce(runPipe, argument)
}) as FnPipe

/** @category Utils */
interface FnCompose {
  <A extends any[], R1, R2, R3, R4, R5, R6, R7>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R7
  <A extends any[], R1, R2, R3, R4, R5, R6>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R6
  <A extends any[], R1, R2, R3, R4, R5>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R5
  <A extends any[], R1, R2, R3, R4>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R4
  <A extends any[], R1, R2, R3>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R3
  <A extends any[], R1, R2>(f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R2
  (...func: FnUnaryOp<any, any>[]): (...args: any[]) => any
}

/**
 * @experimental
 * @category Utils
 */
export const compose = (<T>(...operations: Fn[]) => {
  // TODO: Rewrite to imperative loop to improve pref
  return (argument: T): T => operations.reduceRight(runPipe, argument)
}) as FnCompose

/**
 * Returns unary function ... .
 * @experimental
 * @category Utils
 */
export const pre = <
  F extends (target: any, ...args: any[]) => any,
>(
  fn: F,
  ...args: F extends (arg: any, ...args: infer A) => any ? A : never
) => (arg: Parameters<F>[0]): ReturnType<F> => fn(arg, ...args)
