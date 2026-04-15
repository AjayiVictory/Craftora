import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Adding this just in case your structure varies
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBrown: '#4A3121',
        charcoal: '#333333',
        warmBeige: '#F3E5DC',
        gold: '#D4AF37',
      },
      fontFamily: {
        brandFont: ['var(--font-playfair)', 'serif'],
        bodyFont: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;