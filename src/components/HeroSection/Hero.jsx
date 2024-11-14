"use client";

import React, { useState } from "react";
import Image from 'next/image';
import './Hero.css';

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50">
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" title="Home" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <Image
                  src="/Thinksolv Logo.png"
                  alt="Logo"
                  width={240}        // specify the width
                  height={100}       // specify the height
                  priority={true}   // optional: prioritize image loading for LCP improvement
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
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50"> Products </a>
              <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50"> Services </a>
            </div>

            {/* Desktop Sign-in/Sign-up Links */}
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="lg:hidden mt-6">
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a href="#" className="p-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-xl"> Products </a>
                  <a href="#" className="p-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-xl"> Services </a>
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                    Contact Us
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-gray-50 py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center">

            {/* Text Section - Left */}
            <div className="lg:w-1/2 max-w-lg text-center lg:text-left mb-6 lg:mb-0">
              <p className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
                Building Solutions
              </p>
              <p className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mt-2">
                <span className="relative inline-flex animate-thoughtfully">
                <span className="hero-gradient-bg"></span>
                <span className="relative block">
                    {["T", "h", "o", "u", "g", "h", "t", "f", "u", "l", "l", "y"].map((letter, index) => (
                      <span key={index} className="inline-block opacity-0 animate-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                        {letter}
                      </span>
                    ))}
                  </span>
                </span>
              </p>

              <p className="text-black text-base mt-10 animate-typing">"Supercharge your productivity with our products and services"</p>
              <div className="mt-9 flex justify-center lg:justify-start space-x-4">
                <a href="#" className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl">
                  Get Started
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 p-4 flex justify-center relative">
              <div
                className="absolute inset-0 opacity-40 rounded-lg pointer-events-none"
                style={{
                  filter: 'blur(15px) brightness(0.8)',
                  zIndex: 0,
                }}
              ></div>
              <Image
                className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg mb-20" // Responsive width control
                src="/Google Cloud.png" // replace with your image path
                alt="Your Image Description"
                width={300} // specify the intrinsic width (can be adjusted)
                height={400} // specify the intrinsic height (can be adjusted)
                style={{ maxWidth: '90%', height: 'auto' }} // Ensures it scales within the available space
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
