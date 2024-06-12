import {nextui} from '@nextui-org/theme'
import {themeColors, tailwindTheme} from './theme/theme-config'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: tailwindTheme,
  darkMode: "class",
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    {
      'postcss-import': {}
    },
    nextui({
      prefix: "nextui", // prefix for themes variables
      // addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
        radius: {
          small: "4px"
        }
      },
      themes: {
        dark: {
          colors: {
            background: themeColors.dark,
            foreground: themeColors.light,
          }
        },

        light: {
          colors: {
            background: themeColors.light,
            foreground: themeColors.dark,
          }
        }
      }
    }),
  ],
}
