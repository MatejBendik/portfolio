import aboutImg from "../assets/about_with_diplom.png";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-7 md:px-10 " id="about">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold bg-gradient-to-r tracking-normal from-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text sm:text-4xl">
          About
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-1">
        <div className="relative overflow-hidden">
          <img
            alt="Matej Bendík"
            src={aboutImg}
            title="Matej Bendík"
            className="rounded-lg"
            width="520"
            height="695"
            loading="lazy"
          />
        </div>

        <div className="lg:py-16">
          <article className="space-y-4 leading-2 text-justify">
            <p>
              I'm a 19-year-old Full-Stack Web Developer dedicated to crafting
              things for the web through coding. I'm a passionate person who
              pursues his dreams, who works hard, and who is results-oriented.
            </p>

            <p>
              As a matter of fact, I constantly work on improving myself seeking
              to achieve the best version of myself. My biggest achievement so
              far is I finished at 3. place in the Slovak national Web
              Development competition called ZENIT. Besides this, I have a
              growth mindset in learning new technologies, and lastly, I'm a
              content creator on Twitter.
            </p>
          </article>
        </div>
      </div>
      {/* Numbers */}
      <div className="grid grid-cols-1 w-72 gap-8 md:w-full md:grid-cols-4 md:gap-4 py-6 mt-20 border-4 rounded-lg border-cyan-500 text-center font-semibold text-lg bg-[#f8f8f8]">
        <div>
          <h2>400</h2>
          <p>Cups of Coffee per Year</p>
        </div>
        <div>
          <h2>100+</h2>
          <p>Built Websites</p>
        </div>
        <div>
          <h2>30h</h2>
          <p>Of coding per Week</p>
        </div>
        <div>
          <h2>20</h2>
          <p>GitHub Repositories</p>
        </div>
      </div>
    </div>
  );
};

export default About;
