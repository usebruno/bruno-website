// import 'tailwindcss/dist/tailwind.min.css';
import Head from 'next/head';
import ComparisionTable from 'components/ComparisionTable';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Home() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter'}} style={{maxWidth: '1024px'}}>
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
              An Opensouce API Client
            </h1>
            <p className="leading-normal text-lg mb-8 w-full">
              woof.. lets play with some api's
            </p>
            <button className="mx-auto  bg-transparent text-blue-dark font-semibold py-2 px-4 border border-gray-900 rounded">
              Download
            </button>
          </div>
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

      </main>
      <Footer/>
    </div>
  );
};
