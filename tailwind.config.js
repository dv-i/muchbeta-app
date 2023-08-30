/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/react-tailwindcss-select/dist/index.esm.js",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: "#0d9488",
				secondary: "#ffffff",
				muchbetaDark: "#439288",
				muchbetaLight: "#9EF0E1",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
