/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				'sans': ['Anton SC', 'system-ui'],
        'descrip': ['Rubik', 'system-ui'],
			}
    },
  },
  plugins: [],
}