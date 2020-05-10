import App from 'next/app';
import React from 'react';
// import withData from '../lib/withData';
import { InfoStateProvider } from '../components/context';
import Page from '../components/Page';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <InfoStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </InfoStateProvider>
    );
  }
}
