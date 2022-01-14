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
			colors: {
			  'lines': 'rgb(30 30 30)',
			  'fonts': 'rgb(30 30 30)',
			},
			height: {
				'100vw': '100vw',
				'90vw': '90vw',
				'80vw': '80vw',
				'70vw': '70vw',
				'60vw': '60vw',
				'50vw': '50vw',
				'40vw': '40vw',
				'30vw': '30vw',
				'20vw': '20vw',
				'10vw': '10vw',
			},
		}
	},
	variants: {
		extend: {},
	},
	plugins: [
	]
}