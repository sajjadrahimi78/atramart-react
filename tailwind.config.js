/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        // sans: ["IRANSansWeb", ...fontFamily.sans],
        sans: ["Vazir", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
