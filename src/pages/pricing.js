import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Switch from "react-switch";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { IconUser, IconUsers, IconPlus } from "@tabler/icons";
import GlobalStyle from "../globalStyles";

export default function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const toggleCurrency = () => {
    setSelectedCurrency((prevCurrency) =>
      prevCurrency === "USD" ? "INR" : "USD"
    );
  };

  const [pricingFor, setPricingFor] = useState("individuals");

  return (
    <div
      className="container flex flex-col root home-page"
      style={{ fontFamily: "Inter", maxWidth: "1280px" }}
    >
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col px-4">
        <Navbar />

        <section className="bg-white">
          <div className="py-8 px-4 max-w-screen-xl lg:pb-16 lg:px-4">
            <div className="flex flex-col gap-x-16">
              <div className="max-w-screen-md mb-6 lg:mb-6">
                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900">
                  Pricing
                </h2>
              </div>
            </div>
            <div className="lg:flex lg:space-x-12 flex-row">
              <div className="flex flex-col col-span-2 justify-start w-full gap-8">
                {/* Pricing fro toggle */}
                <div className="flex flex-row border rounded-full w-fit gap-8 relative transition duration-300 ease-in-out font-medium border border-slate-800">
                  <div
                    className={`absolute rounded-full h-[calc(100%_-_0.5rem)] m-1 ${
                      pricingFor == "individuals"
                        ? "left-0 w-[150px] lg:w-[170px] border-right border-slate-800"
                        : "right-0 w-[150px] lg:w-[170px]"
                    }`}
                  >
                    <div className="gradient-bg w-full h-full p-4"></div>
                  </div>
                  <div
                    className={`p-4 cursor-pointer z-10 text-sm lg:text-base ${
                      pricingFor !== "individuals"
                        ? "hover:underline hover:decoration-slate-300"
                        : ""
                    }`}
                    onClick={() => setPricingFor("individuals")}
                  >
                    For Individual Use
                  </div>
                  <div
                    className={`p-4 cursor-pointer z-10 text-sm lg:text-base ${
                      pricingFor === "individuals"
                        ? "hover:underline hover:decoration-slate-300"
                        : ""
                    }`}
                    onClick={() => setPricingFor("organizations")}
                  >
                    For Organizations
                  </div>
                </div>
                {pricingFor === "individuals" ? (
                  <div className="flex flex-col lg:flex-row gap-4 w-full justify-center">
                    {/* Open source Edition */}
                    <OpenSourceCard />
                    {/* Golden Edition Individuals */}
                    <GoldenEditionIndividualsCard
                      selectedCurrency={selectedCurrency}
                      toggleCurrency={toggleCurrency}
                    />
                    {/* <div className="flex flex-col mt-10 lg:mt-0 p-6 text-gray-900 bg-white rounded-sm border border-gray-500 w-full opacity-20"></div> */}
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
                    {/* Open source Edition */}
                    <OpenSourceCard />
                    {/* Golden Edition Organizations */}
                    <GoldenEditionOrganizationsCard
                      selectedCurrency={selectedCurrency}
                      toggleCurrency={toggleCurrency}
                    />
                    {/* Ultimate Edition Organizations */}
                    <UltimateEditionCard
                      selectedCurrency={selectedCurrency}
                      toggleCurrency={toggleCurrency}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const CheckIcon = () => {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-green-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const CheckIconGray = () => {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-gray-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="flex-shrink-0 w-5 h-4 text-yellow-600"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
};

const OpenSourceCard = () => {
  const opensourceEdition = [
    "REST and GQL Apis",
    "Scripting",
    "Authentication",
    "Environments",
    "Secret Management",
    "Asserts and Tests",
    "Client Certificates",
    "Collection Runner",
    "Cookie Management",
    "Proxies",
    "Code Generation",
    "Documentation",
    "Bru CLI",
    "OpenAPI Import",
  ];

  return (
    <div className="flex flex-col p-6 mx-auto text-gray-900 bg-white rounded-sm w-full gap-8 space-between border border-slate-300 relative overflow-hidden">
      <div className="flex flex-col justify-between z-10">
        <div>
          <h3 className="text-2xl font-extrabold">Opensource Edition</h3>
          <p className="text-xs mt-2 opacity-50">
            The source code for the opensource edition is released under the MIT
            License.
          </p>
          <div className="my-4 italic">Free and Opensource forever</div>
        </div>
        {/* <p className="text-sm text-gray-600 mb-4">
        All open-source contributors of Bruno will receive a free
        license for the Golden Edition.
      </p> */}
        <Link href="/downloads" legacyBehavior className="w-fit">
          <a className="border border-yellow-600 hover:border-yellow-700 font-light rounded-sm text-sm px-5 py-2.5 text-center w-fit">
            Download
          </a>
        </Link>
      </div>
      <ul role="list" className="text-left flex flex-col flex-wrap gap-4 z-10">
        <div className="flex flex-col gap-1">
          {opensourceEdition.slice(0, 7).map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {opensourceEdition.slice(7, 14).map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

const GoldenEditionIndividualsCard = ({ selectedCurrency, toggleCurrency }) => {
  const goldenEditonIndividuals = [
    "Inbuilt Bru File Explorer",
    "Visual Git (Like Gitlens for Vscode)",
    "Load Data from File for Collection Run",
    "Developer Tools",
    "OpenAPI Designer",
  ];

  const goldenEditonIndividualsInDevelopment = [
    "GRPC, Websocket, SocketIO, MQTT",
    "Performance/Load Testing",
    "Custom Themes",
    "Inbuilt Terminal",
  ];

  return (
    <div className="flex flex-col mt-10 lg:mt-0 p-6 text-gray-900 rounded-sm space-between w-full border border-slate-200">
      <div className="flex flex-col h-[100%]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-extrabold">Golden Edition</h3>
          <div className="flex items-center">
            <Switch
              className="react-switch"
              onChange={toggleCurrency}
              checked={selectedCurrency === "INR"}
              onColor="#edc494"
              onHandleColor="#d97706"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.1)"
              height={14}
              width={34}
            />
            <span className="ml-2">INR</span>
          </div>
        </div>

        <p className="text-xs mt-2 opacity-50">
          The source code for Golden Edition features is proprietary.
        </p>

        <div>
          <div className="my-4 flex items-center">
            <span className="text-4xl font-extrabold">
              {selectedCurrency === "USD" ? "$19" : "₹1,699"}
            </span>
            <p className="px-2 mt-2">/user</p>
            <p className="bg-yellow-100 border border-yellow-500 text-yellow-900 rounded-md px-2 py-1 ml-2 inline-flex text-xs mt-2">
              One Time Payment
            </p>
          </div>
        </div>

        <p className="text-sm">
          <a href="/perpetual-fallback-license" className="link">
            Perpetual License for 2 machines.
          </a>{" "}
          2 years of updates.
        </p>

        <div className="inline-flex items-center mt-4 bg-gray-100 rounded-full p-1 w-fit border border-slate-500">
          <div
            className={`cursor-pointer px-3 flex items-center justify-center rounded-full`}
          >
            <IconUser
              className="text-gray-500 mr-2 icon"
              size={16}
              strokeWidth={1.5}
            />{" "}
            For Individuals
          </div>
        </div>

        <ul role="list" className="mb-6 mt-6 space-y-2 text-left">
          <li className="flex items-center space-x-3">
            <HeartIcon />
            <span>Support Bruno's Development</span>
          </li>
          <li className="flex items-center space-x-3 pb-4">
            <IconPlus
              size={16}
              strokeWidth={1.5}
              style={{ marginLeft: "2px" }}
            />
            <span>Everything in Opensource</span>
          </li>
          {goldenEditonIndividuals.map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}

          <li className="text-gray-500 text-sm pt-4 pl-8 italic">
            Coming Soon
          </li>
          {goldenEditonIndividualsInDevelopment.map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIconGray />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="/buy-golden-edition"
        className="text-white bg-yellow-600 hover:bg-yellow-700 font-medium !rounded-sm text-sm px-5 py-2.5 text-center mt-4"
      >
        Buy Now!
      </a>
    </div>
  );
};

const GoldenEditionOrganizationsCard = ({
  selectedCurrency,
  toggleCurrency,
}) => {
  const goldenEditonIndividuals = [
    "Inbuilt Bru File Explorer",
    "Visual Git (Like Gitlens for Vscode)",
    "Load Data from File for Collection Run",
    "Developer Tools",
    "OpenAPI Designer",
  ];

  const goldenEditonIndividualsInDevelopment = [
    "GRPC, Websocket, SocketIO, MQTT",
    "Performance/Load Testing",
    "Custom Themes",
    "Inbuilt Terminal",
  ];

  const goldenEditonOrganizations = [
    "Centralized License Management",
    "Advanced SUpport",
  ];
  return (
    <div className="flex flex-col mt-10 lg:mt-0 p-6 text-gray-900 rounded-sm space-between w-full border border-slate-200">
      <div className="flex flex-col h-[100%]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-extrabold">Golden Edition</h3>
          <div className="flex items-center">
            <Switch
              className="react-switch"
              onChange={toggleCurrency}
              checked={selectedCurrency === "INR"}
              onColor="#edc494"
              onHandleColor="#d97706"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.1)"
              height={14}
              width={34}
            />
            <span className="ml-2">INR</span>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-2">
          The source code for Golden Edition features is proprietary.
        </p>

        <div>
          <div className="my-4 flex items-center">
            <span className="text-4xl font-extrabold">
              {selectedCurrency === "USD" ? "$49" : "₹4,999"}
            </span>
            <p className="px-2 mt-2">/user</p>
            <p className="bg-yellow-100 border border-yellow-500 text-yellow-900 rounded-md px-2 py-1 ml-2 inline-flex text-xs mt-2">
              One Time Payment
            </p>
          </div>
        </div>

        <p className="text-sm min-h-[40px]">
          <a href="/perpetual-fallback-license" className="link">
            Perpetual License for 2 machines.
          </a>{" "}
          2 years of updates.
        </p>

        <div className="inline-flex items-center mt-4 bg-gray-100 rounded-full p-1 w-fit border border-slate-500">
          <div
            className={`cursor-pointer px-3 flex items-center justify-center rounded-full`}
          >
            <IconUser
              className="text-gray-500 mr-2 icon"
              size={16}
              strokeWidth={1.5}
            />
            For Organizations
          </div>
        </div>

        <ul role="list" className="mb-6 mt-6 space-y-2 text-left">
          <li className="flex items-center space-x-3">
            <HeartIcon />
            <span>Support Bruno's Development</span>
          </li>
          <li className="flex items-center space-x-3 pb-4">
            <IconPlus
              size={16}
              strokeWidth={1.5}
              style={{ marginLeft: "2px" }}
            />
            <span>Everything in Opensource</span>
          </li>
          {goldenEditonOrganizations.map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
          {goldenEditonIndividuals.map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}

          <li className="text-gray-500 text-sm pt-4 pl-8 italic">
            Coming Soon
          </li>
          {goldenEditonIndividualsInDevelopment.map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIconGray />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/support" legacyBehavior>
        <a className="text-white bg-yellow-600 hover:bg-yellow-700 !rounded-sm text-sm px-5 py-2.5 text-center mt-4 font-medium">
          Contact Us
        </a>
      </Link>
    </div>
  );
};

const UltimateEditionCard = ({ selectedCurrency, toggleCurrency }) => {
  const ultimateEdition = [
    "Self-hosted Licensing server",
    "3rd party Extensions",
    "Priority Support w/ SLA",
    "Transact via Purchase Order",
    "Integrate with Secret Managers",
  ];

  const ultimateEditionInDevelopment = [
    "Collection Registry",
    "Request Forms",
    "Test Reports",
    "SSO",
    "RBAC",
    "Analytics Suite",
  ];
  return (
    <div className="flex flex-col mt-10 lg:mt-0 p-6 text-gray-900 rounded-sm space-between w-full border border-slate-200">
      <div className="flex flex-col h-[100%]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-extrabold">Ultimate Edition</h3>
          <div className="flex items-center">
            <Switch
              className="react-switch"
              onChange={toggleCurrency}
              checked={selectedCurrency === "INR"}
              onColor="#edc494"
              onHandleColor="#d97706"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.1)"
              height={14}
              width={34}
            />
            <span className="ml-2">INR</span>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-2">
          The source code for Ultimate Edition features is proprietary.
        </p>

        <div>
          <div className="my-4 flex items-center">
            <span className="text-4xl font-extrabold">
              {selectedCurrency === "USD" ? "$99" : "₹8,299"}
            </span>
            <p className="px-2 mt-2">/user</p>
          </div>
        </div>

        <p className="text-sm min-h-[40px]">Annual Subscription</p>
        <div className="inline-flex items-center mt-4 bg-gray-100 rounded-full p-1 w-fit border border-slate-500">
          <div
            className={`cursor-pointer px-3 flex items-center justify-center rounded-full`}
          >
            <IconUsers
              className="text-gray-500 mr-2 icon"
              size={16}
              strokeWidth={1.5}
            />{" "}
            For Organizations
          </div>
        </div>

        <ul role="list" className="mb-4 mt-6 space-y-2 text-left">
          <li className="flex items-center space-x-3">
            <HeartIcon />
            <span>Support Bruno's Development</span>
          </li>
          <li className="flex items-center space-x-3 pb-4">
            <IconPlus
              size={16}
              strokeWidth={1.5}
              style={{ marginLeft: "2px" }}
            />
            <span>Everything in Golden Edition</span>
          </li>
          {ultimateEdition.map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
          <li className="text-gray-500 text-sm pt-4 pl-8 italic">
            Coming Soon
          </li>
          {ultimateEditionInDevelopment.map((item, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <CheckIconGray />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-sm mt-4 text-gray-600">
          For help with migration and custom requirements, please reach us at{" "}
          <a href="mailto:sales@usebruno.com" className="link">
            sales@usebruno.com
          </a>
          <br /> <br />
          We also help accelerate adoption of Bruno in your organization and
          offer best practice recommendations.
        </div>
      </div>
      <Link href="/support" legacyBehavior>
        <a className="text-white bg-yellow-600 hover:bg-yellow-700 !rounded-sm text-sm px-5 py-2.5 text-center mt-4 font-medium">
          Contact Us
        </a>
      </Link>
    </div>
  );
};
