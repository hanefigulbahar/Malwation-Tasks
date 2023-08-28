/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E85B81",
        secondaryHover: "#D35375",
        secondaryActive: "#C04B6A",

        primary: "#7A55EA",
        primaryHover: "#704BDF",
        primaryActive: "#6641D3",

        tertiary: "#58ABBB",
        tertiaryHover: "#509BAA",
        tertiaryActive: "#498D9B",

        success: "#3CE000",
        successHover: "#37CC00",
        successActive: "#32B900",

        warning: "#E80000",
        warningHover: "#D30000",
        warningActive: "#C00000",
      },
      backgroundImage: {
        error404: "url('/404.svg')",
        error500: "url('/500.svg')",
      },
    },
  },
  plugins: [],
};
