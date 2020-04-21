import App from 'next/app';
import React from 'react';
import Page from '../components/Page';
// import withData from '../lib/withData';
import { CartStateProvider } from './context/LocalState';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    );
  }
}
