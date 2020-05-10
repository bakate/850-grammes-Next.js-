import { Grid, Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({ img, title, max, children, blackColor }) => (
  <Grid
    templateColumns="1fr"
    justifyContent="center"
    justifyItems="center"
    alignItems="center"
    alignContent="center"
    minH={max ? '100vh' : '60vh'}
    bgImage={img}
    bgPos="center"
    bgSize="cover"
    bgRepeat="no-repeat"
    color={blackColor}
  >
    <Heading
      as="h1"
      pt={8}
      fontSize="3.5rem"
      boxShadow="lg"
      textTransform="uppercase"
      letterSpacing="wider"
    >
      {title}
    </Heading>
    {children}
  </Grid>
);

Hero.propTypes = {
  children: PropTypes.object,
  img: PropTypes.string,
  max: PropTypes.bool,
  title: PropTypes.string,
  blackColor: PropTypes.any,
};

Hero.defaultProps = {
  img: '/bcg.jpg',
  blackColor: 'white',
};

export default Hero;
