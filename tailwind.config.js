/** @type {import('tailwindcss').Config} */
const config = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#10A19D",
        purple: "#540375",
        orange: "#FF7000",
        yellow: "#FFBF00",
        bronze: "#CD7F32",
        silver: "#C0C0C0",
        gold: ":#FFD700",
      },
      fontFamily: {
        sans: ['var(--font-lilita-one)'],
      },
    },
  },
  plugins: [],
};

export default config