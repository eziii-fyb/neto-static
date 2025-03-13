/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"ubuntu": ["Ubuntu  ", "serif"],
				"ubuntu-mono": ["Ubuntu Mono  ", "serif"],
				"unbounded": ["Unbounded  ", "serif"],
			},
		},
	},
	plugins: [],
};
