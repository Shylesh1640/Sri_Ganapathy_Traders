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
        charcoal: "#111820",
        navy: "#173B59",
        orange: "#F47721",
        concrete: "#AAB3BB",
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
