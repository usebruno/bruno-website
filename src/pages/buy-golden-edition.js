import { useState } from 'react';
import Head from 'next/head';
import Bruno from 'components/Bruno';
import Navbar from 'components/Navbar';
import PaypalCheckout from 'components/PaypalCheckout';
import GlobalStyle from '../globalStyles';

const HeartIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="flex-shrink-0 w-5 h-4 text-yellow-600" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
  </svg>;
};

const validateEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}

export default function BuyGoldenEdition() {
  const [email, setEmail] = useState('');
  const [emailReady, setEmailReady] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleContinue = () => {
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      setEmailError(true);
    } else {
      setEmailError(false);
      setEmailReady(true);
    }
  };

  const handleError = (error) => {
    setError('Something went wrong. Please try again later.');
  };

  const handleSuccess = (data) => {
    setPurchaseSuccess(true);
  };

  return (
    <div className="container flex flex-col root buy-golden-edition-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>Buy Golden Edition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white pb-10">
          <div className='flex'>
            <Bruno width={100}/>
          </div>
          <h2 className="pb-10 text-4xl tracking-tight font-extrabold text-gray-900">Bruno Golden Edition</h2>

          <div>
            You can <strong>Pre-Order</strong> Golden Edition (Individual License) today at <span className="font-medium"><span className="line-through">$19</span> <span className="text-yellow-600 text-2xl ">$9</span></span> !
          </div>

          <div className='mt-4'>
            We expect Golden Edition to be available by <span className='font-medium'>15th March 2024.</span><br />
            For the feature set, please refer to <a href="/pricing" className='link'>pricing page</a>.
          </div>

          <div className='mt-4 flex items-center'>
            <span className='mr-2'>Thank you for your support! </span><HeartIcon />
          </div>

          {!purchaseSuccess && !emailReady && (
            <div className='flex flex-col' style={{width: '250px'}}>
              <label htmlFor="email" className="block mt-8 font-medium text-gray-700">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`mt-1 p-2 border rounded-md ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <span className="text-red-500 text-sm">
                Please enter a valid email address.
              </span>}
              <button
                className="
                  text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-200
                  font-medium rounded-lg text-sm px-6 py-2 mt-4
                  focus:outline-none transition
                "
                onClick={() => handleContinue()}
                style={{width: 'fit-content'}}
              >
                Continue
              </button>
            </div>
          )}

          {!purchaseSuccess && !emailReady && (
            <span className='mt-4 inline-block text-sm'>
              **Note: The payment option is currently not accessible for users located in India. We are working on it.
            </span>
          )}

          {!purchaseSuccess && emailReady && (
            <div className='mt-6'>
              <PaypalCheckout
                email={email}
                onSuccess={handleSuccess}
                onError={handleError}
                />
            </div>
          )}

          {purchaseSuccess && (
            <div className='mt-6'>
              <div className='text-2xl font-medium'>Thank you for your purchase!</div>
              <div className='mt-4'>We will send you the license details via email when Golden Edition is ready.</div>
            </div>
          )}

          {error && <div className="text-red-500 text-sm">{error}</div>}
        </section>
      </main>
    </div>
  )
};