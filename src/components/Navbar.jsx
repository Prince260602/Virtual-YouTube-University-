import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">Virtual YouTube University</h2>
      <ul className="list-none p-0 mt-4 flex justify-center space-x-6">
        <li>
          <a href="/" className="text-white text-lg hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="/about" className="text-white text-lg hover:text-gray-400">About</a>
        </li>
        <li>
          <a href="/contact" className="text-white text-lg hover:text-gray-400">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
