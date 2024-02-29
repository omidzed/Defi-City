/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontSize: {
			rounds: '.3rem',
			tiny: '0.6rem',
			smallest: '.8rem',
			thead: '1rem',
			custom: '1.1rem',
			menu: '2.4rem',
			odds: '1.4rem',
			bigger: '1.2rem',
			username: '1.2rem',
			menuItem: '1.8rem',
		},
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
			},
			container: {
				padding: {
					'DEFAULT': '1rem',
					'sm': '2rem',
					'lg': '5rem',
					'xl': '6rem',
					'2xl': '8rem',
				},
				keyframes: {
					spin: {
						'0%': { transform: 'rotate(0deg)' },
						'100%': { transform: 'rotate(360deg)' },
					},
				},
			},
		},

		plugins: [],
	},
};
