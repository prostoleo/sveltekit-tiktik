import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
// import WindiCSS from 'vite-plugin-windicss';
import Unocss from 'unocss/vite';
// presetAttributify
import { presetWind } from 'unocss';
import presetIcons from '@unocss/preset-icons';
// import presetAttributify from '@unocss/preset-attributify';
import Icons from 'unplugin-icons/vite';
import { extractorSvelte } from '@unocss/core';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({}),
		Unocss({
			extractors: [extractorSvelte],
			presets: [
				// presets here...
				// presetAttributify(),
				presetIcons(),
				presetWind()
			],
			rules: [
				[
					'bg-blurred-img-my',
					{
						'background-image':
							"url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=20')"
					}
				]
			],
			shortcuts: {
				// shortcuts to multiple utilities
				// btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
				// 'btn-green': 'text-white bg-green-500 hover:bg-green-700',
				// single utility alias
				// red: 'text-red-100'
			},
			theme: {
				// extend: {
				width: {
					1600: '1600px',
					400: '400px',
					450: '450px',
					210: '210px',
					550: '550px',
					260: '260px',
					650: '650px'
				},
				height: {
					600: '600px',
					280: '280px',
					900: '900px',
					458: '458px',
					'88vh': '88vh'
				},
				/* top: {
					'50%': '50%'
				}, */
				/* backgroundColor: {
					// primary: '#F1F1F2',
					// blur: '#030303',
					// accent: '#f51997'
				}, */
				colors: {
					primary: 'rgb(22, 24, 35)',
					blur: '#030303',
					primaryBg: '#F1F1F2',
					accent: '#f51997'
				}
				/* backgroundImage: {
					'blurred-img':
						"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaaJ7s4lqcBF4IDROVPzrlL5fexcwRmDlnuEYQenWTt1DejFY5kmYDref2a0Hp2eE4aw&usqp=CAU')",
					'blurred-img-my':
						"url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=20')"
				} */
				// }
			}
		}),
		Icons({
			autoInstall: true,
			compiler: 'svelte'
		})
	],
	resolve: {
		alias: {
			// these are the aliases and paths to them
			'@': path.resolve('./src'),
			'@components': path.resolve('./src/components'),
			// '@lib': path.resolve('./src/lib'),
			'@models': path.resolve('./src/models/models.d.ts'),
			'@utils': path.resolve('./src/utils'),
			'@stores': path.resolve('./src/stores')
		}
	}
};

export default config;
