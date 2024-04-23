import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 text-center bg-black">
      <div className="text-white font-semibold">
        <p className="text-base">© {new Date().getFullYear()} .</p>
        <p className="text-base"></p>
      </div>
    </footer>
  );
};

export default Footer;
