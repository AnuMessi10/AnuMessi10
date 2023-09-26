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
        brand: { 100: "#F4DEBE", 500: "#BF7506", 900: "#BF7506" },
        dark: { 100: "#E7E6E4", 500: "#83807C", 900: "#211B12" },
      },
    },
  },
  plugins: [],
};
export default config;
