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

export const toCamelCase = camelCase satisfies FnTransform
export const toCapitalCase = capitalCase satisfies FnTransform
export const toConstantCase = constantCase satisfies FnTransform
export const toDotCase = dotCase satisfies FnTransform
export const toKebabCase = kebabCase satisfies FnTransform
export const toNoCase = noCase satisfies FnTransform
export const toPascalCase = pascalCase satisfies FnTransform
export const toPascalSnakeCase = pascalSnakeCase satisfies FnTransform
export const toPathCase = pathCase satisfies FnTransform
export const toSentenceCase = sentenceCase satisfies FnTransform
export const toSnakeCase = snakeCase satisfies FnTransform
export const toTrainCase = trainCase satisfies FnTransform
