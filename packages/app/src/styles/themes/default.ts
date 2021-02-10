import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';

const spaces = {
  px: '1px',
  0: '0rem',
  0.5: '0.2rem',
  1: '0.4rem',
  1.5: '0.6rem',
  2: '0.8rem',
  2.5: '1rem',
  3: '1.2rem',
  3.5: '1.4rem',
  4: '1.6rem',
  5: '2.0rem',
  6: '2.4rem',
  7: '2.8rem',
  8: '3.2rem',
  9: '3.6rem',
  10: '4rem',
  12: '4.8rem',
  14: '5.6rem',
  16: '6.4rem',
  20: '8rem',
  24: '9.6rem',
  28: '11.2rem',
  32: '12.8rem',
  36: '14.4rem',
  40: '16rem',
  44: '17.6rem',
  48: '19.2rem',
  52: '20.8rem',
  56: '22.4rem',
  60: '24rem',
  64: '25.6rem',
  72: '28.8rem',
  80: '32rem',
  96: '34.4rem',
};

const defaultTheme = {
  fonts: {
    families: {
      body: 'Inter, sans-serif',
      heading: 'Inter, sans-serif',
      mono: 'Menlo, monospace',
    },
    sizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '2.0rem',
      '2xl': '2.4rem',
      '3xl': '2.8rem',
      '4xl': '3.6rem',
      '5xl': '4.8rem',
      '6xl': '6.4rem',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      normal: 'normal',
      none: '1',
      shorter: '1.25',
      short: '1.375',
      base: '1.5',
      tall: '1.625',
      taller: '2',
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  breakpoints: {
    xs: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
  spaces,
  sizes: {
    ...spaces,
    full: '100%',
    '3xs': '22.4rem',
    '2xs': '25.6rem',
    xs: '32rem',
    sm: '34.4rem',
    md: '44.8rem',
    lg: '51.2rem',
    xl: '57.6rem',
    '2xl': '67.2rem',
    '3xl': '76.8rem',
    '4xl': '89.6rem',
    '5xl': '102.4rem',
    '6xl': '115.2rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.2rem',
    base: '0.4rem',
    md: '0.6rem',
    lg: '0.8rem',
    xl: '1.2rem',
    '2xl': '1.6rem',
    '3xl': '2.4rem',
    full: '9999px',
  },
  transparencies: {
    full: color => transparentize(1, color),
    0: color => transparentize(-1, color),
    1: color => transparentize(0.12, color),
    2: color => transparentize(0.2, color),
    3: color => transparentize(0.28, color),
    4: color => transparentize(0.36, color),
    5: color => transparentize(0.44, color),
    6: color => transparentize(0.52, color),
    7: color => transparentize(0.6, color),
    8: color => transparentize(0.68, color),
    9: color => transparentize(0.76, color),
    10: color => transparentize(0.84, color),
    11: color => transparentize(0.92, color),
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
  },
} as DefaultTheme;

export default defaultTheme;
