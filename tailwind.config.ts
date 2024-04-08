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
          "50": "#eff9ff",
          "100": "#dcf0fd",
          "200": "#c1e6fc",
          "300": "#96d8fa",
          "400": "#64c1f6",
          "500": "#40a5f1",
          "600": "#2b88e5",
          "700": "#2374d6",
          "800": "#225cab",
          "900": "#214f87",
          "950": "#193152",
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
