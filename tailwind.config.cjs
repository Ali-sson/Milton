

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//         colors: {
//         primary: "#1E88E5",
//         accent: "#FF7043",
//         secondary: "#00897B",
//         dark: "#111827",
//         light: "#F9FAFB",
//       },
//       fontFamily: {
//         inter: ["Inter", "sans-serif"],
//          playfair: ["Playfair Display", "serif"],
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3D91",
        accent: "#D4AF37",
        mainBg: "#FAF9F6",
        footBg: "#020617",
        hover: "#B8962E",
        subText: "#6B7280",
        text: "#1A1A1A",
        FooterBg: "#071F4A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}