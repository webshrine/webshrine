import type { FnTransform } from '@webshrine/stdtyp'
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  noCase,
  pascalCase,
  pascalSnakeCase,
  pathCase,
  sentenceCase,
  snakeCase,
  trainCase,
} from 'change-case'

/** @category Text */
export const toCamelCase = camelCase satisfies FnTransform

/** @category Text */
export const toCapitalCase = capitalCase satisfies FnTransform

/** @category Text */
export const toConstantCase = constantCase satisfies FnTransform

/** @category Text */
export const toDotCase = dotCase satisfies FnTransform

/** @category Text */
export const toKebabCase = kebabCase satisfies FnTransform

/** @category Text */
export const toNoCase = noCase satisfies FnTransform

/** @category Text */
export const toPascalCase = pascalCase satisfies FnTransform

/** @category Text */
export const toPascalSnakeCase = pascalSnakeCase satisfies FnTransform

/** @category Text */
export const toPathCase = pathCase satisfies FnTransform

/** @category Text */
export const toSentenceCase = sentenceCase satisfies FnTransform

/** @category Text */
export const toSnakeCase = snakeCase satisfies FnTransform

/** @category Text */
export const toTrainCase = trainCase satisfies FnTransform
