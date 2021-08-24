import i18n from './src/locales/index.ts';

const base = '/mijin.web/';

export default {
  srcDir: 'src',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  ssr: false,
  router: {
    // github page support
    base,
  },
  publicRuntimeConfig: {
    app: {
      url: process.env.APP_URL || 'https://lecoueyl.github.io/mijin.web',
    },
    links: {
      github: process.env.LINKS_GITHUB || 'https://github.com/lecoueyl/mijin',
    },
    nav: {
      general: {
        'getting-started': {},
        customization: {},
      },
      foundations: {
        colors: {},
        icons: {},
        layout: {},
        transitions: {},
      },

      atoms: {
        avatar: {},
        badge: {},
        button: {},
        checkbox: {},
        collapse: {},
        divider: {},
        headline: {},
        icon: {},
        input: {},
        link: {},
        list: {},
        modal: {},
        note: {},
        paragraph: {},
        popover: {},
        progress: {},
        radio: {},
        segmentedControl: {},
        select: {},
        skeleton: {},
        statusDot: {},
        statusIcon: {},
        table: {},
        tabs: {},
        tag: {},
        textarea: {},
        toast: {},
        toggle: {},
      },

      organisms: {
        form: {},
        popover: {},
      },
    },
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Mijin - Tailwind CSS UI components',
    titleTemplate: '%s — Mijin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tailwind CSS UI components build for Vue.js / Nuxt.js' },
      { name: 'keyword', content: 'tailwindcss,vue,nuxt,components,ui framework,component framework,ui library,component library' },

      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    ],
    link: [
      {
        rel: 'apple-touch-icon', sizes: '180x180', href: `${base}apple-touch-icon.png`,
      },
      {
        rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}favicon-32x32.png`,
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: `${base}favicon-16x16.png`,
      },
      { rel: 'manifest', href: `${base}site.webmanifest` },
      { rel: 'mask-icon', href: `${base}safari-pinned-tab.svg`, color: '#ffffff' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/assets/css/highlight.js.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/mijin',
    '~/plugins/vue-clipboard2',
    '~/plugins/vue-form',
    '~/plugins/vue-highlightjs',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
  ],
  colorMode: {
    classSuffix: '',
  },
  tailwindcss: {
    configPath: '../tailwind.config.js',
    jit: true,
    viewer: false,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', i18n],
    '@nuxtjs/sitemap',
  ],
  /*
  ** Sitemap
  */
  sitemap: {
    hostname: process.env.APP_URL || 'https://lecoueyl.github.io/mijin.web',
    gzip: true,
    i18n: i18n.defaultLocale,
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    analyze: false,
    extractCSS: true,
    publicPath: '/assets/',
  },
};
