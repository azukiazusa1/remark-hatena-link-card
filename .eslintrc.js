module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
}
