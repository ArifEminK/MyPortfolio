import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mochiy: ["Mochiy Pop One", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        dancing_script : ["Dancing Script", "cursive"],
      },
      colors: {
        mycolor: {
          100: "#5FB0CE",
          200: "#1F466F",
          300: "#364149",
          400: "#0D0D11",
          500: "#3E4548",
          600: "#323844",
          700: "#F4F4F4",
          800: "#222222",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
