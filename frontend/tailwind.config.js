/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#153c97",
				border: "#006ce4",
			},
		},
	},
	plugins: [],
};
