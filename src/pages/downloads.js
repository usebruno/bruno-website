import Bruno from 'components/Bruno';
import Head from 'next/head';
import Link from 'next/link';
import { IconBrandApple, IconBrandWindows, IconBrandUbuntu, IconDeviceDesktop } from "@tabler/icons";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GlobalStyle from '../globalStyles';
import { useState } from 'react';

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/usebruno/bruno/releases/latest')
  const data = await res.json()

  return {
    props: {
      latestVersion: '1.24.0',
      // disabling this for now
      // latestVersion: data.tag_name.replace('v', ''),
      releaseDate: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(data.created_at)),
    },
    revalidate: 60*15, // refresh every 15 minutes
  }
}

export default function Downloads({ latestVersion, releaseDate }) {
  const [selectedVersion, setSelectedVersion] = useState(latestVersion);

  const handleVersionSelect = (v) => {
    setSelectedVersion(v);
  }

  return (
    <div className="container flex flex-col root downloads-page" style={{fontFamily: 'Inter', maxWidth: '1280px'}}>
      <Head>
        <title>Downloads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <h1 className="mt-4 text-2xl font-bold leading-tight w-full">
          Downloads
        </h1>

        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            Latest Version: <Link href={`https://github.com/usebruno/bruno/releases/tag/v${latestVersion}`} className='link' target="_blank">{latestVersion}</Link>
          </p>
          <p className="text-gray-500 text-sm">Release Date: {releaseDate}</p>
        </div>

        <div
          className="mt-4 border inline-flex flex py-2 px-4 rounded-lg text-sm"
          style={{ maxWidth: "max-content" }}
        >
          <div className='flex'>
            <Bruno width={45}/>
          </div>
          <div className="ml-3 flex flex-col">
            <p>
              Golden Edition now available at <span className="text-yellow-600 text-lg ">$19</span> !
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=R3F6Gu7tG8M" target="_blank" rel="noreferrer" className='link'>Watch demo</a>
              <span className='ml-2 mr-2'>|</span>
              <a href="/pricing" className="link">Buy Now!</a>
            </p>
          </div>
        </div>

        <Tabs className="mt-2">
          <TabList className="flex mt-4 space-x-4">
            <Tab className="px-4 py-2 bg-gray-200 flex items-center rounded-md cursor-pointer hover:bg-gray-300">
              <IconBrandApple className="text-gray-500 mr-2 icon" size={24} strokeWidth={2}/>Mac
            </Tab>
            <Tab className="px-4 py-2 bg-gray-200 flex items-center rounded-md cursor-pointer hover:bg-gray-300">
              <IconDeviceDesktop className="text-gray-500 mr-2 icon" size={24} strokeWidth={2}/>Linux
            </Tab>
            <Tab className="px-4 py-2 bg-gray-200 flex items-center rounded-md cursor-pointer hover:bg-gray-300">
              <IconBrandWindows className="text-gray-500 mr-2 icon" size={24} strokeWidth={2}/>Windows
            </Tab>
          </TabList>

          <TabPanel>
            <div className="overflow-x-auto relative">
              <h1 className="text-xl font-bold leading-tight w-full flex flex-row items-center">
                Binaries
                <VersionSelector selectedVersion={selectedVersion} handleVersionSelect={handleVersionSelect} />
              </h1>

              <table className="text-left text-gray-500 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Platform
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Version
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
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_x64_mac.dmg`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac x64 (Portable)</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_x64_mac.zip`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac Apple Silicon</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_arm64_mac.dmg`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac Apple Silicon (Portable)</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_arm64_mac.zip`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-bold leading-tight w-full">Homebrew</h1>
              <p className="text-gray-500 mt-2">
                To install via Homebrew, run the following command:
              </p>
              <code  style={{fontSize: 14}} className="bg-gray-100 text-gray-700 rounded px-4 py-2 mt-4 inline-block">brew install bruno</code>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="overflow-x-auto relative">
              <h1 className="text-xl font-bold leading-tight w-full flex flex-row items-center">
                Binaries
                <VersionSelector selectedVersion={selectedVersion} handleVersionSelect={handleVersionSelect} />
              </h1>
              <table className="text-left text-gray-500 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Platform
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Version
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandUbuntu className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Ubuntu / Debian</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_amd64_linux.deb`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconDeviceDesktop className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Linux AppImage</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_x86_64_linux.AppImage`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-bold leading-tight w-full">Snap</h1>
              <p className="text-gray-500 mt-2">
                To install via Snap, run the following command:
              </p>
              <code style={{fontSize: 14}} className="bg-gray-100 text-gray-700 rounded px-4 py-2 mt-4 inline-block">snap install bruno</code>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-bold leading-tight w-full">Apt</h1>
              <p className="text-gray-500 mt-2">
                To install via Apt, follow these steps:
              </p>
              <div style={{width: "fit-content"}}>
                <pre
                  className="bg-gray-100 text-gray-700 rounded px-4 py-2 mt-4"
                  style={{ fontSize: 14, width: "fit-content",whiteSpace:"pre-wrap",wordWrap:"break-word",textAlign:"justify" }}
                >
                  sudo mkdir -p /etc/apt/keyrings <br />
                  sudo gpg --no-default-keyring --keyring
                  /etc/apt/keyrings/bruno.gpg --keyserver keyserver.ubuntu.com
                  --recv-keys 9FA6017ECABE0266 <br />
                  <br />
                  echo "deb [signed-by=/etc/apt/keyrings/bruno.gpg]
                  http://debian.usebruno.com/ bruno stable" | sudo tee
                  /etc/apt/sources.list.d/bruno.list <br /> <br />
                  sudo apt update <br />
                  sudo apt install bruno
                </pre>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="overflow-x-auto relative">
              <h1 className="text-xl font-bold leading-tight w-full flex flex-row items-center">
                Binaries
                <VersionSelector selectedVersion={selectedVersion} handleVersionSelect={handleVersionSelect} />
              </h1>
              <table className="text-left text-gray-500 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Platform
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Version
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandWindows className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Windows x64</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_x64_win.exe`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandWindows className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Windows x64 (Portable)</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">v{selectedVersion}</td>
                    <td className="py-3 pl-6 pr-10">
                    <a href={`https://github.com/usebruno/bruno/releases/download/v${selectedVersion}/bruno_${selectedVersion}_x64_win.zip`} target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-bold leading-tight w-full">Chocolatey</h1>
              <p className="text-gray-500 mt-2">
                To install via Chocolatey, run the following command:
              </p>
              <code  style={{fontSize: 14}} className="bg-gray-100 text-gray-700 rounded px-4 py-2 mt-4 inline-block">choco install bruno</code>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-bold leading-tight w-full">Scoop</h1>
              <p className="text-gray-500 mt-2">
                To install via Scoop, run the following commands:
              </p>
              <code  style={{fontSize: 14}} className="bg-gray-100 text-gray-700 rounded px-4 py-2 mt-4 inline-block">scoop bucket add extras<br />scoop install bruno</code>
            </div>
            
            <div className="mt-6">
              <h1 className="text-xl font-bold leading-tight w-full">WinGet</h1>
              <p className="text-gray-500 mt-2">
                To install via WinGet, run the following commands:
              </p>
              <code  style={{fontSize: 14}} className="bg-gray-100 text-gray-700 rounded px-4 py-2 mt-4 inline-block">winget install Bruno.Bruno</code>
            </div>
          </TabPanel>
        </Tabs>

        <div className='mt-6'>
          The release notes along with the release and source artifacts can be found under in the <a href="https://github.com/usebruno/bruno/releases" target="_blank" rel="noreferrer" className='link'>GitHub release</a>.
        </div>
      </main>
      <Footer/>
    </div>
  );
};

