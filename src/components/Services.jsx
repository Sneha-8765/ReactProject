import React from 'react';
import { FaCode, FaPaintBrush, FaNetworkWired } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Web Development */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
            <FaCode className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Development</h3>
            <p className="text-gray-600">
              I create responsive, dynamic, and user-friendly websites using modern web technologies like React, HTML, CSS, and JavaScript.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
            <FaPaintBrush className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              I design intuitive, aesthetically pleasing interfaces that provide an optimal user experience for web and mobile applications.
            </p>
          </div>

          {/* Networking */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
            <FaNetworkWired className="text-purple-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Networking</h3>
            <p className="text-gray-600">
              I have expertise in network setup and maintenance, ensuring efficient and secure connectivity for various systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
