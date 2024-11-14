import React from 'react';
import './ContactForm.css'; // Importing the CSS file

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="title">Contact Us</h2>
        <p className="subtitle">We’d love to hear from you! Reach out with any questions or comments.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea placeholder="Your Message" className="textarea-field"></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
