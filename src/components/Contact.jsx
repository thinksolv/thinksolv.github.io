
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">We’d love to hear from you! Reach out with any questions or comments.</p>
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-4 mb-4 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-4 mb-4 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-4 mb-4 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
