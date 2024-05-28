// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/content',
    [
      '@nuxtjs/google-fonts',

      {
        families: {
          'Libre+Baskerville': true,
          'Playfair+Display': true,
        },
      },
    ],
    [
      'nuxt-headlessui',
      {
        prefix: 'Headless',
      },
    ],
    '@nuxt/image',
  ],
})
