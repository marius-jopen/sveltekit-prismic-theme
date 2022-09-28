const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = {
	...defaultTheme.fontFamily,
	sans: ['system-ui', 'Open Sans', 'sans-serif'],
}

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  plugins: []
};