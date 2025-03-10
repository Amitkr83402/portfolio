import React, { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { RESUME_URL } from "../constants/index";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-darkDesert fixed top-0 w-full z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"style={{ fontFamily: 'Times New Roman',color:"pink" }}>
              Amit Kumar Yadav
            </span>
          </Link>
          
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleOpen}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <button className="flex flex-col mt-4 font-medium text-white lg:flex-row lg:space-x-8 lg:mt-0">
              <Link to="about" smooth={true} duration={500} className="hover:underline">
                About
              </Link>
              <Link to="education" smooth={true} duration={500} className="hover:underline">
                Education
              </Link>
              <Link to="skills" smooth={true} duration={500} className="hover:underline">
                Skills
              </Link>
              <Link to="projects" smooth={true} duration={500} className="hover:underline">
                Projects
              </Link>
              <Link to="experience" smooth={true} duration={500} className="hover:underline">
                Experience
              </Link>
              <a href={RESUME_URL} rel="noopener noreferrer" target="_blank" className="hover:underline">
                Resume
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
