const Contact = () => {
  return (
    <div
      className="mx-auto max-w-screen-xl mt-16 px-7 md:px-10 md:mt-24"
      id="contact"
    >
      <h2 className="text-3xl font-semibold bg-gradient-to-r tracking-normal from-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text sm:text-4xl">
        Get in touch
      </h2>
      <p className="my-3 leading-2 md:pb-3 md:text-left text-justify">
        I’m currently available to get involved in new projects, so contact me
        and let’s create something together. You can contact me via email below
        or any other social media. (I’m most active on Twitter).
      </p>
      {/* Social icons */}
      <div className="flex mt-5">
        <a href="https://twitter.com/BendikMatej" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
            alt="Twitter Icon"
            title="Twitter"
            className="w-12 h-10 mr-5"
          />
        </a>
        <a href="https://www.linkedin.com/in/matejbendik/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            alt="LinkedId Icon"
            title="LinkedId"
            className="w-10 h-10 mr-5"
          />
        </a>
        <a href="https://www.github.com/MatejBendik/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt="GitHub Icon"
            title="GitHub"
            className="w-10 h-10 mr-5"
          />
        </a>
        <a href="https://www.instagram.com/matejbendik/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram Icon"
            title="Instagram"
            className="w-10 h-10 mr-5"
          />
        </a>
      </div>
      {/* Email */}
      <div className="flex mt-5 mb-16">
        <a
          className="cursor-pointer hover:underline"
          href="mailto:name@email.com"
        >
          matejbendik.mb@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
