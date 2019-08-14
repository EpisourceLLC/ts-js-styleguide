const prettierConfig = require('../prettier-config-episource');

test('prettier-config-episource', () => {
  expect(prettierConfig).toMatchObject({
    $schema: 'http://json.schemastore.org/prettierrc',
    // only test customized props
    endOfLine: 'lf',
    printWidth: 100,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    quoteProps: 'consistent',
  });
});
