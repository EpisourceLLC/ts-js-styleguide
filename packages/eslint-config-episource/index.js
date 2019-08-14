module.exports = {
  extends: ['eslint-config-episource-base', './rules/react', './rules/react-a11y'].map(
    require.resolve
  ),
  parser: require.resolve('babel-eslint'),
  rules: {},
};
