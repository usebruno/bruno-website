import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet"/>

          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.usebruno.com/api/og" />
          <meta property="og:url" content="https://www.usebruno.com/" />
          <meta
            property="og:title"
            content="Bruno | Re-Inventing the API Client"
          />
          <meta
            property="og:description"
            content="Bruno is a Fast and Git-Friendly Opensource API client, aimed at revolutionizing the status quo represented by Postman, Insomnia and similar tools out there."
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://www.usebruno.com/" />
          <meta
            name="twitter:title"
            content="Bruno | Re-Inventing the API Client"
          />
          <meta
            name="twitter:description"
            content="Bruno is a Fast and Git-Friendly Opensource API client, aimed at revolutionizing the status quo represented by Postman, Insomnia and similar tools out there."
          />
          <meta name="twitter:image" content="https://www.usebruno.com/api/og" />

          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />}

          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
