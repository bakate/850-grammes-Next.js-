import cogoToast from 'cogo-toast';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import styled from 'styled-components';
import { useInfos } from '../components/context/LocalState';
import FormStyles from '../components/styles/FormStyles';
import Title from '../components/Title';
import { signupUser } from '../lib/api';
import useForm from '../lib/useForm';

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`;

const SignUpPage = () => {
  const { userLogin } = useInfos();

  const { inputs, handleChange } = useForm({
    username: 'machin',
    email: 'machin@850g.com',
    password: 'azerty123',
  });

  // const strongRegex = new RegExp(
  //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  // );
  // const mediumRegex = new RegExp(
  //   '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
  // );

  const isEmpty = !inputs.username || !inputs.email || !inputs.password;
  // const isStrong = strongRegex.test.inputs?.password;
  // const isGoodEnough = mediumRegex.test.inputs?.password;
  // const colorProvider = {
  //   strong: '#96ce66',
  //   medium: '#ff9d00',
  //   weak: '',
  // };

  // const [background, setBackground] = useState(colorProvider);
  // if (isStrong) {
  //   return setBackground({ background: background.strong });
  // }
  // if (isGoodEnough) {
  //   return setBackground({ background: background.medium });
  // }

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await signupUser(
      inputs.username,
      inputs.email,
      inputs.password
    );
    await userLogin(res);
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
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
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
      cogoToast.info('Tu es d&eacute;j&agrave; logu&eacute; papi');
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
