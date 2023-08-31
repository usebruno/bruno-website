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
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                  <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac x64</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.12.2/bruno_0.12.2_x64_mac.dmg" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                  <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac Apple Silicon</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.12.2/bruno_0.12.2_arm64_mac.dmg" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                  <IconBrandUbuntu className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Ubuntu Linux</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.13.0/bruno_0.13.0_amd64_linux.deb" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                  <IconDeviceDesktop className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Linux</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.13.0/bruno_0.13.0_x86_64_linux.AppImage" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                  <IconBrandWindows className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Windows x64</span>
                </td>
                <td className="py-3 pl-6 pr-10">
                <a href="https://github.com/usebruno/bruno/releases/download/v0.13.0/bruno_0.13.0_x64_win.exe" target="_blank" rel="noreferrer" className='link'>
                  Download
                </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='mt-6'>
          The release notes along with the release and source artifacts can be found under in the <a href="https://github.com/usebruno/bruno/releases" target="_blank" rel="noreferrer" className='link'>GitHub release</a>
        </div>

        <div className="bg-yellow-100 border-yellow-400 border p-2 mt-6 rounded text-sm">
          <p className="text-yellow-800">
            The latest update, version 0.13.0, is now accessible for Windows and Linux users. <br/><br/>
            Unfortunately, Mac builds are facing a delay due to notarization issues. <br/>
            As of now, the most recent Mac build available is version 0.12.2. The notarization challenges are expected to be resolved by September 15th, 2023.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
