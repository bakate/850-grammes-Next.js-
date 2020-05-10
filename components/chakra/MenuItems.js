import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItems = ({ items }) => (
  // const { colorMode } = useColorMode();
  // const bgColor = { light: 'gray.50', dark: 'gray.400' };
  // const color = { light: 'black', dark: 'white' };
  <Menu>
    <MenuButton
      as={Button}
      textTransform="uppercase"
      transition="all 0.2s"
      rounded="md"
      borderWidth="1px"
      rightIcon="chevron-down"
      fontWeight="bold"
      opacity=".5"
      _hover={{ bg: 'gray.100', color: 'black' }}
      _expanded={{ bg: 'orange.500' }}
      _focus={{ outline: 0, boxShadow: 'outline' }}
    >
      RECETTES
    </MenuButton>
    <MenuList cursor="pointer">
      {items.map(item => (
        <Link
          key={item.id}
          href="/categories/[categorie]"
          as={`/categories/${item.id}`}
        >
          <MenuItem>
            <a>{item.name}</a>
          </MenuItem>
        </Link>
      ))}
    </MenuList>
  </Menu>
);
MenuItems.propTypes = {
  items: PropTypes.array,
};
export default MenuItems;
