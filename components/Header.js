import { Grid, useColorMode } from '@chakra-ui/core';
import Router from 'next/router';
import NProgress from 'nprogress';
import DarkModeSwitch from './chakra/DarkModeSwitch';
import Hamburger from './chakra/Hamburger';
import Logo from './chakra/Logo';
import Nav from './Nav';
import AutoComplete from './Search';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.500' };
  const color = { light: 'black', dark: 'white' };

  return (
    <>
      <Grid
        color={color[colorMode]}
        bg={bgColor[colorMode]}
        templateColumns={{ base: '1fr', md: '25% 25% 50%' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <AutoComplete />
        <Nav />
        <Hamburger />
        <DarkModeSwitch />
      </Grid>
    </>
  );
};

export default Header;
