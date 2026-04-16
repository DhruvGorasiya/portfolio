/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#E8FF47",
        cream: "#F5F5F0",
        base: "#080808",
        divider: "#2A2A2A",
        muted: "#6B6B6B",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
