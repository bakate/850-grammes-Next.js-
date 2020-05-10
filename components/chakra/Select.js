import { Box, Select, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { useInfos } from '../context';

const Countries = () => {
  const { show } = useInfos();
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.800' };
  const textColor = { light: 'black', dark: 'white' };

  return (
    <Box
      display={{ sm: show ? 'block' : 'none', md: 'grid' }}
      justifySelf="center"
      textAlign="center"
      // maxW="200px"
      mt={{ base: 4, md: 0 }}
      pr={{ base: 8, md: 12 }}
    >
      <Select
        bg={bgColor[colorMode]}
        opacity=".5"
        fontWeight="bold"
        color={textColor[colorMode]}
        textTransform="uppercase"
      >
        <option value="french">Fran&ccedil;ais</option>
        <option value="english">Anglais</option>
        <option value="spanish">Espagnol</option>
        <option value="itialian">Italien</option>
        <option value="chinese">Chinois</option>
      </Select>
    </Box>
  );
};

export default Countries;
