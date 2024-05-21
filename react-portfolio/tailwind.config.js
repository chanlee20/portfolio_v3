/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-green": "#D1B1CB",
        "mint-green": "#D7FDEC",
        "anti-flash-white": "#E5E9EC",
        "thristle": "#DDCAD9",
        "brown-rose": "#7C616C",
        "azure": "#EAFDF8",
        "mountbatten-pink": "#A7899C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  variants: {
    display: ["group-hover"],
  },
};
