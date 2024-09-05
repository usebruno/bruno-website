import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import GlobalStyle from "../globalStyles";
import { IconGift, IconWand, IconBug, IconBrandGithub } from "@tabler/icons";

const sectionConfig = {
  newFeature: { title: "What's New?", icon: IconGift, iconColor: "text-yellow-600" },
  bugfixes: { title: "Bug fixes", icon: IconBug, iconColor: "text-yellow-600" },
}

const Changelog = () => {
  const releases = [
    {
      version: "v1.28.0",
      date: "2024-07-20",
      newFeature: [
        "Collection Variables Support",
        "Switch tabs with keyboard shortcut",
        "System proxy mode",
        "Use cookies during in Runner execution",
      ],
      bugfixes: [
        "Fixed app crash when timeline is open for multipart requests",
        "Fixed openapi collection import to not add protocol by default",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.28.0",
    },
    {
      version: "v1.27.0",
      date: "2024-07-13",
      newFeature: [
        "Handle decimals and bigints in JSON body without losing fidelity",
        "Store client certificate paths in collection settings as relative to collection",
        "Support for adjusting code editor font size",
      ],
      bugfixes: [
        "Fixed issue where Inter font was not loading",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.27.0",
    },
    {
      version: "v1.26.2",
      date: "2024-07-06",
      newFeature: [
        "Added hint for Request Path Variables to improve UX",
        "Support for extracting basic OpenAPI links",
        "Add GraphQL in export to Postman collection",
        "Allow relative paths in markdown in docs",
        "Add search results count to CodeMirror",
        "Updated response headers count logic",
      ],
      bugfixes: [
        "Resolved interpolation of multiple interdependent variables",
        "Improved quickjs vm error handling"
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.26.2",
    },
    {
      version: "v1.26.1",
      date: "2024-07-05",
      bugfixes: [
        "Fixed issue where getRequestVar() was not working",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.26.1",
    },
    {
      version: "v1.26.0",
      date: "2024-07-03",
      newFeature: [
        "Implemented Safe Mode to run scripts in a secure sandbox",
        "Added ability for cURL to import basic auth",
        "Added request tab context menu",
        "Added hotkey to close all tabs",
        "Content Indicators if request body, script or tests have content",
      ],
      bugfixes: [
        "Fixed collection search validations",
        "Fixed ENOSPC error handling"
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.26.0",
    },
    {
      version: "v1.25.0",
      date: "2024-06-27",
      newFeature: [
        "Added runner delay feature",
        "Added shade to modal header in dark mode",
      ],
      bugfixes: [
        "Fixed generate code modal height issue",
        "Handled ENOSPC error from chokidar",
        "Added TRACE to OpenAPI allowed methods during import",
        "Fixed query URL overflowing issue",
        "Added ability to save response in UTF-8 format"
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.25.0",
    },
    {
      version: "v1.24.0",
      date: "2024-06-20",
      newFeature: [
        "Added masking support for SingleLineEditor",
        "Implemented show/hide privacy toggle for passwords and secrets in Auth options",
        "Added comment with keybinding (cmd + /) in JSON payload interface",
        "Improved UX in Git UI",
      ],
      bugfixes: [
        "Fixed cookie exclusion from request headers when importing from curl",
        "Resolved distorted window on startup",
        "Fixed issue where Enter key was not submitting new request form",
        "Set content-type header during code generation",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.24.0",
    },
    {
      version: "v1.23.1",
      date: "6 July 2024",
      newFeature: [
        "Support for importing open API specs via URL."
      ],
      bugfixes: [
        "Resolved issues with import functionality for previously exported collections from Bruno",
        "Git UX improvements and bug fixes.",
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.23.1",
    },
    {
      version: "v1.23.0",
      date: "2024-07-01",
      newFeature: [
        "In-app support for git push and pull.",
        "Option to download collection run report.",
        "Allows bru.setNextRequest() on Test Scripts",
        "Added flow option for sequential flow in scripts",
      ],
      bugfixes: [
        "Fixed openapi spec viewer issues when opening API spec"
      ],
      githubLink: "https://github.com/usebruno/bruno/releases/tag/v1.23.0",
    }
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
                            <div key={idx} className="flex items-start text-left text-sm mt-2">
                              <span className="text-gray-400 ml-9 mr-2">•</span>
                              <p className="flex-1">{item}</p>
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
