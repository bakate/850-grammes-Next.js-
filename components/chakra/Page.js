import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import Meta from '../Meta';
import Container from './Container';
import theme from './theme';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider>
      <Meta />
      <Container>{children}</Container>
    </ColorModeProvider>
  </ThemeProvider>
);

export default Page;
