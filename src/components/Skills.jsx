import skills from "/public/skills.js";

const Skills = () => {
  return (
    <div
      className="mx-auto max-w-screen-xl mt-16 px-7 md:px-10 md:mt-24"
      id="skills"
    >
      <h2 className="text-3xl font-semibold bg-gradient-to-r tracking-normal from-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text sm:text-4xl">
        Skills
      </h2>

      <div className="grid grid-cols-1 mt-3 md:grid-cols-3 w-full font-semibold text-xl">
        <div className="py-4 md:py-2">
          <h2 className="mb-2">Front-End</h2>
          <div className="flex justify-start space-x-6">
            <div>
              <img
                src={skills[13].image}
                alt="JavaScript Icon"
                title={skills[13].name}
                className="w-14 h-14"
              />
            </div>
            <div>
              <img
                src={skills[0].image}
                alt="TypeScript Icon"
                title={skills[0].name}
                className="w-14 h-14"
              />
            </div>
            <div>
              <img
                src={skills[1].image}
                alt="React Icon"
                title={skills[1].name}
                className="w-14 h-14"
              />
            </div>
          </div>
          <div className="flex justify-start space-x-6 mt-2">
            <div>
              <img
                src={skills[2].image}
                alt="Tailwind CSS Icon"
                title={skills[2].name}
                className="w-14 h-14"
              />
            </div>
          </div>
        </div>
        <div className="py-4 md:py-2">
          <h2 className="mb-2">Back-End</h2>
          <div className="flex justify-start space-x-6">
            <div>
              <img
                src={skills[3].image}
                alt="Node Icon"
                title={skills[3].name}
                className="h-14 w-12"
                width="48px"
                height="56px"
              />
            </div>
            <div>
              <img
                src={skills[4].image}
                alt="Express Icon"
                title={skills[4].name}
                className="w-14 h-14"
              />
            </div>
            <div>
              <img
                src={skills[5].image}
                alt="MongoDB Icon"
                title={skills[5].name}
                className="w-14 h-14"
              />
            </div>
          </div>
          <div className="flex justify-start space-x-6 mt-2">
            <div>
              <img
                src={skills[6].image}
                alt="PHP Icon"
                title={skills[6].name}
                className="w-14 h-14"
              />
            </div>
            <div>
              <img
                src={skills[7].image}
                alt="MySQL Icon"
                title={skills[7].name}
                className="w-14 h-14"
              />
            </div>
            <div>
              <img
                src={skills[14].image}
                alt="Firebase Icon"
                title={skills[14].name}
                className="w-14 h-14"
              />
            </div>
          </div>
        </div>
        <div className="py-4 md:py-2">
          <h2 className="mb-2">Other</h2>
          <div className="flex justify-start space-x-6">
            <div>
              <img
                src={skills[8].image}
                alt="Git Icon"
                title={skills[8].name}
                className="w-14 h-14"
              />
            </div>
            <div>
              <img
                src={skills[9].image}
                alt="GitHub Icon"
                title={skills[9].name}
                className="w-14 h-14"
              />
            </div>
            <div>
              <img
                src={skills[10].image}
                title={skills[10].name}
                alt="Linux Icon"
                className="w-14 h-14"
              />
            </div>
          </div>
          <div className="flex justify-start space-x-9 mt-2 ml-2">
            <div>
              <img
                src={skills[11].image}
                alt="Figma Icon"
                title={skills[11].name}
                className="h-14 w-10"
                width="40px"
                height="56px"
              />
            </div>
            <div>
              <img
                src={skills[12].image}
                title={skills[12].name}
                alt="Neovim Icon"
                className="w-14 h-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
