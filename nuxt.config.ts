// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-vite", "pinia", "@vueuse/nuxt"],

  css: ["~/assets/reset.css"],
  
  
});
