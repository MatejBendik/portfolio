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
            <div className="sm:w-1/3 w-full sm:h-1/3 h-48 w-48 sm:mr-10 items-center justify-center flex-shrink-0">
              <img
                src="/images/realtor.webp"
                alt="Realtor clone"
                title="Realtor clone"
                className="border rounded-lg border-grey-500"
                loading="lazy"
                width="385px"
                height="199px"
              />
            </div>
            <div className="flex-grow text-left md:mt-6 sm:mt-0">
              <h2 className="text-2xl font-semibold mb-2">Realtor clone</h2>
              <p className="leading-relaxed md:text-left text-justify">
                Realtor clone app. This feature-packed app enables users to
                effortlessly sign up and sign in using their email or Google
                account. With a seamless interface, users can browse, create,
                update, and delete property listings, providing a complete CRUD
                experience.
              </p>
              <div className="py-4">
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/javascript.webp"
                      alt="JavaScript Icon"
                      title="JavaScript"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/react.webp"
                      alt="React Icon"
                      title="React"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/tailwind.webp"
                      alt="Tailwind Icon"
                      title="Tailwind"
                      className="h-8 w-8"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/firebase.webp"
                      alt="Firebase Icon"
                      title="Firebase"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex md:mb-16 mb-2">
                <div className="w-full md:w-1/2 flex space-x-3">
                  <a
                    type="button"
                    className="min-w-fit cursor-pointer inline-flex items-center hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-center font-medium text-white transition duration-300"
                    href="https://realtor-clone.matejbendik.com"
                    target="_blank"
                  >
                    <img
                      src="/icons/external_link.png"
                      className="mr-2"
                      height="25"
                      width="25"
                      alt="Live"
                      title="Live"
                    />
                    <span className="font-medium">Live</span>
                  </a>
                  <a
                    type="button"
                    className="min-w-fit inline-flex items-center border-2 px-4 py-2 rounded-lg border-cyan-500 hover:-translate-y-1 transition duration-300"
                    href="https://github.com/MatejBendik/realtor-clone"
                    target="_blank"
                  >
                    <img
                      src="/images/github.webp"
                      className="w-6 h-6 mr-2"
                      alt="Source"
                      title="Source"
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
                src="/images/promptzone.webp"
                className="border rounded-lg border-grey-500"
                alt="Promptzone"
                title="Promptzone"
                loading="lazy"
                width="385px"
                height="199px"
              />
            </div>
            <div className="flex-grow md:text-right text-left md:mt-6 md:pr-10 sm:mt-0">
              <h2 className="text-2xl font-semibold mb-2">Promptzone</h2>
              <p className="leading-relaxed md:text-right text-justify">
                Promptzone is an AI prompting tool for modern world to discover,
                create and share creative prompts with ease. It offers a
                seamless experience for discovering, crafting, and exchanging
                prompts. Built with new modern Next.js 13 and App Router.
              </p>
              <div className="py-4">
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/javascript.webp"
                      className="w-8 h-8"
                      alt="JavaScript"
                      title="JavaScript"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/react.webp"
                      className="w-8 h-8"
                      alt="React"
                      title="React"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/nextjs.webp"
                      className="w-8 h-8"
                      alt="Next"
                      title="Next"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/tailwind.webp"
                      className="h-8 w-8"
                      alt="Tailwind CSS"
                      title="Tailwind CSS"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/mongodb.webp"
                      className="h-8 w-8"
                      alt="MongoDB"
                      title="MongoDB"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-end md:mb-16 mb-2">
                <div className="w-full md:w-auto flex space-x-3">
                  <a
                    type="button"
                    className="min-w-fit cursor-pointer inline-flex items-center hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-center font-medium text-white transition duration-300"
                    href="https://promptzone.matejbendik.com"
                    target="_blank"
                  >
                    <img
                      src="/icons/external_link.png"
                      className="mr-2"
                      height="25"
                      width="25"
                      alt="Live"
                      title="Live"
                    />
                    <span className="font-medium">Live</span>
                  </a>
                  <a
                    type="button"
                    className="min-w-fit inline-flex items-center border-2 px-4 py-2 rounded-lg border-cyan-500 ml-5 hover:-translate-y-1 transition duration-300"
                    href="https://github.com/MatejBendik/promptzone"
                    target="_blank"
                  >
                    <img
                      src="/images/github.webp"
                      className="w-6 h-6 mr-2"
                      alt="Source"
                      title="Source"
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
            <div className="sm:w-1/3 w-full sm:h-1/3 h-48 w-48 sm:mr-10 items-center justify-center flex-shrink-0">
              <img
                src="images/teebase.webp"
                className="border rounded-lg border-grey-500"
                alt="TeeBase"
                title="TeeBase"
                loading="lazy"
                width="385px"
                height="199px"
              />
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
                      src="/images/typescript.webp"
                      className="w-8 h-8"
                      alt="TypeScript"
                      title="TypeScript"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/react.webp"
                      className="w-8 h-8"
                      alt="React"
                      title="React"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/node.webp"
                      className="h-8 w-7"
                      alt="Node"
                      title="Node"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/express.webp"
                      className="w-8 h-8"
                      alt="Express"
                      title="Express"
                    />
                  </div>
                </div>

                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/mongodb.webp"
                      className="w-8 h-8"
                      alt="MongoDB"
                      title="MongoDB"
                    />
                  </div>
                </div>
                <div className="inline-block mr-2">
                  <div className="flex pr-1 h-full items-center">
                    <img
                      src="/images/mui.webp"
                      className="h-7 w-8"
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
                    className="min-w-fit inline-flex items-center border-2 px-4 py-2 rounded-lg border-cyan-500 hover:-translate-y-1 transition duration-300"
                    href="https://github.com/MatejBendik/TeeBase"
                    target="_blank"
                  >
                    <img
                      src="/images/github.webp"
                      className="w-6 h-6 mr-2"
                      alt="Source"
                      title="Source"
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
