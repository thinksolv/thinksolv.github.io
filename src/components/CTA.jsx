// src/components/CTASection.js

import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg">Sign up today and take your business to the next level.</p>
        <div className="mt-8">
          <a href="#signup" className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
