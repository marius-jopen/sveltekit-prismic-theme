const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
			fontFamily: {
        'type1': ['font-1', ...defaultTheme.fontFamily.sans],
				'type2': ['font-2']
      },
			colors: {
				'background-1': 'rgb(230 230 230)',
			  'background-2': 'rgb(255 255 255)',
				'background-3': 'rgb(240 240 240)',
			  'fonts-1': 'rgb(30 30 30)',
			  'lines-1': 'rgba(205,205,205,1)'
			},
			backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
			transitionDuration: {
        '2000': '2000ms',
				'4000': '4000ms',
      }
		}
  },
  plugins: []
};