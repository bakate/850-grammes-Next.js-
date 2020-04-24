import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contact = () => (
  <>
    <Hero img="/contact.jpg">
      <h2 style={{ textTransform: 'uppercase' }}>Une information ?</h2>
    </Hero>
    <Contact />
  </>
);

export default contact;
