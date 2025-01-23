import React from "react";

const Navbar_Proj = () => {
  return (
    <nav
      id="nav"
      className="bg-black bg-opacity-70 fixed top-0 left-0 w-full z-50 text-right shadow-md"
    >
      <ul className="flex flex-wrap justify-center md:justify-end items-center h-14 px-2 md:pr-4 space-x-2 md:space-x-4">
        <li>
          <a
            href="/"
            className="text-white font-semibold rounded-full px-3 py-2 text-sm md:px-5 md:py-2.5 md:text-base transition-all hover:bg-pink-300 hover:shadow-lg hover:scale-105"
          >
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar_Proj;
