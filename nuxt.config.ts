// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
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
            svgLoader()
        ],
    },
})
