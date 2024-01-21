import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import '../styles/markdown.css';

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PAYPAL_CLIENT_ID = 'ATDXVIF6j9IH_LFiDp1aPI-5sxmUtO3DL_GbmhBgHC9i2jFe8Af95z3huPvyAUZwuhLADABGBiqPgq2r';

import theme from '../themes/default';

function MyApp({ Component, pageProps }) {
  const paypalOptions = {
    "client-id": PAYPAL_CLIENT_ID,
    "enable-funding": "card",
    "disable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <ThemeProvider theme={theme}>
      <PayPalScriptProvider options={paypalOptions}>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </ThemeProvider>
  )
}

export default MyApp;
