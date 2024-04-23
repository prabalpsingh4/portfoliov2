import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 text-center bg-black">
      <div className="text-white font-semibold">
        <p className="text-base">© {new Date().getFullYear()} Khazad Tech All Rights Reserved.</p>
        <p className="text-base">Contact us: contact@khazadtech.com | Phone: 1-800-123-4567</p>
      </div>
    </footer>
  );
};

export default Footer;
