/* eslint-disable react/display-name */
import { Box, Button } from '@chakra-ui/core';
import { parseCookies } from 'nookies';
import React from 'react';
import MenuItems from './chakra/MenuItems';
import NavLinks from './chakra/NavLinks';
import { useInfos } from './context';

const token = parseCookies('fromClientSide');
// console.log(token);

const Nav = () => {
  const { user, userLogout, show, categories } = useInfos();

  return (
    // <NavStyles>
    <Box
      display={{ base: show ? 'block' : 'none', md: 'flex' }}
      alignItems="center"
      justifyContent="space-evenly"
      textAlign={{ base: 'center' }}
      fontSize="1em"
    >
      {Object.entries(user).length > 0 && (
        <Button
          variant="ghost"
          variantColor="orange"
          textTransform="uppercase"
          opacity=".5"
        >
          {user?.user?.username}
        </Button>
      )}
      <NavLinks href="/" title="accueil" />

      <MenuItems items={categories} />

      <NavLinks href="/about" title="La team" />

      <NavLinks href="/contact" title="contact" />

      {Object.entries(user).length > 0 || Object.entries(token).length > 0 ? (
        <Button
          type="button"
          onClick={userLogout}
          variant="ghost"
          variantColor="orange"
          textTransform="uppercase"
          cursor="pointer"
        >
          Deconnexion
        </Button>
      ) : (
        <NavLinks href="/signup" title="S'inscrire" />
      )}
    </Box>
  );
};
export default Nav;
