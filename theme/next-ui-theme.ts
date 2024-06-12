import { themeColors } from "./colors";

export default {
  prefix: "nextui", // prefix for themes variables
  addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
  defaultTheme: "dark", // default theme from the themes object
  defaultExtendTheme: "dark", // default theme to extend on custom themes
  layout: {
    radius: {
      small: "4px",
    },
  },
  themes: {
    dark: {
      colors: {
        background: themeColors.dark,
        foreground: themeColors.light,
      },
    },

    light: {
      colors: {
        background: themeColors.light,
        foreground: themeColors.dark,
      },
    },
  },
};
