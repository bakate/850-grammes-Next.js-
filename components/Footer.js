import Link from 'next/link';
import React from 'react';
import { useInfos } from './context/LocalState';
import FooterStyles from './styles/FooterStyles';

const Footer = () => {
  const { social } = useInfos();

  const socials = social.map(item => (
    <Link href={item.url} key={item.id} prefetch={false}>
      <a target="_blank" rel="noopener noreferrer">
        {item.icon}
      </a>
    </Link>
  ));
  return (
    <FooterStyles>
      <div className="content">
        <h3>
          Copyright &copy; 850grammes {new Date().getFullYear()} all rights
          reserved papi
        </h3>
      </div>
      <div className="logos">{socials}</div>
    </FooterStyles>
  );
};

export default Footer;
