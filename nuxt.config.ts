// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    css: [
        '@/assets/css/tailwind.css',
        '@/assets/css/fonts.css',
    ],
    vite: {
        plugins: [
            // SVG loader for importing SVGs as Vue components
            require('vite-svg-loader')(),
        ],
    },
})
