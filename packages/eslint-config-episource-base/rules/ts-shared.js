module.exports = {
  plugins: ['@typescript-eslint'],

  parser: '@typescript-eslint/parser',

  extends: ['plugin:@typescript-eslint/recommended'],

  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json'],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
};
