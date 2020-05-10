import { IconButton } from '@chakra-ui/core';
import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { useInfos } from '../context';

function ScrollButton() {
  const { height } = useInfos();
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <IconButton
      opacity={height > 200 ? '1' : '0'}
      variant="outline"
      variantColor="red"
      ariaLabel="Scroll Up"
      fontSize="20px"
      position="fixed"
      right="1.5rem"
      bottom="1.5rem"
      zIndex="tooltip"
      icon={FaAngleDoubleUp}
      onClick={scrollBackToTop}
    />
  );
}
export default ScrollButton;
