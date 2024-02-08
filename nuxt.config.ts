// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui",'@nuxtjs/supabase'],
  css: ["~/assets/css/global.css"],
  colorMode: {
    preference: "light",
  },
  supabase:{
    redirect:false
  }
  
});
