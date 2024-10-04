import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4C6FFF",
        secondary: "#AE66FF",
        textSecondary: "#C2C0C4",
        bgSecondary: "#191818",
        bgCard: "#2C2C2C",
        stroke: "#444444",
      },
    },
  },
  plugins: [],
};
export default config;
