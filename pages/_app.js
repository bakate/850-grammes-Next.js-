import App from 'next/app';
import React from 'react';
import Page from '../components/Page';
// import withData from '../lib/withData';
import { InfoStateProvider } from './api/LocalState';

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
