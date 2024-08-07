/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './packages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
