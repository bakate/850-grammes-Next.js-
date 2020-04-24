import React from 'react';
import FormStyles from './styles/FormStyles';
import Title from './Title';

const Contact = () => (
  <FormStyles action="https://formspree.io/mgeljqko" method="POST">
    <fieldset>
      <Title title="Prendre contact avec la team 850grammes" center />
      <label htmlFor="name">
        Nom
        <input
          type="name"
          name="name"
          placeholder="comment est-ce qu'on doit t'appeler ?"
          // value={inputs.name}
          // onChange={handleChange}
          autoComplete="name"
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          name="email"
          placeholder="machin@email.com"
          // value={inputs.email}
          // onChange={handleChange}
          autoComplete="email"
        />
      </label>
      <label htmlFor="subject">
        Sujet
        <input
          type="subject"
          name="subject"
          placeholder="important!!!"
          // value={inputs.name}
          // onChange={handleChange}
          autoComplete="subject"
        />
      </label>
      <label htmlFor="textarea">
        Message
        <textarea
          rows="10"
          name="message"
          placeholder="Sois Synth&eacute;tique Please"
          // value={inputs.name}
          // onChange={handleChange}
          autoComplete="name"
        />
      </label>
      <button type="submit">Envoyer</button>
    </fieldset>
  </FormStyles>
);

export default Contact;
