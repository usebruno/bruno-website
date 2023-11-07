import React, { useState, useEffect } from "react";
import StyledWrapper from "./StyledWrapper";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setMenuOpen(window.innerWidth >= 640 ? true : false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledWrapper className="w-full site-navbar">
      <div>
        <header className="flex items-center justify-between py-4">
          <div>
            <Link href="/" legacyBehavior>
              <div className="flex items-center py-2 cursor-pointer">
                <div className="flex flex-col justify-center text-left">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <svg
                        id="emoji"
                        width="34"
                        viewBox="0 0 72 72"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="color">
                          <path
                            fill="#F4AA41"
                            stroke="none"
                            d="M23.5,14.5855l-4.5,1.75l-7.25,8.5l-4.5,10.75l2,5.25c1.2554,3.7911,3.5231,7.1832,7.25,10l2.5-3.3333 c0,0,3.8218,7.7098,10.7384,8.9598c0,0,10.2616,1.936,15.5949-0.8765c3.4203-1.8037,4.4167-4.4167,4.4167-4.4167l3.4167-3.4167 l1.5833,2.3333l2.0833-0.0833l5.4167-7.25L64,37.3355l-0.1667-4.5l-2.3333-5.5l-4.8333-7.4167c0,0-2.6667-4.9167-8.1667-3.9167 c0,0-6.5-4.8333-11.8333-4.0833S32.0833,10.6688,23.5,14.5855z"
                          />
                          <polygon
                            fill="#EA5A47"
                            stroke="none"
                            points="36,47.2521 32.9167,49.6688 30.4167,49.6688 30.3333,53.5021 31.0833,57.0021 32.1667,58.9188 35,60.4188 39.5833,59.8355 41.1667,58.0855 42.1667,53.8355 41.9167,49.8355 39.9167,50.0855"
                          />
                          <polygon
                            fill="#3F3F3F"
                            stroke="none"
                            points="32.5,36.9188 30.9167,40.6688 33.0833,41.9188 34.3333,42.4188 38.6667,42.5855 41.5833,40.3355 39.8333,37.0855"
                          />
                        </g>
                        <g id="hair" />
                        <g id="skin" />
                        <g id="skin-shadow" />
                        <g id="line">
                          <path
                            fill="#000000"
                            stroke="none"
                            d="M29.5059,30.1088c0,0-1.8051,1.2424-2.7484,0.6679c-0.9434-0.5745-1.2424-1.8051-0.6679-2.7484 s1.805-1.2424,2.7484-0.6679S29.5059,30.1088,29.5059,30.1088z"
                          />
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M33.1089,37.006h6.1457c0.4011,0,0.7634,0.2397,0.9203,0.6089l1.1579,2.7245l-2.1792,1.1456 c-0.6156,0.3236-1.3654-0.0645-1.4567-0.754"
                          />
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M34.7606,40.763c-0.1132,0.6268-0.7757,0.9895-1.3647,0.7471l-2.3132-0.952l1.0899-2.9035 c0.1465-0.3901,0.5195-0.6486,0.9362-0.6486"
                          />
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M30.4364,50.0268c0,0-0.7187,8.7934,3.0072,9.9375c2.6459,0.8125,5.1497,0.5324,6.0625-0.25 c0.875-0.75,2.6323-4.4741,1.8267-9.6875"
                          />
                          <path
                            fill="#000000"
                            stroke="none"
                            d="M44.2636,30.1088c0,0,1.805,1.2424,2.7484,0.6679c0.9434-0.5745,1.2424-1.8051,0.6679-2.7484 c-0.5745-0.9434-1.805-1.2424-2.7484-0.6679C43.9881,27.9349,44.2636,30.1088,44.2636,30.1088z"
                          />
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M25.6245,42.8393c-0.475,3.6024,2.2343,5.7505,4.2847,6.8414c1.1968,0.6367,2.6508,0.5182,3.7176-0.3181l2.581-2.0233l2.581,2.0233 c1.0669,0.8363,2.5209,0.9548,3.7176,0.3181c2.0504-1.0909,4.7597-3.239,4.2847-6.8414"
                          />
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M19.9509,28.3572c-2.3166,5.1597-0.5084,13.0249,0.119,15.3759c0.122,0.4571,0.0755,0.9355-0.1271,1.3631l-1.9874,4.1937 c-0.623,1.3146-2.3934,1.5533-3.331,0.4409c-3.1921-3.7871-8.5584-11.3899-6.5486-16.686 c7.0625-18.6104,15.8677-18.1429,15.8677-18.1429c2.8453-1.9336,13.1042-6.9375,24.8125,0.875c0,0,8.6323-1.7175,14.9375,16.9375 c1.8036,5.3362-3.4297,12.8668-6.5506,16.6442c-0.9312,1.127-2.7162,0.8939-3.3423-0.4272l-1.9741-4.1656 c-0.2026-0.4275-0.2491-0.906-0.1271-1.3631c0.6275-2.3509,2.4356-10.2161,0.119-15.3759"
                          />
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M52.6309,46.4628c0,0-3.0781,6.7216-7.8049,8.2712"
                          />
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M19.437,46.969c0,0,3.0781,6.0823,7.8049,7.632"
                          />
                          <line
                            x1="36.2078"
                            x2="36.2078"
                            y1="47.3393"
                            y2="44.3093"
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                        </g>
                      </svg>
                    </div>
                    <div
                      className=" flex items-center font-medium"
                      style={{
                        fontSize: 20,
                        paddingLeft: 6,
                        position: "relative",
                        top: -1,
                      }}
                    >
                      bruno
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <nav className={`${menuOpen ? "flex" : "hidden"}`}>
            <Link href="/manifesto" legacyBehavior>
              <a className="font-medium mr-3 hover:text-yellow-600 transition">
                Manifesto
              </a>
            </Link>
            <Link href="/bru" legacyBehavior>
              <a className="font-medium mr-3 hover:text-yellow-600 transition">
                Bru
              </a>
            </Link>
            <Link href="https://docs.usebruno.com" legacyBehavior>
              <a className="font-medium mr-3 hover:text-yellow-600 transition">
                Docs
              </a>
            </Link>
            <Link href="" legacyBehavior>
              <a
                href="https://github.com/usebruno/bruno/discussions/384"
                target="_blank"
                rel="noreferrer"
                className="font-medium mr-3 hover:text-yellow-600 transition"
              >
                Roadmap
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="font-medium mr-3 hover:text-yellow-600 transition">
                About
              </a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="font-medium mr-3 hover:text-yellow-600 transition">
                Pricing
              </a>
            </Link>
            <Link href="" legacyBehavior>
              <a href="" className="sm:inline-block">
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=usebruno&repo=bruno&type=star&count=true"
                  frameBorder="0"
                  scrolling="0"
                  width="120"
                  height="20"
                  title="Bruno on Github"
                ></iframe>
              </a>
            </Link>
            <Link href="/downloads" legacyBehavior>
              <a className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none transition">
                Download
              </a>
            </Link>
          </nav>
          <button
            className="toggle inline-block sm:hidden w-8 h-8 text-slate-700 p-1"
            onClick={menuToggle}
          >
            {menuOpen ? (
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* X icon */}
                <path
                  d="M4 4l12 12m0-12L4 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hamburger icon */}
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            )}
          </button>
        </header>
      </div>
    </StyledWrapper>
  );
};

export default Navbar;
