/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        brand: ['Bodoni Moda', 'serif']
      },
      colors: {
        "primary-red": "#B02828",
        "dark-gray": "#616161",
        "light-gray": "#B0AEAE",
        "light-gray-2": "#C4C4C4",
        primary: {
          DEFAULT: "#B02828",
          hover: "#8E2121",
        },
        text: {
          primary: "#475569",
          secondary: "#64748B",
        },
        border: "#E2E8F0",
        background: "#FFFFFF",
        foreground: "#0F172A",
      },
      maxWidth:{
        220: "13.75rem"
      },
      height:{
        68: '4.25rem',
      },
      spacing: {
        60: '3.75rem',     // 60px
        68: '4.25rem',
        92: '5.75rem',    // 92px
        107: '6.688rem',  // 107px
        108: '6.75rem',
        109: '6.813rem',  // 109px
        'n5': '-0.9rem',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontSize: {
        '40': '2.5rem',     // 40px
        '96': '6rem',       // 96px
      },
      lineHeight: {
        'title': '106.64px',    // For large titles
        'subtitle': '61.44px',  // For medium titles
        'body': '44.43px',      // For body text
      },
      letterSpacing: {
        'title': '-0.05em',  // -5%
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #EB5454 0%, #903333 100%)',
      },
    },
  },
  plugins: []
}

