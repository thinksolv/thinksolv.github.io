// ProductsShowcase.js
import React, { useEffect } from 'react';
import { FaWordpress, FaFilePdf, FaFileAlt } from "react-icons/fa";
import { PiArrowsInSimpleBold } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";
import './Products.css';

const Products = () => {
  const products = [
    {
      icon: <FaFileAlt size={40} />,
      title: 'Merge Docs Pro',
      description: 'Gemini powered app to merge multiple Google Docs or Word documents into one.',
    },
    {
      icon: <FaWordpress size={40} />,
      title: 'Docs to WP Pro',
      description: 'The most powerful Google Docs to WordPress converter to streamline your workflow and save time.',
    },
    {
      icon: <FaFileAlt size={40} />,
      title: 'Docs to Markdown Pro',
      description: 'The most powerful Google Docs to Markdown converter to streamline your workflow and save time.',
    },
    {
      icon: <PiArrowsInSimpleBold size={40}/>,
      title: 'Bulk Converter Pro',
      description: 'The user friendly Bulk Converter Pro converts any files from one format to another format .',
    },
    {
      icon: <FaFilePdf size={40} />,
      title: 'PDF to Docs',
      description: 'Bulk Converts PDF files from Local drive or from Google Drive into Google Docs.',
    },
    {
      icon: <FaFilePdf size={40} />,
      title: 'Docs to PDF',
      description: 'Bulk Converts Google Docs into PDF files and downloads them as zip file.',
    },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".product-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          card.classList.add("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <div className="product-cards">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-top">
                <div className="product-icon">
                  {product.icon}
                </div>
                <h3 className="product-name">{product.title}</h3>
              </div>
              <div className="product-bottom">
                <p className="product-description">{product.description}</p>
                <div className="learn-more">
                  Learn More <FiArrowRight className="arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
