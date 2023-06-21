const Projects = () => {
  return (
    <div
      className="mx-auto max-w-screen-xl mt-16 px-7 md:px-10 md:mt-24"
      id="projects"
    >
      <h2 className="text-3xl font-semibold bg-gradient-to-r tracking-normal from-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text sm:text-4xl">
        I love what I do
      </h2>
      <p className="my-3 leading-2 md:pb-3 md:text-left text-justify">
        The following projects helped me a lot in grasping and mastering a ton
        of concepts about Front-End and Back-End.
      </p>
      {/* Project 1 */}
      <section className="mt-5">
        {" "}
        <div className="container">
          <div className="p-5 bg-white flex items-center mx-auto border-b-2 border-cyan-500 drop-shadow mb-10 rounded-lg md:flex-row flex-col">
            <div className="sm:w-1/3 sm:h-1/3 h-48 w-48 sm:mr-10 items-center justify-center flex-shrink-0">
              <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg" />
            </div>
            <div className="flex-grow text-left md:mt-6 sm:mt-0">
              <h2 className="text-2xl font-semibold mb-2">Coming soon</h2>
              <p className="leading-relaxed md:text-left text-justify">
                Coming soon
              </p>
              <div className="py-4">
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img src="/images/typescript.png" className="w-8 h-8" />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img src="/images/react.png" className="w-8 h-8" />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img src="/images/node.png" className="h-8 w-7" />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img src="/images/express.png" className="w-8 h-8" />
                  </div>
                </div>

                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img src="/images/mongodb.png" className="w-8 h-8" />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img src="/images/mui.png" className="h-7" />
                  </div>
                </div>
              </div>
              <div className="md:flex md:mb-16 mb-2">
                <div className="w-full md:w-1/2 flex space-x-3">
                  <a
                    type="button"
                    className="cursor-pointer inline-flex items-center hover:-translate-y-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center font-medium text-white transition duration-300"
                    href="https://sortlen.vercel.app"
                    target="_blank"
                  >
                    <img
                      src="/icons/external_link.png"
                      className="mr-2"
                      height="25"
                      width="25"
                      alt="Live"
                    />
                    <span className="font-medium">Live</span>
                  </a>
                  <a
                    type="button"
                    className="inline-flex items-center border-2 px-4 py-2 rounded-lg border-cyan-500 hover:-translate-y-1 transition duration-300"
                    href="https://github.com/MatejBendik/TeeBase"
                    target="_blank"
                  >
                    <img
                      src="/images/github.png"
                      className="w-6 h-6 mr-2"
                      alt="Live"
                    />
                    <span className="font-medium">Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 */}
      <section className="mt-5">
        <div className="container">
          <div className="p-5 bg-white flex items-center mx-auto mb-10 border-b-2 border-cyan-500 rounded-lg drop-shadow md:flex-row flex-col">
            <div className="md:order-last w-full sm:w-1/3 sm:h-1/3 h-48 w-48 sm:mr-10 items-center justify-center flex-shrink-0">
              <img
                src="/images/sortlen.png"
                className="border rounded-lg border-grey-500"
              />
            </div>
            <div className="flex-grow md:text-right text-left md:mt-6 md:pr-10 sm:mt-0">
              <h2 className="text-2xl font-semibold mb-2">Sortlen</h2>
              <p className="leading-relaxed md:text-right text-justify">
                A tool for sorting text by line length. User can add icons
                before each line, even a number of lines. The result can be
                copied to clipboard.
              </p>
              <div className="py-4">
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/javascript.png"
                      className="w-8 h-8"
                      alt="JavaScript"
                      title="JavaScript"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/react.png"
                      className="w-8 h-8"
                      alt="React"
                      title="React"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/tailwind.png"
                      className="h-8 w-7"
                      alt="Tailwind CSS"
                      title="Tailwind CSS"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex md:justify-end md:mb-16 mb-2">
                <div className="w-full md:w-1/3 flex space-x-3">
                  <a
                    type="button"
                    className="cursor-pointer inline-flex items-center hover:-translate-y-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center font-medium text-white transition duration-300"
                    href="https://sortlen.vercel.app"
                    target="_blank"
                  >
                    <img
                      src="/icons/external_link.png"
                      className="mr-2"
                      height="25"
                      width="25"
                      alt="Live"
                    />
                    <span className="font-medium">Live</span>
                  </a>
                  <a
                    type="button"
                    className="inline-flex items-center border-2 px-4 py-2 rounded-lg border-cyan-500 ml-5 hover:-translate-y-1 transition duration-300"
                    href="https://github.com/MatejBendik/sortlen"
                    target="_blank"
                  >
                    <img
                      src="/images/github.png"
                      className="w-6 h-6 mr-2"
                      alt="Live"
                    />
                    <span className="font-medium">Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3 */}
      <section className="mt-5">
        <div className="container">
          <div className="p-5 bg-white flex items-center mx-auto border-b-2 border-cyan-500 drop-shadow mb-10 rounded-lg md:flex-row flex-col">
            <div className="sm:w-1/3 sm:h-1/3 h-48 w-48 sm:mr-10 items-center justify-center flex-shrink-0">
              <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg" />
            </div>
            <div className="flex-grow text-left md:mt-6 sm:mt-0">
              <h2 className="text-2xl font-semibold mb-2">TeeBase</h2>
              <p className="leading-relaxed md:text-left text-justify">
                A fully custom learning system for private group of the High
                school students. With Registration, JWT, REST API and more.
              </p>
              <div className="py-4">
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/typescript.png"
                      className="w-8 h-8"
                      alt="TypeScript"
                      title="TypeScript"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/react.png"
                      className="w-8 h-8"
                      alt="React"
                      title="React"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/node.png"
                      className="h-8 w-7"
                      alt="Node"
                      title="Node"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/express.png"
                      className="w-8 h-8"
                      alt="Express"
                      title="Express"
                    />
                  </div>
                </div>

                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/mongodb.png"
                      className="w-8 h-8"
                      alt="MongoDB"
                      title="MongoDB"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/mui.png"
                      className="h-7"
                      alt="MaterialUI"
                      title="MaterialUI"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex md:mb-16 mb-2">
                <div className="w-full md:w-1/2 flex space-x-3">
                  <a
                    type="button"
                    className="inline-flex items-center border-2 px-4 py-2 rounded-lg border-cyan-500 hover:-translate-y-1 transition duration-300"
                    href="https://github.com/MatejBendik/TeeBase"
                    target="_blank"
                  >
                    <img
                      src="/images/github.png"
                      className="w-6 h-6 mr-2"
                      alt="Live"
                    />
                    <span className="font-medium">Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
