import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import { StyledPage, Inner, GlobalStyles, theme } from './styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyles />
      <Meta />
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
