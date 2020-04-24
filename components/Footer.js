import Link from 'next/link';
import React from 'react';
import { useInfos } from '../pages/api/LocalState';
import FooterStyles from './styles/FooterStyles';

const Footer = () => {
  const { social } = useInfos();

  const socials = social.map(item => (
    <Link href={item.url} key={item.id} prefetch={false}>
      <a target="_blank">{item.icon}</a>
    </Link>
  ));
  return (
    <FooterStyles>
      <div className="content">
        <p>
          Copyright &copy; 850grammes {new Date().getFullYear()} all rights
          reserved papi
        </p>
      </div>
      <div className="logos">{socials}</div>
    </FooterStyles>
  );
};

export default Footer;
