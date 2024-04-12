import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "50": "#f0f8ff",
          "100": "#e0f1fe",
          "200": "#b9e4fe",
          "300": "#7ccefd",
          "400": "#36b7fa",
          "500": "#0c9eeb",
          "600": "#0085d5",
          "700": "#0163a3",
          "800": "#065486",
          "900": "#0b466f",
          "950": "#072d4a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        "500": "500ms",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
