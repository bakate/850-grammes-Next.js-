import { Select, useColorMode } from '@chakra-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItems = ({ items }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.400' };
  const color = { light: 'black', dark: 'white' };

  return (
    <Select
      placeholder="RECETTES"
      maxW="14rem"
      variant="filled"
      fontWeight="bold"
    >
      {items.map(item => (
        <Link
          href="/categories/[categorie]"
          as={`/categories/${item.id}`}
          key={item.id}
        >
          <option
            key={item.id}
            value={item.name}
            color={color[colorMode]}
            borderColor={bgColor[colorMode]}
            backgroundColor={bgColor[colorMode]}
            opacity=".5"
          >
            {item.name.toUpperCase()}
          </option>
        </Link>
      ))}
    </Select>
  );
};
MenuItems.propTypes = {
  items: PropTypes.array,
};
export default MenuItems;
