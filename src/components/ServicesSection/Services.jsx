// Services.js
import React, { useEffect, useRef } from 'react';
import { FaAppStore, FaCogs, FaCloud } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaAppStore size={50} />, // You can use an icon like FaAppStore to reflect app creation or customization
    title: 'AppSheet Development',
    description: 'Custom AppSheet solutions designed to fit your business processes, enabling seamless workflows and enhancing productivity.',
    action: 'Explore',
  },    
  {
    icon: <FaCogs size={50} />, // Keeping the gear icon as it symbolizes automation
    title: 'Workflow Automations',
    description: 'Streamline and automate your business workflows, reducing manual tasks and our services have boost your productivity, operational efficiency.',
    action: 'Explore',
  },
  {
    icon: <FaCloud size={50} />, // Retaining the cloud icon
    title: 'Document AI Cloud Service',
    description: 'Leverage cloud-based Document AI to automate data extraction, enhance document processing, and streamline business operations.',
    action: 'Explore',
  },
];

const Services = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="services-left">
        <p className="before-text">Discover </p>
        <h2 className="main-text">What we do...</h2>
        <p className="services-description">
          We provide a variety of services to help your business thrive. From custom development to automation and cybersecurity, our solutions are designed to meet your unique needs and drive growth.
        </p>
      </div>
      <div className="services-right">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-details">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-action">{service.action}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
