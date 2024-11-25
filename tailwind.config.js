/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
    './assets/css/*.css',
    './assets/js/*.js',
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: "#f5f5f5", dark: "#d0d0d0", light: "#e0e0e0"
        },
        secondary: {
          DEFAULT: "#1230AE"
        },
        textColor: {
          DEFAULT: "#111",
        },
        borderColor: {
          DEFAULT: "#1230AE"
        }
      },
      fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
        antonio: ['Antonio', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
			},
    },
    container: {
			center: true,
			padding: '20px'
		},
  },
  plugins: [require('@tailwindcss/typography'),],
}

