import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ bgTitle, center, title, withRow }) => (
  <SimpleGrid minChildWidth="75px" m="0 .5rem">
    <Box textAlign={center ? 'center' : 'left'} textTransform="capitalize">
      <Heading as="h1" fontWeight="black">
        {bgTitle}
      </Heading>
      <Heading as="h2">{title}</Heading>
      <Divider
        pb={1}
        borderColor={withRow ? 'orange.300' : 'none'}
        borderWidth={2}
        w={withRow ? '8rem' : '0'}
        opacity={withRow ? '1' : '0'}
        m={center ? '0 auto' : '0'}
      />
    </Box>
  </SimpleGrid>
);

Title.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string,
  withRow: PropTypes.bool,
  bgTitle: PropTypes.string,
};

export default Title;
