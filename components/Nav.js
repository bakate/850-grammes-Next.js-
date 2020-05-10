/* eslint-disable react/display-name */
import { Box } from '@chakra-ui/core';
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
      justifyContent="space-around"
      textAlign={{ base: 'center' }}
      fontSize="1em"
    >
      {Object.entries(user).length > 0 && (
        <button type="button" style={{ color: 'orange' }}>
          {user?.user?.username}
        </button>
      )}
      <NavLinks href="/" title="accueil" />

      <MenuItems items={categories} />

      <NavLinks href="/about" title="La team" />

      <NavLinks href="/contact" title="contact" />

      {Object.entries(user).length > 0 || Object.entries(token).length > 0 ? (
        <button type="button" onClick={userLogout}>
          Se Deconnecter
        </button>
      ) : (
        <NavLinks href="/signup" title="S'inscrire" />
      )}
    </Box>
  );
};
export default Nav;
