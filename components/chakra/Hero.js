import { Grid, Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({ title, img, children, colorize }) => (
  // const { colorMode } = useColorMode();
  // const bgColor = { light: 'gray.100', dark: 'gray.800' };
  // const textColor = { light: 'black', dark: 'white' };
  <Grid
    alignItems="center"
    justifyContent="start"
    minH="70vh"
    w="100%"
    px={8}
    templateColumns="1fr"
    backgroundImage={img}
    transition="all .6s ease-in"
    bgPos="center"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <Heading
      textShadow="lg"
      boxShadow="lg"
      as="h1"
      lineHeight="taller"
      color={colorize}
      textTransform="capitalize"
      // fontWeight="black"
      letterSpacing="wide"
    >
      {title}
    </Heading>

    {children}
  </Grid>
);

Hero.propTypes = {
  children: PropTypes.object,
  img: PropTypes.string,
  title: PropTypes.string,
  colorize: PropTypes.string,
};

export default Hero;
