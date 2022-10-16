import React from "react"
import StyledWrapper from './StyledWrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <StyledWrapper>
      <footer className="px-4 divide-y bg-coolGray-100 text-coolGray-800">
        <div className="container flex flex-col justify-center pt-6 pb-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <a href="https://twitter.com/use_bruno" target="_blank" title="Twitter" className="flex items-center mr-2">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fillCurrent">
              <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
            </svg>
          </a>
          <a href="https://www.github.com/usebruno/bruno" target="_blank" title="github" className="flex items-center p-1">
            <img src='github.svg' className="ml-2" style={{width: '20px'}}/>
          </a>
        </div>
      </footer>
    </StyledWrapper>
  );

}

export default Footer;
