import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`;

// import React from 'react'
// import StyledLink from '../components/StyledLink'

// export default () => (
//   <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
//     First post
//   </StyledLink>
// )
