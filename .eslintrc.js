const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'airbnb-base',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.svg'],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 180 }],
    'vue/no-v-html': 0,
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', 'ts', '.vue', '.svg'],
        alias: {
          '~': resolve(__dirname, 'src'),
        },
      },
    },
  },
};
