/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
}

