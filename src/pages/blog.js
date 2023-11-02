import Head from 'next/head';
import Link from 'next/link';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Blog() {
  const BlogLink = ({title, date, path}) => {
    let link = `/blog${path}`;
    return (
      <li className='mb-8'>
        <div className='text-sm'>{date} </div>
        <div className='font-medium text-2xl text-yellow-600'>
          <Link href={link}>{title}</Link>
        </div>
      </li>
    );
  };

  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <h1 className="mt-4 mb-8 text-2xl font-bold leading-tight w-full">
          Blog
        </h1>

        <ul className='blog-list'>
          <BlogLink title="announcing v1" path="/announcing-version-1" date="02 November 2023"/>
          <BlogLink title="launching bruno cli" path="/launching-bruno-cli" date="03 April 2023"/>
          <BlogLink title="the saas dilemma" path="/the-saas-dilemma" date="28 March 2023"/>
        </ul>
      </main>
      <Footer/>
    </div>
  );
};
