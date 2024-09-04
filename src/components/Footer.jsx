import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo or Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">Sneha Gupta</h2>
            <p className="text-gray-400">Building innovative solutions</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:snehagupta@example.com"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Contact Info */}
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 Sneha Gupta. All Rights Reserved.
            </p>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white transition duration-300">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition duration-300">
                About
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition duration-300">
                Services
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
