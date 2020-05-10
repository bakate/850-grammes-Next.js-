import { PseudoBox } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

const NavLinks = ({ href, title }) => {
  const router = useRouter();

  return (
    <PseudoBox
      fontWeight="bold"
      cursor="pointer"
      pos="relative"
      textTransform="uppercase"
      justifySelf="flex-start"
      opacity={router.pathname === href ? 1 : 0.5}
      _hover={{ borderBottom: '2px solid', borderBottomColor: 'orange.300' }}
    >
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </PseudoBox>
  );
};

NavLinks.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLinks;
