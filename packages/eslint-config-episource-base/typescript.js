module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/security-node',
    './rules/ts-shared.js',
    'eslint-config-prettier',
  ].map(require.resolve),
  plugins: ['prettier', 'security-node'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
