import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0F1419",
        navy: "#003D5B",
        navyDark: "#002A3F",
        orange: "#F47721",
        orangeLight: "#FF8C42",
        concrete: "#AAB3BB",
        white: "#FFFFFF",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        dmsans: ["var(--font-dmsans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
