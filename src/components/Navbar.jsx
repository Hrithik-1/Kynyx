import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo8.png";

const Navbar = () => (
  <header className="flex justify-between items-center px-10 bg-[#030303] ">
    <div className="flex items-center gap-3">
      <img src={logo} alt="Kynyx Logo" className="h-8 sm:h-10 md:h-12 lg:h-15 w-auto object-contain transition-all duration-300 ease-in-out" />
    </div>
    <nav className="flex gap-5 items-center flex-wrap">
      <Link
        to="/"
        className="relative text-gray-300 font-medium after:content-[''] after:absolute after:h-0.5 after:bg-cyan-300 after:w-full after:left-0 after:-bottom-1 text-xl"
      >
        Home
      </Link>
      <Link to="/solutions" className="text-gray-300 font-medium text-xl">
        Solutions
      </Link>
      <Link to="/about" className="text-gray-300 font-medium text-xl">
        About Us
      </Link>
      <Link to="/contact" className="text-gray-300 font-medium text-xl">
        Contact
      </Link>
      <Link to="/services2" className="text-gray-300 font-medium text-xl">
        Services
      </Link>
      <Link to="/learn-more">
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold">
          Learn More
        </button>
      </Link>
    </nav>
  </header>
);

export default Navbar;
