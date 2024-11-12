'use client'

import React, { useState } from 'react';

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50 h-screen">
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" title="Home" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img
                  src="/Thinksolv Logo 1.png"
                  alt="Logo"
                  style={{ height: '80px', width: 'auto' }}
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50"> Features </a>
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50"> Pricing </a>
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50"> Automation </a>
            </div>

            {/* Desktop Sign-in/Sign-up Links */}
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50"> Customer Login </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                Sign up
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="lg:hidden mt-6">
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a href="#" className="p-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-xl"> Features </a>
                  <a href="#" className="p-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-xl"> Pricing </a>
                  <a href="#" className="p-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-xl"> Automation </a>
                  <a href="#" className="p-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-xl"> Customer Login </a>
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                    Sign up
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Full Page Hero Section */}
      <section className="h-full flex items-center justify-center bg-gray-50 mt-0 -mt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full h-full">
          <div className="h-full flex flex-col lg:flex-row items-center justify-center">

            {/* Text Section - Left */}
            <div className="lg:w-1/2 max-w-lg text-center lg:text-left mb-6 lg:mb-0">
              {/* Removed logo background before the text */}
              {/* <div className="flex justify-center lg:justify-start mb-4">
                <img
                  src="/Google Cloud.png" // Your logo source here
                  alt="Logo"
                  className="h-14 w-auto"
                />
              </div> */}

              <p className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Building Solutions
                <span className="relative inline-flex">
                  <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                  <span className="relative"> Thoughtfully </span>
                </span>
              </p>
              <p className= "text-gray-900 mt-10"> " As an Official Google Workspace™ Build Partner, we build tailored automation solutions to streamline your internal workflows, improving productivity and saving you time."</p>

              <div className="mt-9 flex justify-center lg:justify-start space-x-4">
                <a href="#" className="px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                  Get Started
                </a>
              </div>
            </div>

            {/* Video Section - Right */}
            <div className="lg:w-1/2 p-4 flex justify-center relative">
              {/* Gradient Shadow matching the Thoughtfully Text Background */}
              <div 
                className="absolute inset-0 opacity-50 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, #44BCFF, #FF44EC, #FF675E)', // Using the same gradient as "Thoughtfully"
                  filter: 'blur(15px) brightness(0.8)', // Soft blur effect with brightness
                  borderRadius: '30px', // Rounded corners for organic look
                  zIndex: 0
                }}
              ></div>

              {/* Increased the height of the video */}
              <video
                className="w-full h-[400px] max-w-full rounded-lg shadow-xl relative z-10" // Increased height to 900px
                controls
                src="https://www.example.com/your-video.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
