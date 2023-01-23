import Head from 'next/head';
import { IconWorld, IconBrandApple, IconBrandWindows, IconBrandUbuntu, IconBrandChrome, IconBrandDocker, IconDeviceDesktop } from "@tabler/icons";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Downloads() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>Bru language</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <h1 className="mt-4 text-2xl font-bold leading-tight w-full">
          Bru Markup Language
        </h1>

        <div className='mt-6'>
          Bru is a simple markup language that utilizes plain text files to document and organize information for your API requests.
        </div>

        <div className='mt-6'>
          The api requests in your collections are stored as plain text files using the Bru markup language.
        </div>
        
        <div className='mt-6'>
          This allows you to save your API collections in a folder within your code repository, and use your preferred version control system to manage and share them with your team. Collaboration on your API collections can be done through pull requests, as the human-readable file format makes it easy for developers to understand the changes made to the API collection.
        </div>
        
        {/* <div className='mt-6'>
          Below is a sample of a Bru file for a post request having some headers and json data.
        </div> */}
      </main>

      <Footer/>
    </div>
  );
};
