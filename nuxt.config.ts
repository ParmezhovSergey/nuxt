// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/reset.css'
  ],
  vite: {
    build: {
      ssr: false
    }
  }
  // modules: ['@vueuse/nuxt']
});
