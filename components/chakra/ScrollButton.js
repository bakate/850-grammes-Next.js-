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
      variant="solid"
      variantColor="orange"
      ariaLabel="Scroll Up"
      size="sm"
      position="fixed"
      right=".8rem"
      bottom=".4rem"
      zIndex="tooltip"
      icon={FaAngleDoubleUp}
      onClick={scrollBackToTop}
    />
  );
}
export default ScrollButton;
