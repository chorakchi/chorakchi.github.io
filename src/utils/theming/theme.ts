import { palette } from './palette';
import { darkPalette } from './darkPalette';
import { space } from './space';

export const mainTheme = {
    palette: palette,
    space: space,
    screens: {
        sx: '0px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    },
    filters: {
        grayscale: 'grayscale(1)',
        invert: 'invert(1)',
        sepia: 'sepia(1)',
    },
    shadows: {
        shadow1: '0 0 20px red',
        shadow2: '0 0 40px red',
    },
};

export const darkTheme = {
    ...mainTheme,
    palette: darkPalette,
};

export type themeType = typeof mainTheme;

export const defaultTheme = { theme: mainTheme };
