import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Support () {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white">
          <div className="py-8 max-w-screen-xl lg:pb-16">
            <div className="max-w-screen-md mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">We're here to help</h2>
            </div>

            <div className="bg-white py-4 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Notebase Technologies LLP</h2>
              <p>LLP ID: AAZ-0774</p>
            </div>

            <div className="mt-4 bg-white py-4 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Address</h2>
              <p>47, SNIJA Nivas</p>
              <p>13th Cross, Anepalya, Adugodi</p>
              <p>Bangalore - 560030</p>
              <p>Karnataka, India</p>
            </div>


            <div className="mt-4 bg-white py-4 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
              <p>You can write out to us at - support@usebruno.com</p>
              <p>Or call us at - +91 9035005521</p>

            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};
