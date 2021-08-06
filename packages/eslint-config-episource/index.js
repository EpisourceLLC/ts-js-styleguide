module.exports = {
  extends: ['@episource/eslint-config-base', './rules/react', './rules/react-a11y'].map(
    require.resolve
  ),
  parser: require.resolve('babel-eslint'),
  rules: {},
};
