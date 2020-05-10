import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core';
import cogoToast from 'cogo-toast';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Title from '../components/Title';

const SignUpPage = () => (
  <Box maxW="700px" mx="auto">
    <Title title="Se cr&eacute;er un compte ou S'inscrire" center withRow />
    <Tabs isFitted variant="enclosed-colored" m={2} w="100%" my={4}>
      <TabList pt={3}>
        <Tab rounded="md">Sign up</Tab>
        <Tab rounded="md">Login</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Signup />
        </TabPanel>
        <TabPanel>
          <Signin />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

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
