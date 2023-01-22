import Head from 'next/head';
import { IconWorld, IconBrandApple, IconBrandWindows, IconBrandUbuntu, IconBrandChrome, IconBrandDocker, IconDeviceDesktop } from "@tabler/icons";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Downloads() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <h1 className="mt-4 text-2xl font-bold leading-tight w-full">
          Design
        </h1>

        <div className='mt-6'>
          When building bruno, we reasoned from first principles on the UX as well as concepts around workspaces, collections and environments.
          Below are some of differences in the way bruno sees things, compared to other similar tools out there.
        </div>

        <h1 className="mt-8 text-xl font-bold leading-tight w-full">
          Markdown for Collections
        </h1>
        <div className='mt-2'>
        With Bruno, developers can easily load and save their API collections directly onto their local file system, giving them the freedom to utilize their preferred versioning system, such as Git, for seamless collaboration and sharing of collections
        </div>

        <h1 className="mt-8 text-xl font-bold leading-tight w-full">
          Lean Workspaces
        </h1>
        <div className='mt-2'>
          Most of the api clients out there consider Workspace as a first class citizen. Collections and Environments reside inside the workspace.
          For Team collaboration, its the workspaces that get shared (this is mostly postman ux, also adopted by other tools)

          <div className='mt-2'>
            In Bruno, workspaces are just used to group collections together.<br />
            Thats it. (very similar to a workspace in vscode or sublime text)
          </div>
        </div>

        <h1 className="mt-8 text-xl font-bold leading-tight w-full">
          Collections as first class Citizens
        </h1>
        <div className='mt-2'>
          In Bruno collections are first class citizens. We see collections in the same light as a source code repository.
          All things related to a collection are co-located within the collection. <br />

          <div className='mt-2'>
            Our ux design choices also reflect this. When you open a request in a collection, the tablist only include other requests that have been opened for the same collection.
          </div>
        </div>

        <h1 className="mt-8 text-xl font-bold leading-tight w-full">
          Environments are localized within Collections
        </h1>
        <div className='mt-2'>
          Almost all tools out there have a global environment for the whole app. This results in people using collection name prefixes to name variables.
          And then the users are forced to share two things now, collection file and an environment file. <br />

          <div className='mt-2'>
            This is basically ineffecient in our opinion  
          </div>

          <div className='mt-2'>
            In Bruno, environments are local to the collection and get saved within the collections.
          </div>
        </div>

        <h1 className="mt-8 text-xl font-bold leading-tight w-full">
          Workspaces, Collections and Environments
        </h1>
        <div className='mt-2'>
          As already explained above, Most apps out there give a lot of weight to workspaces and have global environments. Sharing things get harder and cumbersome.

          <div className='mt-2'>
            In Bruno, you just share a collection. <br />
            That&apos;s it. Just like a git repo.
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};
