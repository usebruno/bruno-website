import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import GlobalStyle from "../globalStyles";

export default function About() {
  const people = [
    {
      name: "Anoop M D",
      role: "Founder / CEO",
      imageUrl: "/images/team/anoop-pic.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/anoop-m-d-868099100/",
      githubUrl: "https://github.com/helloanoop",
    },
    {
      name: "Lohit J",
      role: "Lead Software Engineer",
      imageUrl: "/images/team/lohit-pic.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/lohitj/",
      githubUrl: "https://github.com/lohxt1",
    },
    {
      name: "Anusree PS",
      role: "Senior Software Engineer",
      imageUrl: "/images/team/anusree-pic.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/anusreesubash/",
      githubUrl: "https://github.com/anusreesubash",
    },
    {
      name: "Sanjai Kumar S",
      role: "Software Engineer",
      imageUrl: "/images/team/sanjai-pic.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/sanjai0py/",
      githubUrl: "https://github.com/sanjai0py",
    },
    {
      name: "Bruno",
      role: "Chief Joy Officer",
      imageUrl: "/images/team/bruno.png",
    },
  ];

  return (
    <div
      className="container flex flex-col root home-page"
      style={{fontFamily: "Inter", maxWidth: "1280px"}}
    >
      <Head>
        <title>Team</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <GlobalStyle/>

      <main className="flex flex-grow flex-col px-4">
        <Navbar/>

        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-20">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                Our Team
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-lg">
                We are on a{" "}
                <a
                  href="https://github.com/usebruno/bruno/discussions/269"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  journey
                </a>{" "}
                to re-invent the api client.
              </p>
            </div>

            <Team people={people}/>

            <div>
              <h2 className="mb-14 mt-20 text-4xl text-center tracking-tight font-extrabold text-gray-900">
                Opensource Contributors
              </h2>
              <img
                src="https://contrib.rocks/image?repo=usebruno/bruno"
                alt="Contributors"
                className="mx-auto my-0 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/usebruno/bruno/graphs/contributors"
                  )
                }
              />
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

function Team({people = []}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>

                  <div>
                    {person.name !== "Bruno" && (
                      <ul role="list" className="mt-3 flex gap-x-6">
                        {person.xUrl && (
                          <li>
                            <a
                              href={person.xUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">X</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"/>
                              </svg>
                            </a>
                          </li>
                        )}
                        {person.linkedinUrl && (
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        )}

                        {person.githubUrl && (
                          <li>
                            <a
                              href={person.githubUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"/>
                              </svg>
                            </a>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
