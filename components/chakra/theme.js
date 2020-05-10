import { theme as chakraTheme } from '@chakra-ui/core';

const fonts = { ...chakraTheme.fonts, mono: `'JetBrains Mono', monospace` };

const breakpoints = ['360px', '768px', '1024px', '1440px'];
const [sm, md, lg, xl] = breakpoints;
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];
// const [sm, md, lg, xl] = breakpoints;

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
    white: '#FBFFFE',
    green: '#96ce66',
  },
  fonts,
  sm,
  md,
  lg,
  xl,
  transition: 'all 0.3s ease-in-out',
};

export default theme;
