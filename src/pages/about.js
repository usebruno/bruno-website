import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Home() {
  return (
    <div className="container flex flex-col root about-page" style={{fontFamily: 'Inter'}} style={{maxWidth: '1024px'}}>
      <Head>
        <title>bruno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <div className='px-2 pt-6'>
          <h4 className="text-xl font-bold pb-6">Hi there 👋</h4>

          <p>
            I am <a className='link' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anoop-m-d-868099100">Anoop</a> , a full stack software programmer based out of Bangalore.
          </p>

          <p>
            In my decade long journey of developing software, every time I need to explore or work with api’s, I usually have to ask my colleagues to slack/email me a postman collection.
          </p>

          <p>
            Postman has a great collaboration platform for teams (it's gotten bloated these days though), but many companies stick to sharing collections via slack/email instead of opting for the paid plan.
          </p>

          <p>
            I searched for an opensource alternatives which companies can self host on their servers, but sadly none exist. Every opensource alternative (Insomnia, Hoppscotch.. etc) has a closed source component which restricts companies from self hosting.
          </p>

          <p>
            Bruno (named after my pet golden retriever) is my attempt at solving 2 key problems.
          </p>

          <div className='ml-4 italic'>
            <p>1. Build end-to-end opensource platform that companies can self-host to enable developers to collaborate on api collections.</p>
            <p>2. BYOVC (Bring Your Own Version Control) - Allow developers to directly store there collections on top of their local filesystem. The collections are mirrored as folders and files on the filesystem</p>
          </div>

          <p className='pt-2'>
            You can checkout the project on <a className='link' target="_blank" rel="noreferrer" href="https://www.github.com/usebruno/bruno">github</a>, I’d appreciate your thoughts, ideas or feedback.
          </p>

        </div>


      </main>
      <Footer/>
    </div>
  );
};
