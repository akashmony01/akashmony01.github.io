/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html', ],
  theme: {
    extend: {},
    container: {
			center: true,
			padding: {
				DEFAULT: "20px",
				sm: "20px",
				md: "20px",
				lg: "30px",
				xl: "40px",
			},
		},
  },
  plugins: [
    function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '100%',
					},
					'@screen md': {
						maxWidth: '100%',
					},
					'@screen lg': {
						maxWidth: '100%',
					},
					'@screen xl': {
						maxWidth: '1440px',
					},
				}
			})
		},
  ],
}
