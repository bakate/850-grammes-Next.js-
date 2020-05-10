import { Box, Button, Flex, Grid, PseudoBox, useColorMode } from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import { useInfos } from './context';

const Footer = () => {
  const { social } = useInfos();
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.500' };
  const color = { light: 'black', dark: 'white' };

  const socials = social.map(item => (
    <PseudoBox
      key={item.id}
      as={Button}
      cursor="pointer"
      transition="all .3s ease-in-out"
      _hover={{ color: 'orange.300' }}
    >
      <Link href={item.url} prefetch={false}>
        <a target="_blank" rel="noopener noreferrer">
          {item.icon}
        </a>
      </Link>
    </PseudoBox>
  ));
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      justifyContent="space-between"
      alignItems="center"
      p=".5rem 2rem"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Box>
        <h3>
          Copyright &copy; 850grammes {new Date().getFullYear()} all rights
          reserved papi
        </h3>
      </Box>
      <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
        {socials}
      </Flex>
    </Grid>
  );
};

export default Footer;
