const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
			fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
			colors: {
			  'background-1': 'rgb(255 255 255)',
			  'fonts-1': 'rgb(30 30 30)',
			  'lines-1': 'rgba(205,205,205,1)',
			},
		}
  },
  plugins: []
};