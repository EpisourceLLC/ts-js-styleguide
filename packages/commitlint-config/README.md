# @episource/commitlint-config

A [commitlint](https://commitlint.js.org/#/) config profile for Episource.

## Install

```
npm i -D @episource/commitlint-config
```

## Usage

Run the following from your project root:

```sh
echo "module.exports = {extends: ['@episource/commitlint-config']}" > commitlint.config.js
```

## Custom Rules

- `@episource/dependencies` - Use to enforce the presence of a dependencies
  array in a commit subject, e.g. `feat: thing [api]`. An empty array should be
  used if there are no dependencies.
- `@episource/story-link` - Use to enforce the presence of a story link in the
  commit scope, e.g. `feat(sc-123): thing`.
