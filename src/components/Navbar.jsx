import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side (Logo) */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              <h1>Sneha Gupta</h1>
            </a>
          </div>

          {/* Right side (Navigation links) */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-white hover:bg-green-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:bg-green-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white hover:bg-green-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white hover:bg-green-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu (Hamburger Icon) */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-green-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
