import cogoToast from 'cogo-toast';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import styled from 'styled-components';
import { useInfos } from '../components/context/LocalState';
import FormStyles from '../components/styles/FormStyles';
import Title from '../components/Title';
import { signupUser } from '../lib/api';
import useForm from '../lib/useForm';
// import { useState, useEffect } from 'react';

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`;

const SignUpPage = () => {
  const { userLogin } = useInfos();
  //   const [authenticated, setAuthenticated] = useState(initialState)
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const { inputs, handleChange, clearForm } = useForm({
    username: 'machin',
    email: 'machin@850g.com',
    password: 'azerty123',
  });

  const isEmpty = !inputs.username || !inputs.email || !inputs.password;

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await signupUser(
      inputs.username,
      inputs.email,
      inputs.password
    );
    await userLogin(res);
    // setCookie(null, 'fromClientSide', res.jwt, {
    //   maxAge: 30 * 24 * 60 * 60,
    //   path: '/',
    // });
    // setUser(res.jwt);
    // if (res.jwt) {
    //   Router.push('/');
    //   cogoToast.success(
    //     <div>
    //       <b>Trop Bien {res.user.username}!</b>
    //       <div>Enjoy!!</div>
    //     </div>
    //   );
    // }
    clearForm();
  };
  return (
    <Column>
      <FormStyles method="post" onSubmit={handleSubmit}>
        <fieldset>
          <Title title="Se cr&eacute;er un Compte" center />

          {isEmpty && (
            <p className="form-empty">Pense &agrave; remplir tous les champs</p>
          )}
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              autoComplete="name"
            />
          </label>
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
              autoComplete="new-password"
            />
          </label>
          {!isEmpty && <button type="submit">S'inscrire!</button>}
        </fieldset>
      </FormStyles>
    </Column>
  );
};

// export async function getServerSideProps(ctx) {
//   const isAuthenticated = parseCookies(ctx).fromClientSide;
//   if (!!isAuthenticated && ['/signup', '/signin'].indexOf(ctx.asPath) > -1) {
//     if (!ctx.req) {
//       // client-side
//       Router.replace('/');
//       cogoToast.info('Tu es deja loguee papi');
//     }
//     if (ctx.req) {
//       ctx.res.writeHead(301, {
//         Location: '/',
//       });
//       ctx.res.end();
//       isAuthenticated();
//     }
//   }
//   return { props: { isAuthenticated } };
// }

SignUpPage.getInitialProps = async ctx => {
  const isAuthenticated = !!parseCookies(ctx).fromClientSide;

  if (isAuthenticated && ['/signup'].indexOf(ctx.asPath) > -1) {
    if (!ctx.req) {
      // client-side
      Router.replace('/');
      cogoToast.info('Tu es deja logu&eacute; papi');
    }
    if (ctx.req) {
      ctx.res.writeHead(302, {
        Location: '/',
      });
      ctx.res.end();
    }
  }
  return { isAuthenticated };
};
// SignUpPage.getInitialProps = async ctx => {
//   const another = await getSecretData(ctx.req);

//   return { superValue: another };
// };

export default SignUpPage;
