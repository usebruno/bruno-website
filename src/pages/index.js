import Head from 'next/head';
import Bruno from 'components/Bruno';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Link from 'next/link';
import GlobalStyle from '../globalStyles';

export default function Home() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>bruno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white">
          <div className="max-w-screen-xl pt-8 pb-8 mx-auto lg:pt-14">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl mb-10 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
                Re-Inventing the API Client
              </h1>
              <p className="mb-6 lg:mb-8 text-lg" style={{maxWidth: '1024px'}}>
                Bruno is a Fast and Git-Friendly Opensource API client, aimed at revolutionizing the status quo represented by Postman, Insomnia and similar tools out there. <br /><br />
                Bruno stores your collections directly in a folder on your filesystem. We use a plain text markup language, Bru, to save information about API requests. <br /><br />
                You can use git or any version control of your choice to collaborate over your API collections. <br /><br />

                Bruno is offline-only. There are no plans to add cloud-sync to Bruno, ever. We value your data privacy and believe it should stay on your device. Read our long-term vision <a href="https://github.com/usebruno/bruno/discussions/269" target="_blank" rel="noreferrer" className='link'>here</a>.
              </p>

              <div className="mb-8 border inline-flex py-2 px-4 rounded-lg text-sm">
                <div className='flex'>
                  <Bruno width={45}/>
                </div>
                <div className="ml-3 flex flex-col">
                  <p>
                    Golden Edition now available at <span className="text-yellow-600 text-lg ">$19</span> !
                  </p>
                  <p>
                    <a href="/pricing" className="link">Buy Now!</a>
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="https://github.com/usebruno/bruno" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span className='ml-3'>View On GitHub</span>
                </a>
                <a href="https://www.youtube.com/watch?v=b_ctmKlEOXg" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                  <span className='ml-3'>Watch Demo</span>
                </a>
                <a href="https://www.youtube.com/watch?v=7bSMFpbcPiY" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                  <span className='ml-3'>IndiaFOSS 3.0 Talk</span>
                </a>
                <Link href="/compare/bruno-vs-postman" legacyBehavior>
                  <a className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition">
                    <Bruno width={30}/>
                    <span className='ml-3'>vs Postman</span>
                  </a>
                </Link>
              </div>
              <div className="flex justify-center mt-6">
                <img className="w-full" src="images/landing-2.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-screen-xl pt-8 pb-4 mx-auto lg:pt-14">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl text-4xl font-bold leading-none tracking-tight md:text-5xl">
                Run across multiple platforms
              </h1>
            </div>
          </div>
          <div className="flex mt-6">
            <img src="images/run-anywhere.png" />
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-screen-xl pt-8 pb-4 mx-auto lg:pt-14">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl text-4xl font-bold leading-none tracking-tight md:text-5xl">
                Collaborate via Git
              </h1>
              <h3 className="mt-4 max-w-3xl text-xl leading-none tracking-tight">
                &nbsp;Or any version control system of your choice
              </h3>
            </div>
          </div>
          <div className="flex mt-2">
            <img src="images/version-control.png" />
          </div>
        </section>

        <section className="bg-white mt-4">
          <div className="max-w-screen-xl pt-10 pb-2 mx-auto lg:pt-10">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl text-4xl mb-2 font-bold leading-none tracking-tight md:text-5xl">
                Testimonials
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mx-auto max-w-7xl sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/rosh.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/ramiawar2.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/lonewalk.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/ptrdlbrg.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/arnaud.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/tobias.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/daputzy.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/NooclearWessel.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/matthewtrow5698.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/sumit.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/retrocoder.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/lasko.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/ramiawar.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/barath.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/power-tester.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/vysakh.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/vijay.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/david.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/nesbert.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/DivyMohan.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/sudeep.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/bramhoven.png" />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};
