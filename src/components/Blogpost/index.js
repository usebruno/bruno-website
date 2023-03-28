import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../../globalStyles';
import StyledWrapper from './StyledWrapper';

export default function Layout({ title, keywords, description, children }) {
  return (
    <StyledWrapper className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />
        <div className="page page-blog">{children}</div>
      </main>
      <Footer/>
    </StyledWrapper>
  );
};
