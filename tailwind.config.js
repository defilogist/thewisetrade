/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      blue: '#579BB1',
      beige: '#E1D7C6',
      grey: '#ECE8DD',
      paper: '#F8F4EA',
      greyblue: '#AEBDCA',
      greyblue: '#AEBDCA',
      darkblue: '#7895B2'
    },
    extend: {},
  },
  plugins: [],
}
