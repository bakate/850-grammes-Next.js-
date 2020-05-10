import { FormHelperText, Grid } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Formify = ({ children, txtHelper }) => (
  <Grid
    templateColumns="auto"
    maxW="700px"
    mx="auto"
    gap={1}
    justifyContent={{ base: 'center', md: 'stretch' }}
  >
    {children}

    <FormHelperText mt="-1" id="email-helper-text" textAlign="center">
      {txtHelper}
    </FormHelperText>
  </Grid>
);

Formify.propTypes = {
  children: PropTypes.any,
  txtHelper: PropTypes.string.isRequired,
};

export default Formify;
