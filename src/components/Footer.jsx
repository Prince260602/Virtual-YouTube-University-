import React from "react";

const Footer = () => {
  return (
      <footer className="container mx-auto px-4 py-8 text-center bg-gray-300 text-black">
        <p>© {new Date().getFullYear()} Virtual YouTube University. Learn from the best.</p>
      </footer>
  );
};

export default Footer;
