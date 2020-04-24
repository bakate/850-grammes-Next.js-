import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contactPage = () => (
  <>
    <Hero img="/contact.jpg">
      <h2 style={{ textTransform: 'uppercase' }}>Une information ?</h2>
    </Hero>
    <Contact />
  </>
);

export default contactPage;
