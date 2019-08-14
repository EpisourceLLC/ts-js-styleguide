/* eslint
   global-require: 0,
 */

test('all entry points parse', () => {
  expect(() => require('..')).not.toThrow();
});
