import React from "react"
import StyledWrapper from './StyledWrapper';
import Link from 'next/link';
import Bruno from "components/Bruno";

const Footer = () => {
  return (
    <StyledWrapper>
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
          <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0 mb-8 md:mb-0">
            <div className="flex items-center">
              <Bruno width={30}/>
              <div className=" flex items-center font-medium" style={{fontSize: 20, paddingLeft: 6, position: 'relative', top: -1}}>bruno</div>
            </div>
            <div className="openemoji-attribution mt-10">
              Logo sourced from <Link href="https://openmoji.org/library/emoji-1F436/" target="_blank">OpenMoji</Link>. <br />
              License: <Link href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</Link>
            </div>
          </div>
          <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0  text-center md:text-left">
            <h1 className="font-medium">Compare</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <Link href="/compare/bruno-vs-postman" legacyBehavior>
                  <a className="text-gray-500">
                    Vs Postman
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0 text-center md:text-left mt-6 md:mt-0">
            <h1 className="font-medium">Links</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  href="https://docs.usebruno.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Docs
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/usebruno/bruno/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Release Notes
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://docs.usebruno.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/usebruno/bruno/discussions/384"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0 text-center md:text-left mt-6 md:mt-0">
            <h1 className="font-medium">Community</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  href="https://discord.com/invite/KgcZUncpjq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Discord
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/use_bruno"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/company/usebruno"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </StyledWrapper>
  );

}

export default Footer;
