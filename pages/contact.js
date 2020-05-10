import { Button } from '@chakra-ui/core';
import React from 'react';
import FormInputs from '../components/chakra/FormInputs';
import Formify from '../components/Form';
import Hero from '../components/Hero';
import Title from '../components/Title';

const contactPage = () => (
  <>
    <Hero img="url('/contact.jpg')" title="Une information ?" />
    <form action="https://formspree.io/mgeljqko" method="POST">
      <Formify txtHelper="Il se peut que je revende tes donn&eacute;es">
        <Title title="prendre contact Avec la team 850grammes" center />
        <FormInputs
          iconName="info-outline"
          label="Nom"
          type="text"
          placeholder="comment est-ce qu'on doit t'appeler"
        />
        <FormInputs
          iconName="email"
          label="Email"
          type="email"
          placeholder="machin@gmail.com?"
        />
        <FormInputs
          iconName="question-outline"
          label="Sujet"
          type="text"
          placeholder="important!!"
        />
        <FormInputs
          label="Commentaires"
          type="textarea"
          textHelper
          buttonCta="oh lalala"
          tareaPlaceholder="Sois Synth&eacute;thique please"
        />
        <Button
          boxShadow="lg"
          type="submit"
          mx="auto"
          variant="solid"
          variantColor="orange"
          _active={{ boxShadow: 'lg' }}
        >
          C'est Parti
        </Button>
      </Formify>
    </form>
  </>
);

export default contactPage;
