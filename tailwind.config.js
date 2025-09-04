/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				fadeIn: 'fadeIn 0.5s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			backdropBlur: {
				md: '12px',
			},
		},
	},
	plugins: [],
	safelist: [
		'bg-white/10',
		'hover:bg-white/20',
		'border-white/20',
		'hover:opacity-90',
		'hover:scale-[1.02]',
		'active:scale-[0.98]',
		'backdrop-blur-md',
		'animate-fadeIn',
	],
};
