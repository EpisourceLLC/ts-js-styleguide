module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],

  rules: {
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'test',
        withinDescribe: 'it',
      },
    ],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect'],
      },
    ],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
    'jest/lowercase-name': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'warn',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    'jest/no-export': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
    'jest/no-if': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': ['warn', { maxSize: 50 }],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
    'jest/valid-describe': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blog/master/docs/rules/jest/no-deprecated-functions.md
    'jest/no-deprecated-functions': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blog/master/docs/rules/jest/no-restricted-matchers.md
    'jest/no-restricted-matchers': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blog/master/docs/rules/jest/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blog/master/docs/rules/jest/require-to-throw-message.md
    'jest/require-to-throw-message': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blog/master/docs/rules/jest/require-top-level-describe.md
    'jest/require-top-level-describe': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blog/master/docs/rules/jest/valid-title.md
    'jest/valid-title': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md
    'jest/no-conditional-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md
    'jest/no-done-callback': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md
    'jest/no-interpolation-in-snapshots': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    'jest/unbound-method': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
    'jest/max-nested-describe': ['error', { max: 3 }],

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
    'jest/prefer-to-be': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
    'jest/prefer-expect-resolves': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
    'jest/require-hook': 'error',
  },
};
