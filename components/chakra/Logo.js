import { Image, LightMode, PseudoBox, useColorMode } from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  const { colorMode } = useColorMode();
  return (
    <LightMode>
      <PseudoBox _hover={{ cursor: 'pointer' }}>
        <Link href="/">
          <Image
            src="/850g.png"
            objectFit="cover"
            size="sm"
            pl={4}
            height={{ base: '80px', md: '100px' }}
            width={{ base: '100%', md: '90%' }}
          />
        </Link>
      </PseudoBox>
    </LightMode>
  );
};

export default Logo;
