import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Support() {
  return (
    <div
      className="container flex flex-col root home-page"
      style={{ fontFamily: 'Inter', maxWidth: '1280px' }}
    >
      <Head>
        <title>Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white">
          <div className="py-8 max-w-screen-xl lg:pb-16">
            <div className="max-w-screen-md mb-8">
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">
                We're here to help
              </h2>
            </div>

            <div className="bg-white py-4 rounded-md">
              <h2 className="text-lg font-semibold mb-4">
                Contact Information
              </h2>

              <h2 className="text-lg font-semibold mb-2">Support</h2>
              <p>
                For product support and issues, please reach us at -
                support@usebruno.com
              </p>

              <h2 className="text-lg font-semibold mt-2 mb-2">Sales</h2>
              <p>
                For sales enquiries, please reach us at - sales@usebruno.com
              </p>
            </div>

            <div className="bg-white py-4 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Address</h2>
              <h2 className="font-medium mb-2">
                Bruno (Notebase Technologies LLP)
              </h2>
              <p className="mt-2">1241, 4th cross, 2nd Block, BDA Layout</p>
              <p>BTM 4th Stage</p>
              <p>Bangalore - 560076</p>
              <p>Karnataka, India</p>

              <p className="text-sm text-gray-600 mt-4">LLP ID: AAZ-0774</p>
              <p className="text-sm text-gray-600">GSTIN: 29AATFN4074E1ZU</p>
              <p className="text-sm text-gray-600">IEC Code: AATFN4074E</p>
              <p className="text-sm text-gray-600">
                LUT Number: AD290124038597T
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
