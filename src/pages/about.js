import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function About() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-20">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Team</h2>
              <p className="mb-5 font-light text-gray-500 sm:text-lg">
                We are on a <a href="https://github.com/usebruno/bruno/discussions/269" target="_blank" rel="noreferrer" className='link'>journey</a> to re-invent the api client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Anoop M D */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 pb-0">
                  <h2 className="text-2xl font-semibold">Anoop</h2>
                  <p className="text-gray-600">Creator and Lead Maintainer of Bruno</p>
                </div>
                <img
                  src="images/team/anoop.png"
                  alt="Anoop M D"
                  className="w-full"
                />
              </div>

              {/* Bruno */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 pb-0">
                  <h2 className="text-2xl font-semibold">Bruno</h2>
                  <p className="text-gray-600">Chief Joy Officer</p>
                </div>
                <img
                  src="images/team/bruno.png"
                  alt="Bruno"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-14 mt-20 text-4xl text-center tracking-tight font-extrabold text-gray-900">Opensource Contributors</h2>
              <img
                src="https://contrib.rocks/image?repo=usebruno/bruno"
                alt="Contributors"
                className="cursor-pointer"
                onClick={() => window.open("https://github.com/usebruno/bruno/graphs/contributors")}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};
