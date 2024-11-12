// src/components/PricingSection.js


import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-600">Choose a plan that suits your needs</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="pricing-plan">
            <h3 className="text-xl font-bold text-gray-800">Basic</h3>
            <p className="text-lg text-gray-600">$19/month</p>
            <ul className="mt-4 space-y-3 text-left">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <a href="#" className="mt-6 px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500">Sign Up</a>
          </div>
          <div className="pricing-plan">
            <h3 className="text-xl font-bold text-gray-800">Pro</h3>
            <p className="text-lg text-gray-600">$49/month</p>
            <ul className="mt-4 space-y-3 text-left">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <a href="#" className="mt-6 px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500">Sign Up</a>
          </div>
          <div className="pricing-plan">
            <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
            <p className="text-lg text-gray-600">$99/month</p>
            <ul className="mt-4 space-y-3 text-left">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <a href="#" className="mt-6 px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500">Sign Up</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
