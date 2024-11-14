// AboutUs.js
import React, { useEffect } from "react";
import Image from "next/image";
import "./About.css";

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".about-container");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Section: Image */}
        <div className="about-image-wrapper">
          <div className="about-image-gradient"></div>
          <Image
            src="/Cloud combination.jpg" // Replace with your actual image path
            alt="Team"
            width={500} // Sets maximum width
            height={500} // Keeps aspect ratio
            className="about-image"
          />
        </div>

        {/* Right Section: Text */}
        <div className="about-text">
          <h2 className="about-title">Who are we..?</h2>
          
          <p className="about-description">
            We’re a team of passionate professionals dedicated to delivering
            top-notch solutions to help your business succeed. From the initial
            consultation to final deployment, we focus on building lasting
            partnerships with our clients.
          </p>
          <p className="about-description">
            With a commitment to innovation and excellence, we specialize in
            custom-tailored automation solutions that save you time and boost productivity. As an
            <strong className="text-black"> Official Google Workspace™ Build Partner</strong>, we are trusted by top businesses worldwide.
          </p>

          <div className="about-buttons">
            <a href="#" className="about-button-primary">
              Contact Us
            </a>
            {/* <a href="#" className="about-button-secondary">
              Our Story
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
