import antfu from '@antfu/eslint-config'
import jsdoc from 'eslint-plugin-jsdoc'

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
    },
  },
)
