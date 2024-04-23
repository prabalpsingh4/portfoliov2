import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-xl font-bold">My Portfolio</a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {/* <li><a href="projects" className="text-white hover:text-gray-300">My Projects</a></li>
            <li><a href="#skills" className="text-white hover:text-gray-300">My Skills</a></li> */}
            <li><a href="/form/" className="text-white hover:text-gray-300">Contact Me</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/prabalpsingh4" className="text-white hover:text-gray-300">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage&_ga=2.84277209.1534343690.1713830871-1833812469.1705652234&_gac=1.190296665.1713830871.Cj0KCQjwlZixBhCoARIsAIC745B5rI3Hdo5bQHv_E9w4KhTAvt5BJOpFqa6qe8xqTpw9N3PxKB9WcPUaAlEAEALw_wcB" className="text-white hover:text-gray-300">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
