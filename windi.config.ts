import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	analyze: true,
	extract: {
		include: ['**/*.{svelte,html,jsx,tsx}'],
		exclude: ['node_modules', '.git']
	},
	theme: {
		extend: {
			/* colors: {
        'primary-100': '#FCFDFD',
        // 'primary-200': '#FCFEFF',
        'primary-200': '#fcfeff',
        // 'primary-300': '#F6FBFC',
        'primary-300': '#f6fbfc',
        // 'primary-400': '#DDF3F8',
        'primary-400': '#ddf3f8',
        'primary-500': '#92e8fc',
        'primary-900': '#024250',
        // rev: '#024250',

        'icon-blue': '#42C0FF',
        'icon-red': '#FF4242',
        'icon-green': '#A0FF42',

        't-black': '#000000',
        't-grey': '#5c686a',
      }, */
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
			top: {
				'50%': '50%'
			},
			backgroundColor: {
				primary: '#F1F1F2',
				blur: '#030303',
				accent: '#f51997'
			},
			colors: {
				primary: 'rgb(22, 24, 35)',
				accent: '#f51997'
			},
			backgroundImage: {
				'blurred-img':
					"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaaJ7s4lqcBF4IDROVPzrlL5fexcwRmDlnuEYQenWTt1DejFY5kmYDref2a0Hp2eE4aw&usqp=CAU')",
				'blurred-img-my':
					"url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=20')"
			}
		}
	}
});
