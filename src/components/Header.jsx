import { Link, ScrollLink } from "react-scroll";
import { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  let links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl bg-[#f8f8f8] z-20">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Logo section */}
        <div className="font-semibold text-2xl cursor-pointer flex items-center gap-1">
          <span className="whitespace-nowrap bg-gradient-to-r tracking-normal from-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text">
            Matej Bendík
          </span>
        </div>

        {/* Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden absolute"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Navigation links */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-100 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                href={`#${link.link}`}
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer text-lg hover:text-cyan-500 transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
