module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      file: 'en.ts',
    },
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
  baseUrl: process.env.APP_URL || 'https://lecoueyl.github.io/mijin.web',
  detectBrowserLanguage: {
    cookieKey: 'redirected',
    useCookie: true,
  },
  langDir: 'locales/',
  parsePages: false,
  vueI18n: {
    fallbackLocale: 'en',
  },
};
