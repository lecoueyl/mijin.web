const mijin = require('mijin/src/tailwind-preset');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  presets: [
    mijin,
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['IBM Plex Mono', ...fontFamily.mono],
      },
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'node_modules/mijin/src/components/**/*.vue',
      'nuxt.config.js',
      'src/assets/css/safelist.txt',
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.js',
    ],
  },
};
