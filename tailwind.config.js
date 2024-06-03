import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#151315',
        'light': '#F4F3F1'
      },
      screens: {
        '3xs': '352px',
        '2xs': '384px',
        'xs': '512px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
    },
  },
  darkMode: "class",
  plugins: [
    {
      'postcss-import': {}
    },
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
        radius: {
          small: "4px"
        }
      },
    }),
  ],
}
