import Head from 'next/head';
import ComparisionTable from 'components/ComparisionTable';
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

        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mt-10">
          <div className="flex flex-col w-full justify-center items-start text-center">
            <h1 className="my-4 text-4xl font-bold leading-tight w-full">
              A Local-first, Opensouce API Client
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
        </div>

        <div className='text-center w-full mt-6 justify-center flex items-center'>
          <a className='link justify-center flex items-center' href="https://www.youtube.com/watch?v=wwXJW7_qyLA" target="_blank" rel="noreferrer">
            <IconBrandYoutube /> <span className='ml-2'>Watch 4 min Demo Video</span>
          </a>
        </div>

        <div className="flex justify-center mt-10 mb-10 px-4">
          <img className="w-full" src="images/landing.png" />
        </div>

        <h1 className="my-4 text-2xl font-bold leading-tight w-full text-center">
          Comparision with Similar tools
        </h1>
        <p className="leading-normal text-lg mb-10 w-full text-center">
          Bruno is at early stages of development, and does not yet have all the bells and whistles. Here is a rundown of key areas where bruno is different from similar tools out there.
        </p>

        <ComparisionTable />

        <h1 className="mt-10 pt-4 mb-4 text-2xl font-bold leading-tight w-full text-center">
          BYOVC - Bring Your Own Version Control
        </h1>
        <div className='text-center m-auto' style={{maxWidth: 800}}>
          Bruno is built from the ground up with the Local-first paradigm in mind. This allows developers to directly store there collections on top of their local filesystem. The collections are mirrored as folders and files on the filesystem.
        </div>
        <div className="flex justify-center mt-10 mb-10 px-4">
          <img className="w-full" src="images/local-collections.png" />
        </div>

      </main>
      <Footer/>
    </div>
  );
};
