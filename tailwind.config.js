/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '1px 0px 14px 0px rgba(147, 0, 255, 0.06)',
        'custom-1': '0px 2px 14px 0px rgba(147, 0, 255, 0.10)'
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '50%' },
          '100%': { opac1ty: '100%' },
        },
      },
    },
  },
  plugins: [],
}
