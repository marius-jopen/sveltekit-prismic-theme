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
		}
  },
  plugins: []
};