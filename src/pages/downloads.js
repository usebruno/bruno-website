import Head from 'next/head';
import { IconBrandApple, IconBrandWindows, IconBrandUbuntu, IconBrandChrome, IconBrandDocker, IconDeviceDesktop } from "@tabler/icons";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import GlobalStyle from '../globalStyles';

export default function Downloads() {
  return (
    <div className="container flex flex-col root home-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>downloads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <h1 className="mt-4 text-2xl font-bold leading-tight w-full">
          Downloads
        </h1>

        <div className="overflow-x-auto relative mt-8">
          <table className="text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="py-3 pl-6 pr-10">
                  Platform
                </th>
                <th scope="col" className="py-3 pl-6 pr-10">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac x64</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.8.0/bruno_0.8.0_x64_mac.dmg" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac arm64</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.8.0/bruno_0.8.0_arm64_mac.dmg" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a> <br />
                <span style={{fontSize: 12}}>
                  M1/M2 users will have to run &quot;sudo xattr -rd com.apple.quarantine /Applications/Bruno.app&quot; <br />
                  Please see this <a href="https://github.com/usebruno/bruno/issues/32" target="_blank" rel="noreferrer" className='link'>issue</a> for more details
                </span>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconBrandUbuntu className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Ubuntu Linux</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.8.0/bruno_0.8.0_amd64_linux.deb" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconDeviceDesktop className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Linux</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.8.0/bruno_0.8.0_x86_64_linux.AppImage" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconBrandWindows className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Windows x64</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.8.0/bruno_0.8.0_x64_win.exe" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              {/*
              Need to make this automated
              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconBrandWindows className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Windows x64 (zip with dll)</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.8.0/bruno_0.8.0_x64_win.zip" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>*/}

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconBrandDocker className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Docker</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                  Coming Soon in the next couple of days!
                </td>
              </tr>

              <tr className="bg-white ">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <IconBrandChrome className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Chrome Extension</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                  Pending Review in Chrome Web Store
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='mt-6'>
          All release and source artifacts can be found under in the <a href="https://github.com/usebruno/bruno/releases/tag/v0.3.0" target="_blank" rel="noreferrer" className='link'>github release</a>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
