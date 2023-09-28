/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      width: "100%",
      maxWidth: 1400,
      padding: 32,
      screens: {
        sm: "1400px",
      },
    },
    fontFamily: {
      display: ["Alegreya", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#ee7926",
      "primary-light": "#fcede1",
      secondary: "#c2daa0",
      dark: "#323232",
    },
  },
  plugins: [],
};
