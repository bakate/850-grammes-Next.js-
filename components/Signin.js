import React from 'react';
// import { useMutation, gql } from '@apollo/client';
import FormStyles from './styles/FormStyles';
import useForm from '../lib/useForm';
// import { CURRENT_USER_QUERY } from './User';

import Title from './Title';

// TODO! Go further
// const SIGNIN_MUTATION = gql`
//   mutation SIGNIN_MUTATION($email: String!, $password: String!) {
//     login(input: { identifier: $email, password: $password }) {
//       user {
//         username
//         email
//         id
//       }
//       jwt
//     }
//   }
// `;

const Signin = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: 'bb@gmail.com',
    password: '123456',
  });
  // const [signin, { error, loading, data }] = useMutation(SIGNIN_MUTATION, {
  //   variables: inputs,
  //   refetchQueries: [{ query: CURRENT_USER_QUERY }],
  // });

  return (
    <FormStyles
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        // await signin();
        resetForm();
      }}
    >
      <fieldset>
        <Title title="Se Connecter" center />
        {/* {data && cogoToast.success('Heureux de te revoir')} */}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            autoComplete="password"
          />
        </label>
        <button type="submit">Se Connecter!</button>
      </fieldset>
    </FormStyles>
  );
};

export default Signin;
