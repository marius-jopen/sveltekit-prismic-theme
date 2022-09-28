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
		fontFamily,
		extend: {
      gridTemplateColumns: {
        layout: 'repeat(12, minmax(0, 1fr))'
      },
      spacing: {
        'layout': '1rem'
      },
      padding: {
        'px-layout': '2rem',
      },
      margin: {
        'mx-breakout': 'margin: 0 -2rem',
      }
    }
	},
	variants: {
		extend: {},
	},
		plugins: [
	]
}