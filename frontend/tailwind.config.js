/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#171717',
          secondary: '#1f1f1f',
          card: '#222222',
          border: '#333333',
        },
        risk: {
          low: '#047857',
          medium: '#b45309',
          high: '#c2410c',
          critical: '#991b1b',
        },
        accent: '#3b82f6',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
