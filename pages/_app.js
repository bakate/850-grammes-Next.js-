import Page from '../components/Page';
// import withData from '../lib/withData';
import { CartStateProvider } from '../components/context/LocalState';

function MyApp({ Component, pageProps }) {
  return (
    <CartStateProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </CartStateProvider>
  );
}

export default MyApp;
