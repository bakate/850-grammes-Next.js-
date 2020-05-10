import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core';
import cogoToast from 'cogo-toast';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Title from '../components/Title';

const SignUpPage = () => (
  <Box maxW="700px" mx="auto">
    <Title title="Se cr&eacute;er un compte ou S'inscrire" center />
    <Tabs isFitted variant="enclosed-colored" m={2} w="100%" my={4}>
      <TabList mt={3}>
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

export default SignUpPage;
