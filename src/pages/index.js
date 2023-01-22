import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Link from 'next/link';
import { IconBrandYoutube } from '@tabler/icons';
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

        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl pt-8 pb-8 mx-auto lg:py-12 lg:pt-20">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Stop searching for lost api collections.</h1>
              <p className="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Developers will no longer ask "Can you share a postman/x collection for this service <br/><br/>
                It will reside where it was destined to reside.<br/>
                Alongside your source code.
              </p>
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="https://github.com/usebruno/bruno" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span className='ml-3'>View On Github</span>
                </a> 
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl pt-10 pb-8 mx-auto lg:py-16 lg:pt-10">
            <div className="mr-auto place-self-center">
              <h1 className="max-w-3xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Introducing Bruno
              </h1>
              <p className="max-w-3xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                An Opensource IDE for exploring and testing Api's <br/><br/>
                
                Previous attempts at integrating API collections into source code have fallen short, hindered by clunky user interfaces and inadequate file designs. <br /><br />
                Bruno breaks through these barriers with sleek and intuitive user interface, and a well-designed, extensible file format
              </p>
            </div>
          </div>
        </section>

        {/* <section className="bg-gray-50 dark:bg-gray-800">
          Hello
        </section> */}

        {/* <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mt-10">
          <div className="flex flex-col w-full justify-center items-start text-center">
            <h1 className="my-4 text-4xl font-bold leading-tight w-full">
              Opensource IDE for exploring and testing api&apos;s.
            </h1>
            <p className="leading-normal text-lg mb-8 w-full">
              woof.. lets play with some api&apos;s
            </p>
            <div className='w-full flex items-center justify-center'>
              <Link href="/downloads">
                <button className="bg-transparent text-blue-dark font-semibold py-2 px-4 border border-gray-900 rounded">
                  Download
                </button>
              </Link>
            </div>
          </div>
        </div> */}

        <div className="flex justify-center mb-10">
          <img className="w-full" src="images/landing-2.png" />
        </div>

        {/* <h1 className="mt-10 pt-4 mb-4 text-2xl font-bold leading-tight w-full text-center">
          BYOVC - Bring Your Own Version Control
        </h1>
        <div className='text-center m-auto' style={{maxWidth: 800}}>
          Bruno is built from the ground up with the Local-first paradigm in mind. This allows developers to directly store there collections on top of their local filesystem. The collections are mirrored as folders and files on the filesystem.
        </div>
        <div className="flex justify-center mt-10 mb-10 px-4">
          <img className="w-full" src="images/local-collections.png" />
        </div> */}

      </main>
      <Footer/>
    </div>
  );
};
