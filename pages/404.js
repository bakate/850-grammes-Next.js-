/* eslint-disable react/display-name */
import { Button } from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import Hero from '../components/Hero';

export default () => (
  <>
    <Hero
      img="url('/kid.jpg')"
      title="Oups! Tu Fais du Hors Piste"
      blackColor="orange.300"
    >
      <Link href="/">
        <Button
          mt="2rem"
          leftIcon="arrow-left"
          variant="link"
          variantColor="black"
          size="lg"
        >
          Retour &Agrave; la Maison
        </Button>
      </Link>
    </Hero>
  </>
);
