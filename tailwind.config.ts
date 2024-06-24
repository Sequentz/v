import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Added for Flowbite
  ],
  theme: {
    fontFamily: {
      medium: ['OPTIBankGothic-Medium.otf', 'sans-serif'],
      lght: ['OPTIBankGothic-Light.otf', 'sans-serif'],
      // Add more font styles if needed
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('flowbite/plugin')
  ],
};



export default config;
