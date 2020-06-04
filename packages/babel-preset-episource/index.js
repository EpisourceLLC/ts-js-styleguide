'use strict';

const { declare } = require('@babel/helper-plugin-utils');

const defaultTargets = {
  chrome: 83,
  edge: 83,
  firefox: 76,
  ios_saf: 13.4,
  safari: 13.1,
  node: 12,
};

function buildTargets({ additionalTargets }) {
  return { ...defaultTargets, ...additionalTargets };
}

module.exports = declare((api, options) => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0');

  const {
    modules,
    targets = buildTargets(options),
    removePropTypes,
    looseClasses = false,
  } = options;

  if (typeof modules !== 'undefined' && typeof modules !== 'boolean' && modules !== 'auto') {
    throw new TypeError(
      'babel-preset-episource only accepts `true`, `false`, or `"auto"` as the value of the "modules" option'
    );
  }

  const computedModulesOption = modules === false ? false : 'auto';

  const debug = typeof options.debug === 'boolean' ? options.debug : false;
  const development =
    typeof options.development === 'boolean'
      ? options.development
      : api.cache.using(() => process.env.NODE_ENV === 'development');

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          debug,
          exclude: [
            'transform-async-to-generator',
            'transform-template-literals',
            'transform-regenerator',
          ],
          modules: computedModulesOption,
          targets,
        },
      ],
      [require('@babel/preset-react'), { development }],
    ],
    plugins: [
      [
        // this plugin _always_ needs to be loaded first
        require('babel-plugin-styled-components'),
        !development
          ? {
              // help bundlers tree-shake
              pure: true,
              // remove dev-mode noise
              displayName: false,
            }
          : {
              // use defaults
            },
      ],
      looseClasses
        ? [
            require('@babel/plugin-transform-classes'),
            {
              loose: true,
            },
          ]
        : null,

      removePropTypes
        ? [
            require('babel-plugin-transform-react-remove-prop-types'),
            {
              mode: 'wrap',
              additionalLibraries: ['episource-prop-types'],
              ignoreFilenames: ['node_modules'],
              ...removePropTypes,
            },
          ]
        : null,

      [
        require('@babel/plugin-transform-template-literals'),
        {
          spec: true,
        },
      ],
      require('@babel/plugin-transform-property-mutators'),
      require('@babel/plugin-transform-member-expression-literals'),
      require('@babel/plugin-transform-property-literals'),
      [
        require('@babel/plugin-proposal-object-rest-spread'),
        {
          useBuiltIns: true,
        },
      ],
      [
        require('@babel/plugin-transform-runtime'),
        {
          absoluteRuntime: false,
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules: !computedModulesOption,
        },
      ],
    ].filter(Boolean),
  };
});
