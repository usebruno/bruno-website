import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Link from 'next/link';
import GlobalStyle from '../globalStyles';

export default function Home() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>bruno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <section className="bg-white">
          <div className="max-w-screen-xl pt-8 pb-8 mx-auto lg:pt-14">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl mb-10 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
                Fast, Git Friendly API Client
              </h1>
              <p className="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Bruno is a new and innovative opensource API client, aimed at revolutionizing the status quo represented by Postman and similar tools out there. <br /><br />
                Bruno stores your collections directly in a folder on your filesystem. We use a plain text markup language, Bru, to save information about API requests. <br /><br />
                You can use git or any version control of your choice to collaborate over your api collections.
              </p>
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="https://github.com/usebruno/bruno" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span className='ml-3'>View On Github</span>
                </a> 
                <a href="https://www.youtube.com/watch?v=b_ctmKlEOXg" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                  <span className='ml-3'>Watch Demo</span>
                </a>
                {/* <Link href="/bru">
                  <a href="" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                    <svg id="emoji" width="30" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                      <g id="color">
                        <path fill="#F4AA41" stroke="none" d="M23.5,14.5855l-4.5,1.75l-7.25,8.5l-4.5,10.75l2,5.25c1.2554,3.7911,3.5231,7.1832,7.25,10l2.5-3.3333 c0,0,3.8218,7.7098,10.7384,8.9598c0,0,10.2616,1.936,15.5949-0.8765c3.4203-1.8037,4.4167-4.4167,4.4167-4.4167l3.4167-3.4167 l1.5833,2.3333l2.0833-0.0833l5.4167-7.25L64,37.3355l-0.1667-4.5l-2.3333-5.5l-4.8333-7.4167c0,0-2.6667-4.9167-8.1667-3.9167 c0,0-6.5-4.8333-11.8333-4.0833S32.0833,10.6688,23.5,14.5855z"/>
                        <polygon fill="#EA5A47" stroke="none" points="36,47.2521 32.9167,49.6688 30.4167,49.6688 30.3333,53.5021 31.0833,57.0021 32.1667,58.9188 35,60.4188 39.5833,59.8355 41.1667,58.0855 42.1667,53.8355 41.9167,49.8355 39.9167,50.0855"/>
                        <polygon fill="#3F3F3F" stroke="none" points="32.5,36.9188 30.9167,40.6688 33.0833,41.9188 34.3333,42.4188 38.6667,42.5855 41.5833,40.3355 39.8333,37.0855"/>
                      </g>
                      <g id="hair"/>
                      <g id="skin"/>
                      <g id="skin-shadow"/>
                      <g id="line">
                        <path fill="#000000" stroke="none" d="M29.5059,30.1088c0,0-1.8051,1.2424-2.7484,0.6679c-0.9434-0.5745-1.2424-1.8051-0.6679-2.7484 s1.805-1.2424,2.7484-0.6679S29.5059,30.1088,29.5059,30.1088z"/>
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M33.1089,37.006h6.1457c0.4011,0,0.7634,0.2397,0.9203,0.6089l1.1579,2.7245l-2.1792,1.1456 c-0.6156,0.3236-1.3654-0.0645-1.4567-0.754"/>
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M34.7606,40.763c-0.1132,0.6268-0.7757,0.9895-1.3647,0.7471l-2.3132-0.952l1.0899-2.9035 c0.1465-0.3901,0.5195-0.6486,0.9362-0.6486"/>
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M30.4364,50.0268c0,0-0.7187,8.7934,3.0072,9.9375c2.6459,0.8125,5.1497,0.5324,6.0625-0.25 c0.875-0.75,2.6323-4.4741,1.8267-9.6875"/>
                        <path fill="#000000" stroke="none" d="M44.2636,30.1088c0,0,1.805,1.2424,2.7484,0.6679c0.9434-0.5745,1.2424-1.8051,0.6679-2.7484 c-0.5745-0.9434-1.805-1.2424-2.7484-0.6679C43.9881,27.9349,44.2636,30.1088,44.2636,30.1088z"/>
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M25.6245,42.8393c-0.475,3.6024,2.2343,5.7505,4.2847,6.8414c1.1968,0.6367,2.6508,0.5182,3.7176-0.3181l2.581-2.0233l2.581,2.0233 c1.0669,0.8363,2.5209,0.9548,3.7176,0.3181c2.0504-1.0909,4.7597-3.239,4.2847-6.8414"/>
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M19.9509,28.3572c-2.3166,5.1597-0.5084,13.0249,0.119,15.3759c0.122,0.4571,0.0755,0.9355-0.1271,1.3631l-1.9874,4.1937 c-0.623,1.3146-2.3934,1.5533-3.331,0.4409c-3.1921-3.7871-8.5584-11.3899-6.5486-16.686 c7.0625-18.6104,15.8677-18.1429,15.8677-18.1429c2.8453-1.9336,13.1042-6.9375,24.8125,0.875c0,0,8.6323-1.7175,14.9375,16.9375 c1.8036,5.3362-3.4297,12.8668-6.5506,16.6442c-0.9312,1.127-2.7162,0.8939-3.3423-0.4272l-1.9741-4.1656 c-0.2026-0.4275-0.2491-0.906-0.1271-1.3631c0.6275-2.3509,2.4356-10.2161,0.119-15.3759"/>
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M52.6309,46.4628c0,0-3.0781,6.7216-7.8049,8.2712"/>
                        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M19.437,46.969c0,0,3.0781,6.0823,7.8049,7.632"/>
                        <line x1="36.2078" x2="36.2078" y1="47.3393" y2="44.3093" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                      </g>
                    </svg>
                    <span className='ml-3'>vs Postman</span>
                  </a>
                </Link> */}
              </div>
              <div className="flex justify-center mt-6">
                <img className="w-full" src="images/landing-2.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-screen-xl pt-10 pb-2 mx-auto lg:pt-10">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
                Testimonials
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mx-auto max-w-7xl sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/rosh.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/power-tester.png" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
              <img className="mb-4" src="images/testimonials/barath.png" />
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
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};
