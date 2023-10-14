/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        miniLaptop: { max: "1414px" },
        tablet: { max: "715px" },
        bigPhone: { max: "580px" },
        smallPhone: { max: "435px" },
      },
    },
  },
  plugins: [],
};
