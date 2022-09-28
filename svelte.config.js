/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

	kit: {
		adapter: adapter()
	}
};

export default config;