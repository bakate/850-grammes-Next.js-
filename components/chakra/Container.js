import { Stack, useColorMode } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ScrollButton from './ScrollButton';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.500' };
  const color = { light: 'black', dark: 'white' };

  return (
    <>
      <Header />
      <Stack
        direction="column"
        // justify="center"
        // align="center"
        color={color[colorMode]}
        bg={bgColor[colorMode]}
        p={{ md: '0 2rem' }}
        // maxW={1200}
        mx="auto"
      >
        <ScrollButton />
        {children}
      </Stack>
      <Footer />
    </>
  );
};
Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
