import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { IconUser, IconUsers } from "@tabler/icons";
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
  const [pricingOption, setPricingOption] = useState('individuals');

  const handlePricingOptionChange = (option) => {
    setPricingOption(option);
  };

  const opensourceEdition = [
    'REST and GQL Apis',
    'Scripting',
    'Authentication',
    'Variable Viewer',
    'Environments',
    'Secret Management',
    'Asserts and Tests',
    'Client Certificates',
    'Collection Runner',
    'Cookie Management',
    'Proxies',
    'Code Generation',
    'Documentation',
    'Response History',
    'GraphQL Explorer',
    'Bru CLI',
    'OpenAPI Import',
    'Collection Network'
  ];

  const goldenEditon = [
    'Inbuilt Bru File Explorer',
    'Visual Git (Like Gitlens for Vscode)',
    'GRPC, Websocket, SocketIO, MQTT',
    'Intergration with Secret Managers',
    'Load Data from File for Collection Run',
    'Developer Tools',
    'OpenAPI Designer',
    'Performance/Load Testing',
    'Inbuilt Terminal',
    'Custom Themes'
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
              <p className="font-light text-gray-500 sm:text-xl">
                Majority of our features are free and open source. <br/>
                We strive to strike a harmonious balance between <a href="https://github.com/usebruno/bruno/discussions/269" target="_blank" rel="noreferrer" className='link'>open-source principles and sustainability.</a>
              </p>
            </div>
            <div class="text-center mb-8">
              <p class="font-medium text-lg">
                Golden Edition Pre-Orders launching soon at <span class="font-medium"><span class="line-through">$19</span> <span class="text-yellow-600 text-2xl ">$9</span></span> !
                </p>
              <p>
                <a data-formkit-toggle="9330cfc044" className="link">Sign up here</a> to get notified when we launch.
              </p>
            </div>

            <div className="mx-auto text-center lg:flex lg:space-x-12">
              <div className="flex flex-col items-center p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full">
                <h3 className="text-2xl font-semibold">Opensource Edition</h3>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">Free</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
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
              <div className="flex flex-col items-center mt-10 lg:mt-0 p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full">
                <h3 className="text-2xl font-semibold">Golden Edition</h3>
                {pricingOption === 'individuals' ? (
                  <div>
                    <div className="my-4">
                      <span className="text-5xl font-extrabold">$19</span>
                    </div>
                    <p className="bg-yellow-200 rounded-md px-2 py-1 mb-2 inline-flex text-sm">One Time Payment</p>
                    <p className="text-sm">perpetual license for 2 devices, with 2 years of updates</p>
                  </div>
                ) : (
                  <div>
                    <div className="my-4">
                      <span className="text-5xl font-extrabold">$2</span>
                    </div>
                    <p>/user/month</p>
                  </div>
                )}
                <div className="flex items-center justify-between my-8 w-40 bg-gray-200 rounded-full p-1" style={{width: '24rem'}}>
                  <div
                    className={`cursor-pointer w-1/2 h-8 flex items-center justify-center rounded-full ${
                      pricingOption === 'individuals' ? 'bg-white text-gray-900 font-medium' : 'text-gray-500'
                    }`}
                    onClick={() => handlePricingOptionChange('individuals')}
                  >
                    <IconUser className="text-gray-500 mr-2 icon" size={16} strokeWidth={1.5}/> Individuals
                  </div>
                  <div
                    className={`cursor-pointer w-1/2 h-8 flex items-center justify-center rounded-full ${
                      pricingOption === 'organizations' ? 'bg-white text-gray-900 font-medium' : 'text-gray-500'
                    }`}
                    onClick={() => handlePricingOptionChange('organizations')}
                  >
                    <IconUsers className="text-gray-500 mr-2 icon" size={16} strokeWidth={1.5}/> Organizations
                  </div>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className='flex items-center space-x-3'>
                    <HeartIcon />
                    <span>Support Bruno's Development</span>
                  </li>
                  {goldenEditon.map((item, index) => (
                    <li className="flex items-center space-x-3" key={index}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a className="text-white bg-yellow-600 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
