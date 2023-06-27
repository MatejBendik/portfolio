import { Link } from "react-scroll";
import heroImg from "../assets/hero_pfp.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-screen-xl mt-16 px-7 md:px-10 md:mt-24">
      <footer>
        <div className="w-full max-w-screen-xl mx-auto mb-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://matejbendik.com"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src={heroImg}
                className="h-16 w-16 mr-3"
                alt="Matej Bendík"
              />
              <span className="self-center md:text-2xl text-xl whitespace-nowrap">
                Matej Bendík
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 font-medium sm:mb-6">
              <li>
                <Link
                  href="#home"
                  to={"home"}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  to={"about"}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  to={"skills"}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  to={"projects"}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  to={"contact"}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer mr-4 hover:underline md:mr-6"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-4" />
          <span className="block text-sm sm:text-center">
            Copyright © {currentYear} | All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
