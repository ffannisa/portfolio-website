import React from "react";

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="bg-black bg-opacity-70 fixed top-0 left-0 w-screen max-w-full z-50 text-right shadow-md"
    >
      {/* <ul className="flex flex-wrap justify-end md:justify-end items-center h-14 space-x-4 pr-4"> */}
      <ul className="flex flex-wrap justify-center md:justify-end items-center h-14 px-2 md:pr-4 space-x-2 md:space-x-4">
        <li>
          <a
            href="#top"
            className="text-white font-semibold rounded-full px-3 py-2 text-sm md:px-5 md:py-2.5 md:text-base transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white font-semibold rounded-full px-3 py-2 text-sm md:px-5 md:py-2.5 md:text-base transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105"
          >
            About Me
          </a>
        </li>

        {/* <li>
          <a
            href="#experience"
            className="text-white font-semibold rounded-full px-3 py-2 text-sm md:px-5 md:py-2.5 md:text-base transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105"
          >
            Experience
          </a>
        </li> */}

        <li>
          <a
            href="#projects"
            className="text-white font-semibold rounded-full px-3 py-2 text-sm md:px-5 md:py-2.5 md:text-base transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="text-white font-semibold rounded-full px-3 py-2 text-sm md:px-5 md:py-2.5 md:text-base transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
