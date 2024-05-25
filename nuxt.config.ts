// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }],
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
  ],
})
