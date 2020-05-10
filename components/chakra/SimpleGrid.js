import { Button, Grid, useColorMode } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const SimpleGridy = ({ title1, title2, title3, title4, children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'red.600', dark: 'red.200' };

  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
      alignContent="center"
      justifyItems="stretch"
      alignItems="center"
      justifyContent="center"
      py={8}
      gap="25px"
      mx={8}
    >
      <Button
        bg={bgColor[colorMode]}
        variantColor="blue"
        variant="solid"
        // rightIcon="email"
        size="md"
      >
        {title1}
      </Button>
      <Button
        bg={bgColor[colorMode]}
        variantColor="blue"
        variant="solid"
        // rightIcon="arrow-forward"
        size="md"
      >
        {title2}
      </Button>
      <Button
        bg={bgColor[colorMode]}
        variantColor="blue"
        variant="solid"
        // rightIcon="phone"
        size="md"
      >
        {title3}
      </Button>
      <Button
        bg={bgColor[colorMode]}
        variantColor="blue"
        variant="solid"
        // rightIcon="info"
        size="md"
      >
        {title4}
      </Button>
      {children}
    </Grid>
  );
};

SimpleGridy.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
  children: PropTypes.object,
};

export default SimpleGridy;
