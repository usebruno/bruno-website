import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

const CheckIcon = () => {
  return <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>;
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
    'Custom Themes',
    'Bru CLI',
    'OpenAPI Import'
  ];

  const goldenEditon = [
    'Inbuilt Bru File Explorer',
    'Visual Git (Like Gitlens for Vscode)',
    'Inbuilt Terminal',
    'GRPC, Websocket, SocketIO, MQTT',
    'Load Data from File for Collection Run',
    'Performance/Load Testing',
  ];

  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>Manifesto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <section class="bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-20">
            <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Pricing</h2>
              <p class="mb-5 font-light text-gray-500 sm:text-xl">
                Majority of our features are free and open source. <br/>
                We strive to strike a harmonious balance between open-source principles and sustainability.
              </p>
            </div>
            <div class="mx-auto text-center lg:flex lg:space-x-12">
              <div class="flex flex-col p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full">
                <h3 class="text-2xl font-semibold">Opensource Edition</h3>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">Free</span>
                </div>
                <ul role="list" class="mb-8 space-y-4 text-left">
                  {opensourceEdition.map((item) => (
                    <li class="flex items-center space-x-3">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a class="text-white bg-yellow-600 hover:bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get Started</a>
              </div>
              <div class="flex flex-col mt-10 lg:mt-0 p-6 mx-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow w-full">
                <h3 class="text-2xl font-semibold">Golden Edition</h3>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$12</span>
                  <span class="text-gray-500">/year</span>
                </div>
                <ul role="list" class="mb-8 space-y-4 text-left">
                  {goldenEditon.map((item) => (
                    <li class="flex items-center space-x-3">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a class="text-white bg-yellow-600 hover-bg-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Coming Soon</a>
              </div>
            </div>

            <p class="text-sm text-gray-600 mt-8">
              * All open-source contributors of Bruno will receive a free license for the Golden Edition.
            </p>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};
