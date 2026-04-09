import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f7fee7",
          dark: "#042f2e",
          surface: "#ffffff",
          text: "#000000",
          textDark: "#ccfbf1",
          mutedTextDark: "#5eead4",
        },
        secondary: {
          DEFAULT: "#f7fee7",
          dark: "#042f2e",
          border: "#bef264",
          borderDark: "#0f766e",
          textMuted: "#000000",
          textMutedDark: "#99f6e4",
        },
      },
    },
  },
  plugins: [],
};

export default config;
