import heroImg from "../assets/hero_pfp.png";

const Hero = () => {
  return (
    <div className="px-7 md:px-10 my-14 md:h-screen md:pt-16" id="home">
      <div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Texts */}
          <div>
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1 className="font-semibold text-3xl md:text-5xl my-4">
              Matej Bendík
            </h1>
            <p className="md:w-96">
              Full-Stack Web Developer, CS Student & Content creator. I convert
              ideas into a code.
            </p>

            {/* Buttons */}
            <div className="mt-5">
              <button className="text-md mb-2 mr-2 hover:scale-105 hover:-translate-y-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center font-medium text-white transition-all hover:bg-gradient-to-bl duration-300">
                Projects
              </button>
              <button className="border-2 px-6 py-1.5 rounded-lg border-cyan-500 ml-5 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                Contact me
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="order-first md:order-last relative">
            <img src={heroImg} alt="Hero image" width="400" height="400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;