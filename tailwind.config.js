const mijin = require('mijin/src/tailwind-preset');

module.exports = {
  presets: [
    mijin,
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    options: {
      safelist: [/^text-/, /^bg-/],
    },
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.js',
      'nuxt.config.js',
      'node_modules/mijin/src/components/**/*.vue',
    ],
  },
};