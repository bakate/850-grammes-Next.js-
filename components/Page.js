import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './chakra/Container';
import theme from './chakra/theme';
import Meta from './Meta';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider>
      <Meta />
      <Container>{children}</Container>
    </ColorModeProvider>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
