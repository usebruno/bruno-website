import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import GlobalStyle from "../globalStyles";
import { IconGift, IconWand, IconBug, IconBrandGithub } from "@tabler/icons";

const sectionConfig = {
  newFeature: { title: "What's New?", icon: IconGift, iconColor: "text-yellow-600" },
  imporvements: { title: "Enhancements", icon: IconWand, iconColor: "text-yellow-600" },
  bugfixes: { title: "Bug fixes", icon: IconBug, iconColor: "text-yellow-600" },
  // Add more sections...
}

const Changelog = () => {
  const releases = [
    {
      version: "v1.23.1",
      date: "6 July 2024",
      imporvements: ["Support for importing open API specs via URL."],
      bugfixes: [
        "Resolved issues with import functionality for previously exported collections from Bruno",
        "Git UX improvements and bug fixes.",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.23.1",
    },
    {
      version: "v1.23.0",
      date: "2024-07-01",
      newFeature: ["In-app support for git push and pull.", "Option to download collection run report."],
      imporvements: [
        "Download visualized repose as CSV table data.",
        "Copy visualized table data",
        "Allows bru.setNextRequest() on Test Scripts",
        "Added flow option for sequential flow in scripts",
      ],
      bugfixes: [
        "Fixed issue in openApi export",
        "Fixed openapi spec viewer issues when opening API spec",
        "OAuth 2.0 Grant Type Authorization: invalid_client error",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.23.0",
    },
    {
      version: "v1.23.0",
      date: "2024-07-01",
      newFeature: ["In-app support for git push and pull.", "Option to download collection run report."],
      imporvements: [
        "Download visualized repose as CSV table data.",
        "Copy visualized table data",
        "Allows bru.setNextRequest() on Test Scripts",
        "Added flow option for sequential flow in scripts",
      ],
      bugfixes: [
        "Fixed issue in openApi export",
        "Fixed openapi spec viewer issues when opening API spec",
        "OAuth 2.0 Grant Type Authorization: invalid_client error",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.23.0",
    },
    // Add other releases here...
  ];

  return (
    <div className="container flex flex-col root home-page" style={{ fontFamily: 'Inter', maxWidth: '1280px' }}>
      <Head>
        <title>Changelog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />
        <section className="bg-white py-4">
          <div className="py-6">
            <h1 className="text-3xl font-bold mb-6">Changelog</h1>
          </div>
          <div className="space-y-4 releases">
            {releases.map((release, index) => (
              <article key={index} className="md:flex">
                <div className="flex h-full flex-col text-xs leading-6 sm:text-sm sticky md:top-32 pb-4 md:pb-8 pl-2 md:pl-0 md:w-1/5">
                  <div className="flex">
                    <p className="release-version font-semibold">{release.version}</p>
                    <a href={release.githubLink} target="_blank" rel="noopener noreferrer" className="md:hidden bg-white p-1 ml-2 rounded-full shadow h-max justify-end">
                      <IconBrandGithub className="text-gray-600" size={16} />
                    </a>
                  </div>
                  <p className="release-date text-xs text-gray-500 mt-2">{release.date}</p>
                </div>

                <div className="release-info w-full text-center text-gray-600 ml-2 md:ml-4 md:ml-0 md:pl-8 pb-8 relative z-1">
                  <div className="absolute bottom-5 top-3 left-0 w-px bg-gray-300 md:top-2.5 hidden md:block"></div>
                  <a href={release.githubLink} target="_blank" rel="noopener noreferrer" className="absolute -left-4 bg-white p-1 rounded-full shadow hidden md:block">
                    <IconBrandGithub className="text-gray-600" size={20} />
                  </a>

                  {Object.keys(sectionConfig).map((sectionKey) => {
                    const sectionData = release[sectionKey];
                    const sectionInfo = sectionConfig[sectionKey];

                    return sectionData?.length > 0 && (
                      <div key={sectionKey} className={`${sectionKey} pb-4`}>
                        <p className="font-medium text-left text-gray-700 flex items-center">
                          <sectionInfo.icon className={sectionInfo.iconColor} size={18} />
                          <span className="ml-4">{sectionInfo.title}</span>
                        </p>
                        <div className="mt-2">
                          {sectionData.map((item, idx) => (
                            <div key={idx} className="text-left text-sm mt-1">
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
