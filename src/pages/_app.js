import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import '../styles/markdown.css';

import theme from '../themes/default';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp;
