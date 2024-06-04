import {nextui} from '@nextui-org/theme'
import {nextUiTheme, tailwindTheme} from './theme/theme-config'

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
    {
      'postcss-import': {}
    },
    nextui(nextUiTheme),
  ],
}
