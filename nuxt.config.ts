export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@unocss/nuxt',
  ],
})
