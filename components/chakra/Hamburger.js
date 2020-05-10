import { Box } from '@chakra-ui/core';
import React from 'react';
import { useInfos } from '../context';

const Hamburger = () => {
  const { handleToggle } = useInfos();

  return (
    <Box
      display={{ sm: 'grid', md: 'none' }}
      justifySelf="end"
      onClick={handleToggle}
      // mt={{ base: 4, md: 0 }}
      // pr={{ base: 4, md: 4 }}
      px={{ base: '1.8rem' }}
      cursor="pointer"
    >
      <svg
        fill="orange"
        width="40px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </Box>
  );
};

export default Hamburger;
