export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt3-starter-template',
      meta: [
        { name: 'description', content: 'Everything about Nuxt3' },
      ],
      link: [],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
  ],
})
