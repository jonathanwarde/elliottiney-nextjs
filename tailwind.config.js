/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Important: covers Next.js App Router
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
            heading: ['var(--font-bebas)'],
            body: ['var(--font-cormorant)'],
        },
      },
    },
    plugins: [],
};
  