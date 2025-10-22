import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0C",
        foreground: "#FFFFFF",
        accent: "#00FFA8",
      },
      fontFamily: {
        apple: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
