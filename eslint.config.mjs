import antfu from '@antfu/eslint-config'
import jsdoc from 'eslint-plugin-jsdoc'

const TYPEDOC_JSDOC_TAGS = [
  'alpha',
  'beta',
  'category',
  'categoryDescription',
  'defaultValue',
  'deprecated',
  'document',
  'enum',
  'event',
  'eventProperty',
  'example',
  'experimental',
  'group',
  'groupDescription',
  'hidden',
  'hideconstructor',
  'ignore',
  'interface',
  'internal',
  'module',
  'namespace',
  'overload',
  'override',
  'packageDocumentation',
  'param',
  'private',
  'privateRemarks',
  'property',
  'protected',
  'public',
  'readonly',
  'remarks',
  'returns',
  'satisfies',
  'sealed',
  'see',
  'template',
  'throws',
  'typeParam',
  'virtual',
]

export default antfu(
  {
    type: 'lib',
    rules: {
      'no-restricted-syntax': 'off',
      'antfu/top-level-function': 'off',
      'ts/explicit-function-return-type': 'off',
    },
  },
  jsdoc.configs['flat/contents-typescript-error'],
  jsdoc.configs['flat/logical-typescript-error'],
  jsdoc.configs['flat/stylistic-typescript-error'],
  {
    files: ['**/*.ts'],
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-jsdoc': ['error', {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      }],
      'jsdoc/require-throws': 'error',
      'jsdoc/text-escaping': 'off',
      'jsdoc/no-blank-blocks': 'warn',
      'jsdoc/check-tag-names': ['error', {
        definedTags: TYPEDOC_JSDOC_TAGS,
      }],
    },
  },
)