const VersionSelector = ({ handleVersionSelect, selectedVersion }) => {
  const versions = [
    "1.24.0",
    "1.23.1",
    "1.23.0",
    "1.22.0",
    "1.21.0",
    "1.20.4",
    "1.20.3",
    "1.20.2",
    "1.20.1",
    "1.20.0",
    "1.19.0",
    "1.18.1",
    "1.18.0",
    "1.17.0",
    "1.16.1",
    "1.16.0",
    "1.14.0",
    "1.13.1",
    "1.13.0",
    "1.12.3",
    "1.12.2",
    "1.12.1",
    "1.12.0",
    "1.11.0",
    "1.10.0",
    "1.9.0",
    "1.8.0",
    "1.7.1",
    "1.7.0",
    "1.6.1",
    "1.6.0",
    "1.5.1",
    "1.5.0",
    "1.4.0",
    "1.3.2",
    "1.3.1",
    "1.3.0",
    "1.2.0",
    "1.1.1",
    "1.1.0",
    "1.0.1",
    "1.0.0",
    "0.27.3",
    "0.27.2",
    "0.27.1",
    "0.27.0",
    "0.26.0",
    "0.25.0",
    "0.24.0",
    "0.23.0",
    "0.22.1",
    "0.22.0",
    "0.21.1",
    "0.21.0",
    "0.20.0",
    "0.19.0",
    "0.18.0",
    "0.17.0",
    "0.16.6",
    "0.16.5",
    "0.16.4",
    "0.16.3",
    "0.16.2",
    "0.16.1",
    "0.16.0",
    "0.15.3",
    "0.15.2",
    "0.15.1",
    "0.15.0",
    "0.14.1",
    "0.14.0",
    "0.13.2",
    "0.13.1",
    "0.13.0",
    "0.12.2",
    "0.12.1",
    "0.12.0",
    "0.11.0",
    "0.10.2",
    "0.10.1",
    "0.10.0",
    "0.9.4",
    "0.9.3",
    "0.9.2",
    "0.9.1",
    "0.9.0",
    "0.8.2",
    "0.8.1",
    "0.8.0",
    "0.7.2",
    "0.7.1",
    "0.7.0",
    "0.6.1",
    "0.6.0",
    "0.5.0",
    "0.4.0",
    "0.3.0",
    "0.2.0",
    "0.1.0",
  ];

  const handleSelect = (e) => {
    handleVersionSelect(e.target.value);
  };

  return (
    <select className="mx-4 text-sm " onChange={handleSelect} value={selectedVersion}>
      {versions?.map((v) => (
        <option key={v} value={v}>{v}</option>
      ))}
    </select>
  );
};
