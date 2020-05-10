import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import Container from './Chakra/Container';
import Header from './Chakra/Header';
import Languages from './Chakra/Radios';
import theme from './Chakra/theme';
import Footer from './Footer';
import Meta from './Meta';
import Nav from './Nav';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider>
      <Meta />
      <Languages />
      <Header />
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </ColorModeProvider>
  </ThemeProvider>
);

export default Page;
