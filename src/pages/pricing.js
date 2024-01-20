import Head from 'next/head';
import Link from 'next/link';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { IconUser, IconUsers, IconPlus } from "@tabler/icons";
import GlobalStyle from '../globalStyles';

const CheckIcon = () => {
  return <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>;
};

const HeartIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="flex-shrink-0 w-5 h-4 text-yellow-600" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
  </svg>;
};

export default function Pricing() {
  const opensourceEdition = [
    'REST and GQL Apis',
    'Scripting',
    'Authentication',
    'Environments',
    'Secret Management',
    'Asserts and Tests',
    'Client Certificates',
    'Collection Runner',
    'Cookie Management',
    'Proxies',
    'Code Generation',
    'Documentation',
    'Bru CLI',
    'OpenAPI Import'
  ];

  const goldenEditonIndividuals = [
    'Inbuilt Bru File Explorer',
    'Visual Git (Like Gitlens for Vscode)',
    'GRPC, Websocket, SocketIO, MQTT',
    'Load Data from File for Collection Run',
    'Performance/Load Testing',
    'Developer Tools',
    'OpenAPI Designer',
    'Inbuilt Terminal',
    'Custom Themes'
  ];



  const goldenEditonOrganizations = [
    'Centralized License Management',
    'Intergration with Secret Managers',
    'Private Collection Registry',
    'Request Forms',
    'Priority Support'
  ];

  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-20">
            <div className="mx-auto max-w-screen-md text-center mb-6 lg:mb-6">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Pricing</h2>
              <p className="font-light text-gray-500 text-lg">
                Majority of our features are free and open source. <br/>
                We strive to strike a harmonious balance between <a href="https://github.com/usebruno/bruno/discussions/269" target="_blank" rel="noreferrer" className='link'>open-source principles and sustainability.</a>
              </p>
            </div>
            <div className="text-center mb-8">
              <p className="font-medium text-lg">
                Golden Edition Pre-Orders launching soon at <span className="font-medium"><span className="line-through">$19</span> <span className="text-yellow-600 text-2xl ">$9</span></span> !
                </p>
              <p>
                <a data-formkit-toggle="9330cfc044" className="link">Sign up here</a> to get notified when we launch.
              </p>
            </div>

            {/* Opensource Edition */}
            <div className="mx-auto lg:flex lg:space-x-12">
              <div className="flex flex-col p-6 mx-auto text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full">
                <h3 className="text-2xl font-semibold">Opensource Edition</h3>
                <div className="flex items-baseline my-8">
                  <span className="mr-2 text-4xl font-extrabold">Free</span>
                </div>
                <ul role="list" className="mb-8 space-y-2 text-left" style={{fontSize: '16px'}}>
                  {opensourceEdition.map((item, index) => (
                    <li className="flex items-center space-x-3" key={index}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                  <Link href="/downloads" legacyBehavior>
                    <a className="text-white bg-yellow-600 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get Started</a>
                  </Link>
              </div>

              {/* Golden Edition Individuals */}
              <div className="flex flex-col mt-10 lg:mt-0 p-6 mx-auto text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full">
                <h3 className="text-2xl font-semibold">Golden Edition</h3>

                <div>
                  <div className="my-4 flex items-center">
                    <span className="text-4xl font-extrabold">$19</span>
                    <p className="bg-yellow-200 rounded-md px-2 py-1 ml-2 inline-flex text-xs mt-2">One Time Payment *</p>
                  </div>
                </div>

                <div className="inline-flex items-center mt-4 bg-gray-200 rounded-full p-1" style={{width: 170}}>
                  <div
                    className={`cursor-pointer px-3 flex items-center justify-center rounded-full`}
                  >
                    <IconUser className="text-gray-500 mr-2 icon" size={16} strokeWidth={1.5}/> For Individuals
                  </div>
                </div>

                <ul role="list" className="mb-6 mt-6 space-y-2 text-left">
                  <li className='flex items-center space-x-3'>
                    <HeartIcon />
                    <span>Support Bruno's Development</span>
                  </li>
                  {
                    goldenEditonIndividuals.map((item, index) => (
                      <li className="flex items-center space-x-3" key={index}>
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))
                  }
                </ul>

                <p className="text-sm">* Individual licenses are perpetual licenses that can be used on 2 devices, with 2 years of updates</p>

                <a className="text-white bg-yellow-600 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
                  Coming Soon
                </a>

              </div>


              {/* Golden Edition Organizations */}
              <div className="flex flex-col mt-10 lg:mt-0 p-6 mx-auto text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full">
                <h3 className="text-2xl font-semibold">Golden Edition</h3>

                <div>
                  <div className="my-4 flex items-center">
                    <span className="text-4xl font-extrabold">$5</span>
                    <p className='ml-2 mt-2'>/user/month</p>
                  </div>
                </div>

                <div className="inline-flex items-center mt-4 bg-gray-200 rounded-full p-1" style={{width: 200}}>
                  <div
                    className={`cursor-pointer px-3 flex items-center justify-center rounded-full`}
                  >
                    <IconUsers className="text-gray-500 mr-2 icon" size={16} strokeWidth={1.5}/> For Organizations
                  </div>
                </div>

                <ul role="list" className="mb-4 mt-6 space-y-2 text-left">
                  <li className='flex items-center space-x-3'>
                    <HeartIcon />
                    <span>Support Bruno's Development</span>
                  </li>
                  <li className='flex items-center space-x-3 pb-4'>
                    <IconPlus size={16} strokeWidth={1.5} style={{marginLeft: '2px'}}/>
                    <span>Everything in the Individual Plan</span>
                  </li>
                  {
                    goldenEditonOrganizations.map((item, index) => (
                      <li className="flex items-center space-x-3" key={index}>
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))
                  }
                </ul>
                <div className='text-sm mt-4'>
                  For help with migration and custom requirements, talk to us! <br /> <br />
                  We also help accelerate adoption of Bruno in your organization and offer best practice recommendations.
                </div>
                <a className="text-white bg-yellow-600 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
                  Coming Soon
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-8">
              * All open-source contributors of Bruno will receive a free license for the Golden Edition.
            </p>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};
