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
        "reactBlue":"#61DBFB",
        "linuxYellow":"#FFCC33",
        "tailwindBlue":"#06b6d4",
        "gitOrange":"#F1502F",
        "javaOrange":"#f89820",
        "typescriptBlue":"#007acc",
        "javaBlue":"#5382a1"
      },
    },
  },
  plugins: [],
};
export default config;
