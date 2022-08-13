import autoAdapter from '@sveltejs/adapter-auto';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
// import windi from 'svelte-windicss-preprocess';
import Unocss from 'unocss/vite';
import { presetWind } from 'unocss/preset-wind';
import Icons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	/* preprocess: preprocess([
		windi({})
	]), */
	// preprocess: [windi({})],
	preprocess: preprocess(),

	kit: {
		// adapter: adapter()
		adapter: netlifyAdapter({
			edge: true,
			split: false
		})
	}

	/* vite: {
		plugins: [
			Unocss({
				presets: [presetWind()]
			}),
			Icons({
				autoInstall: true,
				compiler: 'svelte'
			})
		]
	} */
};

export default config;
