import { palette } from "./palette";

const darkPalette = {
  ...palette,
  primary_dark: palette.gray_50,
  white: palette.gray_600,
  gray_50: palette.gray_700,
  gray_100: palette.gray_600,
  gray_200: palette.gray_500,
  gray_300: palette.gray_400,
  gray_400: palette.gray_300,
  gray_500: palette.gray_200,
  gray_600: palette.gray_100,
  gray_700: palette.gray_50,
  gray_800: palette.white,
  gray_900: palette.white,
};

export const theme = {
  main: {
    color: { ...palette },
    grid: {
      breakpoints: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
    Icon: {
      size: {
        large: "48px",
        medium: "15px",
        small: "10px",
      },
    },
    Typography: {
      root: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;',
      },
      headline_xxl: {
        fontSize: "44px",
        lineHeight: "normal",
      },
      headline_xl: {
        fontSize: "38px",
        lineHeight: "normal",
      },
      headline_l: {
        fontSize: "22px",
        lineHeight: "normal",
      },
      headline_m: {
        fontSize: "18px",
        lineHeight: "normal",
      },
      headline_s: {
        fontSize: "16px",
        lineHeight: "normal",
      },
      headline_xs: {
        fontSize: "14px",
        lineHeight: "normal",
      },
      body: {
        fontSize: "14px",
        lineHeight: "normal",
      },
      body2: {
        fontSize: "12px",
        lineHeight: "normal",
      },
      caption: {
        fontSize: "10px",
        lineHeight: "normal",
      },
    },
    Button: {
      root: {},
      contained: {},
      outlined: {},
      text: {},
    },
    Divider: {},
    Image: {},
    Link: {},
    TextField: {},
  },
};
