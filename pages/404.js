/* eslint-disable react/display-name */
import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';

export default () => (
  <>
    <Hero img="/kid.jpg">
      <h2 style={{ textTransform: 'uppercase' }}>
        Oups! Tu Fais du Hors Piste{' '}
      </h2>
      <Link href="/">
        <a className="main-link" style={{ marginTop: '2rem' }}>
          Retour àla maison
        </a>
      </Link>
    </Hero>
  </>
);
