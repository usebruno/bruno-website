import Head from 'next/head';
import Bruno from 'components/Bruno';
import Navbar from 'components/Navbar';
import GlobalStyle from '../globalStyles';

export default function PerpetualLicense() {
  return (
    <div className="container flex flex-col root buy-golden-edition-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>Perpetual License</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white pb-10" style={{maxWidth: 800}}>
          <h2 className="pb-10 mt-10 text-4xl tracking-tight font-extrabold text-gray-900">Perpetual Fallback License</h2>

          <p>
            A <span className='font-semibold'>perpetual fallback license</span> is a license that allows you to use a specific version of software without an active subscription for it.
          </p>

          <p className='mt-4'>
            When you purchase a <span className='font-semibold'>Bruno Golden Edition</span> license, you will be able to receive updates and support for <span className='font-semibold'>2 years</span>.
            After that, you can continue to use last version of the software you received <span className='font-semibold'>indefinitely</span>. <br />
          </p>
          <p className='mt-4'>
            If you want to receive updates and support after 2 years, you can renew your license at <span className='font-semibold'>60%</span> of the original purchase price.
          </p>
          <p className='mt-4'>
            Our choice to use a perpetual fallback license is to ensure that you can continue to use the Golden Edition features in Bruno even if you decide not to renew your license.
            Charging a renewal fee for updates and support after two years ensures our ability to continue to develop and maintain Bruno.
          </p>

          <p className='mt-8'>
            If you have any questions, you can reach us at support@usebruno.com
          </p>

          <div
            className="mt-8 border inline-flex flex py-2 px-4 rounded-lg text-sm"
            style={{ maxWidth: "max-content" }}
          >
            <div className='flex'>
              <Bruno width={45}/>
            </div>
            <div className="ml-3 flex flex-col">
              <p>
                Golden Edition can now be purchased at <span className="text-yellow-600 text-lg ">$19</span> !
              </p>
              <p>
                <a href="/buy-golden-edition" className="link">Buy Now!</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
};
