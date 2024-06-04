import { themeColors } from "./colors";

export default {
  extend: {
    colors: {
      dark: themeColors.dark,
      light: themeColors.light,
    },
    screens: {
      "3xs": "352px",
      "2xs": "384px",
      xs: "512px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      mono: ["var(--font-mono)"],
    },
  },
};
