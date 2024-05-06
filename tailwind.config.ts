import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone': '390px',
      // => @media (min-width: 390px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        "lime-green":"hsl(163, 72%, 41%)",
        "bright-red":"hsl(356, 69%, 56%)",
        "facebook":"hsl(208, 92%, 53%)",
        "twitter":"hsl(203, 89%, 53%)",
        "youTube":"hsl(348, 97%, 39%)",
        "toggle":"hsl(230, 22%, 74%)",
        "dark-very-dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue-top": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        "dark-white": "hsl(0, 0%, 100%)", 
        "white":"hsl(0, 0%, 100%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue":"hsl(227, 47%, 96%)",
        "dark-grayish-blue":"hsl(228, 12%, 44%)",
        "very-dark-blue": "hsl(230, 17%, 14%)"
      },
      "backgroundImage":{
        "dark-toggle": "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))",
        "instagram":"linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%))"
      }
    },
  },
  plugins: [],
};
export default config;
