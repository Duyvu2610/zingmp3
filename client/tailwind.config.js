/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "layout-bg": "#1e1e1e",
        "sidebar-bg": "#292929",
        "player-control-bg": "#181818",
        "navigation-text": "#a0a0a0",
        "border-primary": "#3f3f3f",
        "link-text-hover": "#c273ed",
      },
      spacing: {
        "sidebar-h": "calc(100vh - 90px)",
        "sidebar-w-mobile": "70px",
        "sidebar-w-pc": "240px",
        header: "70px",
        "contetn-w-pc": "calc(100vh - 240px)",
        "contetn-w-mobile": "calc(100vh - 70px)",
      },
    },
  },
  plugins: [],
};
