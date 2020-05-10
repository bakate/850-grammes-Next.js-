import { Box, Grid, Heading, Text } from '@chakra-ui/core';
import React from 'react';

const Footer = () => (
  <Grid
    as="footer"
    templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
    p={6}
    gap="2rem"
    backgroundColor="black"
    color="white"
    alignItems="start"
    justifyItems="center"
    justifyContent="stretch"
    bgImage="url('/images/clubelec-wharehouse.jpg')"
    bgPos={{ base: '30% 70%', md: '20% 80%' }}
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <Box fontWeight="bold">
      <Heading as="h3"> Si&egrave;ge social :</Heading>

      <Text>CLUB ELECTRONICS Sarl Le Volta -</Text>
      <Text>17 rue Jeanne Braconnier 92360 Meudon France</Text>

      <Text>T&eacute;l : 01 58 17 15 15 </Text>
      <Text>Fax : 01 58 17 15 16 </Text>
    </Box>
    <Box fontWeight="bold">
      <Heading as="h3">Agence Ouest :</Heading>
      <Text>CLUB ELECTRONICS ZI de la Ville Es Passants II -</Text>
      <Text>rue des Fr&eacute;res Boussac 35800 DINARD France</Text>
      <Text>T&eacute;l. : 02 99 16 07 70</Text>
      <Text>Fax : 02 99 46 90 96</Text>
    </Box>
  </Grid>
);

export default Footer;
