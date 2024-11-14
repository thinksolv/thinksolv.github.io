// FAQ.js
import React, { useState, useEffect, useRef } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of automation and productivity solutions tailored to businesses of all sizes.",
    },
    {
      question: "How does the onboarding process work?",
      answer: "Our onboarding process is simple and smooth, designed to integrate seamlessly with your business processes.",
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes, our support team is available 24/7 to assist you with any questions or technical issues.",
    },
    {
      question: "What is the pricing structure?",
      answer: "Our pricing is flexible and based on the size and needs of your business. Contact us for more details.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div className="faq-question">
              {faq.question}
              <span className={`icon ${activeIndex === index ? "rotate" : ""}`}>
                &#9656; {/* Right arrow icon */}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
