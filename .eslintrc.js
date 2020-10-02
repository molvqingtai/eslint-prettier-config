module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
