/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-netlify';

const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [
				tailwind, 
				autoprefixer
			]
		}
	}),
	
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		// adapter: adapter()
	}
};

export default config;
