import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Me:</h3>
            <p className="text-gray-300">I'm Prabal, an accomplished full-stack developer skilled in JavaScript, Python, Java, and C#. I excel in creating fluid, expandable applications. Let's join forces to enhance your digital solutions with innovative collaborations and propel them to greater heights.
</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="flex flex-col space-y-2">
              <li><a href="#head" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#project" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="text-gray-300"><a href="mailto:prabalpartapsingh  @edu.sait.ca">prabalpartapsingh@edu.sait.ca</a></p>
            <p className="text-gray-300">(403) 925 1162</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;