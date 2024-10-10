import { ThemeProvider } from 'styled-components';
import getConfig from 'next/config';
import '../styles/globals.css';
import '../styles/markdown.css';

const { publicRuntimeConfig } = getConfig();

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PAYPAL_CLIENT_ID = publicRuntimeConfig.PAYPAL_CLIENT_ID;

import theme from '../themes/default';

function MyApp({ Component, pageProps }) {
  const paypalOptions = {
    'client-id': PAYPAL_CLIENT_ID,
    'enable-funding': 'card',
    'disable-funding': 'paylater,venmo',
    'data-sdk-integration-source': 'integrationbuilder_sc',
  };

  return (
    <ThemeProvider theme={theme}>
      <PayPalScriptProvider options={paypalOptions}>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </ThemeProvider>
  );
}

export default MyApp;
