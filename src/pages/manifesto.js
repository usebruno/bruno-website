import Head from 'next/head';
import { IconWorld, IconBrandApple, IconBrandWindows, IconBrandUbuntu, IconBrandChrome, IconBrandDocker, IconDeviceDesktop } from "@tabler/icons";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Manifesto() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>Manifesto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <h1 className="mt-4 text-2xl font-bold leading-tight w-full">
        Manifesto
        </h1>

        <div className='mt-10'>
          It's time for a revolution in API client technology. The status quo, represented by Postman, has become bloated and unwieldy. We refuse to be shoehorned into a proprietary version control system for collaborating on API collections.
        </div>

        <div className='mt-6'>
          We are an opensource project, rising up against the monopoly of bloated and closed systems. We believe that API collections should be co-located within your source code repository, serving as a living set of examples on how to use the API.
        </div>

        <div className='mt-6'>
          But we realized that the current tools on the market export collections as giant JSON files (a.k.a ugly blobs), difficult to version control and diff. So we created the Bru Markup language, saving information about your API requests using plain text files.
        </div>

        <div className='mt-6'>
          With Bruno, collections become first-class citizens, co-located with related information and easily version controlled. We say goodbye to bloated workspaces and global environments, and embrace the benefits of co-location.
        </div>

        <div className='mt-6'>
          We dream of a world where developers can clone a code repo, get it up and running, use bruno to browse the examples on how to use the api and start playing with it. No more horror stories of <i>"Tim had the collections for the payment-api service, but he left the company last month."</i>
        </div>

        <div className='mt-6'>
          Join us in our mission to create a better API client for developers. Say goodbye to bloatware and hello to simplicity, efficiency and freedom. Try Bruno today and experience the difference for yourself.
        </div>
      </main>

      <Footer/>
    </div>
  );
};
