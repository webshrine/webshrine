import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-restricted-syntax': 'off',
    'antfu/top-level-function': 'off',
  },
})
