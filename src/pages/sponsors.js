import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Sponsors() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>Sponsors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-20">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Sponsors</h2>
            </div>

            <div>
              If you like Bruno and want to support our opensource work, consider sponsoring us via 
              <a
                href="https://github.com/sponsors/helloanoop"
                target="_blank"
                rel="noreferrer"
                className="font-medium mr-3 link hover:text-yellow-600 transition"
              >
                &nbsp;Github Sponsors.
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};
