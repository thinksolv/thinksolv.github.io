  import React, { useState } from "react";
  import Image from 'next/image';
  import { Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
  import './Hero.css';

  const HeroSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({ products: false, services: false });

    const toggleDropdown = (menu) => {
      setDropdownOpen((prevState) => ({
        ...prevState,
        [menu]: !prevState[menu], // Toggle the visibility of the specific menu
      }));
    };

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
                    width={240}
                    height={100}
                    priority={true}
                  />
                </a>
              </div>

              {/* Desktop Menu Links */}
              <div className="lg:flex lg:ml-16 lg:items-center text-black lg:justify-center lg:space-x-10 xl:space-x-16">
                {/* Products Dropdown */}
                <Dropdown isOpen={dropdownOpen.products} onOpenChange={() => toggleDropdown('products')}>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="text-black font-semibold transition-all duration-200 hover:bg-blue-100 hover:text-blue-600"
                    >
                      Products
                    </Button>
                  </DropdownTrigger>
                  {dropdownOpen.products && (
                    <DropdownMenu
                      aria-label="Products Menu"
                      className="animate-dropdown-menu"
                      style={{
                        maxHeight: '300px', // Limiting the height
                        overflowY: 'auto', // Enable scrolling if content overflows
                        zIndex: 10, // Make sure it's above the other content
                      }}
                    >
                      <DropdownItem key="product1" className="grouped-item">
                        <Link href="/products/product1">Docs to PDF</Link>
                      </DropdownItem>
                      <DropdownItem key="product2" className="grouped-item">
                        <Link href="/products/product2">PDF to Docs</Link>
                      </DropdownItem>
                      <DropdownItem key="product3" className="grouped-item">
                        <Link href="/products/product3">Docs to WP Pro</Link>
                      </DropdownItem>
                      <DropdownItem key="product4" className="grouped-item">
                        <Link href="/products/product4">Merge Docs Pro</Link>
                      </DropdownItem>
                      <DropdownItem key="product5" className="grouped-item">
                        <Link href="/products/product5">Bulk Converter Pro</Link>
                      </DropdownItem>
                      <DropdownItem key="product6" className="grouped-item">
                        <Link href="/products/product6">Docs to Markdown Pro</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </Dropdown>

                {/* Services Dropdown */}
                <Dropdown isOpen={dropdownOpen.services} onOpenChange={() => toggleDropdown('services')}>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="font-semibold transition-all duration-200 hover:bg-blue-100 hover:text-blue-600"
                    >
                      Services
                    </Button>
                  </DropdownTrigger>
                  {dropdownOpen.services && (
                    <DropdownMenu aria-label="Services Menu" className="animate-dropdown-menu">
                      <DropdownItem key="service1" className="grouped-item">
                        <Link href="/services/service1">AppSheet Development</Link>
                      </DropdownItem>
                      <DropdownItem key="service2" className="grouped-item">
                        <Link href="/services/service2">Workflow Automations</Link>
                      </DropdownItem>
                      <DropdownItem key="service3" className="grouped-item">
                        <Link href="/services/service3">Document AI</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </Dropdown>
              </div>

              {/* Desktop Sign-in/Sign-up Links */}
              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 transition-all duration-200 transform hover:scale-105">
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

              {/* Image Section - Right */}
              <div className="lg:w-1/2 p-4 flex justify-center relative">
                <div
                  className="absolute inset-0 opacity-40 rounded-lg pointer-events-none"
                  style={{
                    filter: 'blur(15px) brightness(0.8)',
                    zIndex: 0,
                  }}
                ></div>
                <Image
                  className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg"
                  src="/Google Cloud.png"
                  alt="Your Image Description"
                  width={300}
                  height={400}
                  style={{ maxWidth: '90%', height: 'auto' }}
                />
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  };

  export default HeroSection;
