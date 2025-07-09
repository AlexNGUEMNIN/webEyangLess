/** @type {import('tailwindcss').Config} */
module.exports = {
	content : [
		"./src/**/*.{html, ts}"
	],
	theme: {
		extend: {
			colors: {
				appgreen: "#00A592",
        darkgreen: "#006D60",
        appyellow: "#FBC000"
			}
		},
	},
	plugins: [],
}

