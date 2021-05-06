module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				'112': '28rem',
				'120': '30rem',
				'140': '35rem',
				'160': '40rem',
				'180': '45rem',
				'200': '50rem',
				'240': '60rem',
				'280': '70rem',
				'320': '80rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
