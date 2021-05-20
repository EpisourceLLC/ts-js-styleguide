module.exports = {
  extends: [
    '@episource/eslint-config-base',
    './rules/react',
    './rules/react-a11y',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  parser: require.resolve('babel-eslint'),
  rules: {},
};
