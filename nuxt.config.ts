// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        shim: false
    },
    modules: [
        '@pinia/nuxt'
    ],
    // Overwrite with NUXT_PUBLIC_<VAR_NAME>
    runtimeConfig: {
        public: {
            compactLiffId: '1655262197-0aKZ9klL',
            mainLiffId: '1655262197-Z5VNwpvB'
        }
    }
})
