# @episource/eslint-config-base

> Episource's base ESLint config (without React plugins), following our code conventions

[![npm version](https://img.shields.io/npm/v/eslint-config-episource-base.svg)](https://www.npmjs.com/package/eslint-config-episource-base)
[![Build Status](https://travis-ci.org/EpisourceLLC/ts-js-styleguide.svg?branch=latest)](https://travis-ci.org/EpisourceLLC/ts-js-styleguide)

## Usage

To install with all necessary `peerDependencies`, use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps#usage):

```sh
npx install-peerdeps --dev @episource/eslint-config-base
```

Or with yarn

```sh
npx install-peerdeps -Y --dev @episource/eslint-config-base
```

All exported configs should be added to your [ESlint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) `extends`.
For example, in a JSON `.eslintrc`:

```json
{
  "extends": "@episource/eslint-config-base"
}
```

### `"extends": "@episource/eslint-config-base"`

Our default export contains all of our ESLint rules, including ECMAScript 6+ and Prettier.

### `"extends": ["@episource/eslint-config-base", "@episource/eslint-config-base/typescript"]`

Typescript rules and environment added to the default export.

### `"extends": ["@episource/eslint-config-base", "@episource/eslint-config-base/jest]`

Jest-specific rules and environment added to the default export.

### `prettier` Editor Plugin Integration

Unfortunately, super-useful editor plugins like `prettier-atom` and `prettier-vscode` do not load Prettier settings from ESLint config, which is where we load our Prettier options from. To workaround this, add a `.prettierrc.js` or `prettier.config.js` file to your repo root with the following content:

```js
module.exports = require('@episource/prettier-config');
```

## Related

- [Episource's overarching ESLint config](https://npmjs.com/@episource/eslint-config)
- [Episource's Prettier config](https://npmjs.com/@episource/prettier-config)
- [Episource's Javascript code conventions](https://github.com/EpisourceLLC/ts-js-styleguide)

## Development

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests (from the repo root) with `npm test`.

You can make sure this module lints with itself using `npm run lint` (from the repo root).
