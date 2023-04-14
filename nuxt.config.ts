// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  app: {
    head: {
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'keywords', content:'nft solana trading' },
          { name:'og:title', content: 'The Wise Trade - Tips and Guides For Your NFT Trading' },
          { name:'og:locale', content: 'en_US' },
          { name:'twitter:card', content: 'summary' },
          { name:'twitter:url', content: 'http://twitter.com/defilogist' },
          { name:'twitter:title', content: 'The Wise Trade - Tips and Guides For Your NFT Trading' }
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '_nuxt/assets/favicon.png' }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ]
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/main.sass'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
