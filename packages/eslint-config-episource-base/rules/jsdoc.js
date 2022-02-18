module.exports = {
  plugins: ['jsdoc'],
  rules: {
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access
    'jsdoc/check-access': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-alignment
    'jsdoc/check-alignment': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-examples
    'jsdoc/check-examples': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-indentation
    'jsdoc/check-indentation': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-line-alignment
    'jsdoc/check-line-alignment': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-param-names
    'jsdoc/check-param-names': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-property-names
    'jsdoc/check-property-names': ['error', { enableFixer: true }],

    // https://github.com/gajus/eslint-plugin-jsdoc#check-syntax
    'jsdoc/check-syntax': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names
    'jsdoc/check-tag-names': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-types
    'jsdoc/check-types': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-values
    'jsdoc/check-values': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#empty-tags
    'jsdoc/empty-tags': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#implements-on-classes
    'jsdoc/implements-on-classes': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#match-description
    'jsdoc/match-description': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#match-name
    'jsdoc/match-name': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#multiline-blocks
    'jsdoc/multiline-blocks': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#newline-after-description
    'jsdoc/newline-after-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#no-bad-blocks
    'jsdoc/no-bad-blocks': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#no-defaults
    'jsdoc/no-defaults': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#no-missing-syntax
    'jsdoc/no-missing-syntax': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#no-multi-asterisks
    'jsdoc/no-multi-asterisks': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#no-restricted-syntax
    'jsdoc/no-restricted-syntax': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#no-types
    'jsdoc/no-types': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#no-undefined-types
    'jsdoc/no-undefined-types': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-asterisk-prefix
    'jsdoc/require-asterisk-prefix': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-description-complete-sentence
    'jsdoc/require-description-complete-sentence': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-description
    'jsdoc/require-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-example
    'jsdoc/require-example': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-file-overview
    'jsdoc/require-file-overview': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-hyphen-before-param-description
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],

    // https://github.com/gajus/eslint-plugin-jsdoc#require-jsdoc
    'jsdoc/require-jsdoc': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-param
    'jsdoc/require-param': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-description
    'jsdoc/require-param-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name
    'jsdoc/require-param-name': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
    'jsdoc/require-param-type': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-property
    'jsdoc/require-property': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-property-description
    'jsdoc/require-property-description': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-property-name
    'jsdoc/require-property-name': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-property-type
    'jsdoc/require-property-type': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns
    'jsdoc/require-returns': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-check
    'jsdoc/require-returns-check': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-description
    'jsdoc/require-returns-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-type
    'jsdoc/require-returns-type': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-throws
    'jsdoc/require-throws': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-yields
    'jsdoc/require-yields': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-yields-check
    'jsdoc/require-yields-check': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#sort-tags
    'jsdoc/sort-tags': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#tag-lines
    'jsdoc/tag-lines': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#valid-types
    'jsdoc/valid-types': 'off',
  },
};
