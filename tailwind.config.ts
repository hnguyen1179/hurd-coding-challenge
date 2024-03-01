import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-linear":
					"linear-gradient(90deg, rgba(100,101,240,1) 10%, rgba(232,73,155,1) 90%)",
			},
			colors: {
				"hurd-purple": "#7128CD",
			},
		},
	},
	plugins: [],
};
export default config;
