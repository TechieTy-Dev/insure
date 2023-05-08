/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: "hsl(216, 30%, 68%)",
				gray: " hsl(0, 0%, 98%)",
				darkviolet: "hsl(270, 9%, 17%)",
				grayviolet: "hsl(273, 4%, 51%)",
				violet: "hsl(256, 26%, 20%)",
			},
		},
	},
	plugins: [],
};
