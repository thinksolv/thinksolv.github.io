'use client'

import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container px-6 mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Who Are We?
        </h2>

        {/* Short Description */}
        <p className="mt-4 text-lg text-gray-600">
          We are a team of innovators, creators, and problem-solvers focused on
          crafting solutions that drive success and growth.
        </p>

        {/* Question Section */}
        {/* <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900">What Do We Stand For?</h3>
          <p className="mt-4 text-xl text-gray-700">
            We stand for innovation, integrity, and a deep commitment to our
            clients. We believe in delivering excellence through collaboration
            and putting people first.
          </p>
        </div>

        {/* Our Vision Section */}
        {/* <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900">Why Choose Us?</h3>
          <p className="mt-4 text-xl text-gray-700">
            We provide tailored solutions designed to solve real-world problems.
            With cutting-edge technology and a passion for perfection, we are
            your trusted partner in navigating today’s challenges.
          </p>
        </div>

        {/* Team Image & Description Section */}
        {/* <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-12"> */}
          {/* Left Image */}
          {/* <div className="w-full lg:w-1/2">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Team"
              className="rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-500"
            />
          </div> */}

          {/* Right Text Section */}
          {/* <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
            <p className="mt-4 text-lg text-gray-700">
              Our core values define everything we do. From our commitment to
              sustainable practices to our dedication to customer satisfaction,
              we prioritize making a positive impact in everything we create.
            </p>
          </div>
        </div> */}

        {/* Interactive FAQ Section */}
        {/* <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h4 className="font-bold text-lg">What makes us different?</h4>
              <p className="mt-2">
                We combine technology, creativity, and a customer-first approach
                to deliver software solutions that not only meet but exceed your
                expectations.
              </p>
            </div> */}

            {/* <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h4 className="font-bold text-lg">How can we help your business?</h4>
              <p className="mt-2">
                Whether you need a custom software solution, strategic advice, or
                hands-on support, we’re here to help your business thrive in a
                competitive digital landscape.
              </p>
            </div>
          </div>
        </div> */} 

        {/* Call-to-Action */}
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition duration-300"
          >
            Get in Touch
            <svg
              className="ml-3 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
