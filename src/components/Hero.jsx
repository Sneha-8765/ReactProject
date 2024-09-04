import React from 'react';
import DeveloperImg from '../assets/web-developer.svg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left side - Text Section */}
        <div className="text-left md:w-1/2 space-y-6 animate-fadeInLeft">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hello, I am <span className="text-blue-600">Sneha Gupta</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Self-motivated and hardworking fresher, eager to work in a challenging environment to prove my skills and utilize my knowledge.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 inline-block">
            Connect with Me
          </a>
        </div>

        {/* Right side - Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center animate-fadeInRight">
          <img 
            src={DeveloperImg} 
            alt="Sneha Gupta" 
            className="w-full h-auto max-w-lg object-cover " 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
