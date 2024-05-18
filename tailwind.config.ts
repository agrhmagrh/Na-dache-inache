import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "gray-dark": "#353A43",
      "gray-dark-block": "#3B4250",
      "gray-product": "#3B424F",
      "gray-light": "#F9F9F9",
      "white": "#FFFFFF",
      "gray-additional": "#9E9494",
      "orange": "#FF992B",
      "gray-menu": "#C4C4C4",
      "black": "#000000",
      "black-70": "rgba(0, 0, 0, 70%)",
      "red": "#CD5C5C",
      "green": "#98FB98",
    }
  },
  plugins: [],
};
export default config;
