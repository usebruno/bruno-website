import Head from 'next/head';
import Link from 'next/link';
import Bruno from 'components/Bruno';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../../globalStyles';

export default function CompareBrunoVsPostman() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>Bruno Vs Postman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <h1 className="mt-4 text-2xl font-bold leading-tight w-full">
          Bruno Vs Postman
        </h1>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          How collections are saved
        </h2>
        <div className='mt-6'>
          Imagine if your entire code is one single file, and you are forced to use a <a className='link' href="https://learning.postman.com/docs/collaborating-in-postman/using-version-control/version-control-overview/" target="_blank" rel="noreferrer">proprietary centralised</a> version control system to collaborate with your team.
          That is postman for you. It saves your collection as a single JSON file. People who don't want to pay postman for version control end up sharing the giant json files with their team via slack/drive/email.

          <div className='mt-4'>
            Bruno stores your collections directly in a folder on your filesystem. We use a plain text markup language, <a className='link' href="https://docs.usebruno.com/bru-lang-overview.html" target="_blank" rel="noreferrer">Bru</a> to save information about API requests. You can use git or any version control of your choice to collaborate over your API collections.
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          Where collections are saved
        </h2>
        <div className='mt-6'>
          Postman saves your collections in their cloud.

          <div className='mt-4'>
            Bruno stores your collections directly in a folder on your filesystem.
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          How API Requests are made
        </h2>
        <div className='mt-6'>
          Postman Web App makes API requests using a <span className='font-medium'>propietary</span> proxy server. This means that you are not in control of your data. You are forced to use their proxy server to make API requests. This is a huge security risk. <br />
          There have also been <a className='link' href="https://community.postman.com/t/working-in-offline-mode/20174/51" target="_blank" rel="noreferrer">reports</a> of postman desktop app using the proxy server to make API requests.

          <div className='mt-4'>
            Bruno makes API requests directly from your computer. You are in control of your data.
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          Online vs Offline
        </h2>
        <div className='mt-6'>
          Postman requires you to be <a className='link' href="https://community.postman.com/t/working-in-offline-mode/20174/37" target="_blank" rel="noreferrer">online</a> to use it. 

          <div className='mt-4'>
            Bruno is a desktop app, and is made for offline use.
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          Team Collaboration
        </h2>
        <div className='mt-6'>
          Postman has a <a className='link' href="https://www.postman.com/pricing/" target="_blank" rel="noreferrer">paid</a> team collaboration feature. <br />
          It starts at $15 per month per user (after the free tier of 3 users).

          <div className='mt-4'>
            Bruno is free and open source. You can use git or any version control of your choice to collaborate over your API collections.
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          Collection Runs
        </h2>
        <div className='mt-6'>
          Postman Local Collection Runs will be available with Free and Basic plans at <span className='font-semibold'>25</span> runs per month, Professional plan at <span className='font-semibold'>250</span> runs per month, and Enterprise plan at unlimited runs per month. <br />
          See <a className='link' href="https://community.postman.com/t/250-collection-runs-per-month-on-professional/43946" target="_blank" rel="noreferrer">here</a>, <a className='link' href="https://community.postman.com/t/collection-runner-restrictions-on-free-accounts-starting-wednesday-does-this-include-newman/43941" target="_blank" rel="noreferrer">here</a> and <a className='link' href="https://blog.postman.com/postman-2023-product-and-versioning-updatesand-vs-code-extension/" target="_blank" rel="noreferrer">here</a>

          <div className='mt-4'>
            With Bruno, You can run collections <span className='font-semibold'>infinite</span> times until the <a className='link' href="https://en.wikipedia.org/wiki/Heat_death_of_the_universe" target="_blank" rel="noreferrer">heat death of the universe.</a>
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          Loading NPM Modules
        </h2>
        <div className='mt-6'>
          Postman requires you to use some <a className='link' href="https://blog.postman.com/adding-external-libraries-in-postman/" target="_blank" rel="noreferrer">crazy work arounds</a> involving loading from CDN, storing entire library in collection variables to load npm modules.

          <div className='mt-4'>
            With Bruno, you use package.json to install npm modules of your choice. And require them inside your scripts like <a className='link' href="https://docs.usebruno.com/scripting/external-libraries.html" target="_blank" rel="noreferrer">how developers normally would.</a>.
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          Declarative Scripting
        </h2>
        <div className='mt-6'>
          Postman requires you to use scripting to update post response variables.

          <div className='mt-4'>
            Bruno supports declarative scripting to update your post response variables, by using a simple expression. To learn more, please see <a className='link' href="https://docs.usebruno.com/scripting/vars.html" target="_blank" rel="noreferrer">here</a>.
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold leading-tight w-full">
          Declarative Assertions
        </h2>
        <div className='mt-6'>
          Postman requires you to use scripting to write tests.

          <div className='mt-4'>
            Bruno supports declarative assertions to write tests, by using simple expressions. To learn more, please see <a className='link' href="https://docs.usebruno.com/testing/assertions.html" target="_blank" rel="noreferrer">here</a>.
          </div>
        </div>

        <h1 className="mt-8 text-2xl font-semibold leading-tight w-full">
          Its time
        </h1>
        <div className='mt-6'>
          <Link href="/downloads" legacyBehavior>
            <a href="" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
              <Bruno width={30} />
              <span className='ml-3'>Download Bruno Desktop App</span>
            </a>
          </Link>
        </div>
      </main>

      <Footer/>
    </div>
  );
};
