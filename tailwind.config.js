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
          DEFAULT: "#202020", dark: "#0B0B0B", light: "#343434"
        },
        secondary: {
          DEFAULT: "#FFBD59"
        },
        textColor: {
          DEFAULT: "#FFF",
        },
        borderColor: {
          DEFAULT: "#FFF"
        }
      },
      fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
        antonio: ['Antonio', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
			},
    },
  },
  plugins: [],
}

