/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				'sans': ['Big Shoulders Display', 'system-ui'],
        'descrip': ['Rubik', 'system-ui'],
			}
    },
  },
  plugins: [],
}