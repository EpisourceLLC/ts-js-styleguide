# babel-preset-episource

> A babel preset for transforming your JavaScript for Episource.

Currently contains transforms for all [stage 4](https://tc39.github.io/ecma262/) (ES2018) and [stage 3](https://github.com/tc39/proposals#active-proposals) syntax. Additionally, stage 4 syntax that is excluded is as follows:
 - generators: `regenerator-runtime` is too heavyweight for our use.
 - `async/await`: `regenerator-runtime` is too heavyweight for our use, and [async-to-promises](https://www.npmjs.com/package/babel-plugin-async-to-promises) is not yet complete enough to be safely used.
 - async iterators: depends on both generators and `async function`s
 - lifted template literal restrictions: we do not use tagged template literals, nor implement custom DSLs, otherwise we would enable this.

## Install

To install with all necessary `peerDependencies`, use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps#usage):

```sh
npx install-peerdeps --dev babel-preset-episource
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["episource"]
}
```

### Via CLI

```sh
$ babel script.js --presets episource
```

### Via Node API

```javascript
require('@babel/core').transform('code', {
  presets: ['episource']
});
```

### Targeting Environments

This module uses @babel/preset-env to target specific environments.

Please refer to [@babel/preset-env#targets](https://babeljs.io/docs/en/babel-preset-env#targets) for a list of available options.

For a list of browsers please see [browserlist](https://github.com/ai/browserslist).

You may override our default list of targets by providing your own `targets` key.

```json
{
  "presets": [["episource", {
    "targets": {
      "chrome": 50,
      "ie": 11,
      "firefox": 45
    }
  }]]
}
```

The following transpiles only for Node v6.

```json
{
  "presets": [["episource", {
    "targets": {
      "node": 6
    }
  }]]
}
```

If you wish, you can also inherit our default list of browsers and extend them using `additionalTargets`.

```json
{
  "presets": [["episource", {
    "additionalTargets": {
      "chrome": 42,
      "ie": 8
    }
  }]]
}
```

You may override our default debug option by providing your own `debug` key.

```json
{
  "presets": [["episource", {
    "debug": true
  }]]
}
```

## React Development Mode

When `process.env.NODE_ENV` is `'development'`, [the `development` mode will be set for `@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react#development).

You may override our default development option by providing your own boolean `development` key.

```json
{
  "presets": [["episource", {
    "development": false
  }]]
}
```

## React PropTypes removal

This preset can be configured to remove propTypes using [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) with the following default options:


To enable this transformation with the default options, set the `removePropTypes` option to `true`:

```json
{
  "presets": [["episource", {
    "removePropTypes": true
  }]]
}
```

The default options that will be used are:

```js
{
  mode: 'wrap',
  additionalLibraries: ['episource-prop-types'],
  ignoreFilenames: ['node_modules'],
}
```

Default options can be overridden using the `removePropTypes` option. These options will be shallow-merged with the defaults:

```json
{
  "presets": [["episource", {
    "removePropTypes": {
      "mode": "remove"
    }
  }]]
}
```

For example, if you are using this plugin in a deployable app, you might want to use the remove mode for your production build (and disable this transform entirely in development for optimal build speeds).

## Classes loose mode

By default, this preset will compile classes in normal mode. This is safer, but comes with a bundle size and runtime overhead. To [compile classes in loose mode](https://babeljs.io/docs/en/babel-plugin-transform-classes#loose), set the `looseClasses` option to `true`:

```json
{
  "presets": [["episource", {
    "looseClasses": true,
  }]]
}
```

The [risks of enabling loose classes are outlined in the Babel docs](https://babeljs.io/docs/en/babel-plugin-transform-classes#loose).
