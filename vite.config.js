
import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from "sveltekit-autoimport"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
    autoImport({
      components: ['./src/lib/components'],
    }),
    sveltekit()
  ],
  server: {
		port: 3000
	}
};

export default config;