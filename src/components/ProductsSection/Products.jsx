import React, { useState, useEffect } from 'react';
import { FaWordpress, FaFilePdf, FaFileAlt } from "react-icons/fa";
import { PiArrowsInSimpleBold } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';  // Import router components
import './Products.css';

const Products = () => {
  const navigate = useNavigate(); // Hook to navigate

  // Product details
  const products = [
    {
      icon: <FaFileAlt size={40} />,
      title: 'Merge Docs Pro',
      description: 'Gemini powered app to merge multiple Google Docs or Word documents into one.',
      url: 'https://workspace.google.com/marketplace/app/merge_docs_pro/61337277026', // URL for routing
    },
    {
      icon: <FaWordpress size={40} />,
      title: 'Docs to WP Pro',
      description: 'The most powerful Google Docs to WordPress converter to streamline your workflow and save time.',
      url: 'https://workspace.google.com/marketplace/app/docs_to_wordpress_pro/346830534164',
    },
    {
      icon: <FaFileAlt size={40} />,
      title: 'Docs to Markdown Pro',
      description: 'The most powerful Google Docs to Markdown converter to streamline your workflow and save time.',
      url: 'https://workspace.google.com/marketplace/app/docs_to_markdown_pro/483386994804',
    },
    {
      icon: <PiArrowsInSimpleBold size={40} />,
      title: 'Bulk Converter Pro',
      description: 'The user-friendly Bulk Converter Pro converts any files from one format to another.',
      url: 'https://workspace.google.com/marketplace/app/bulk_converter_pro/327730061402', // External URL
    },
    {
      icon: <FaFilePdf size={40} />,
      title: 'PDF to Docs',
      description: 'Bulk Converts PDF files from Local drive or from Google Drive into Google Docs.',
      url: 'https://workspace.google.com/marketplace/app/pdf_to_docs/28755135712',
    },
    {
      icon: <FaFilePdf size={40} />,
      title: 'Docs to PDF',
      description: 'Bulk Converts Google Docs into PDF files and downloads them as zip files.',
      url: 'https://workspace.google.com/marketplace/app/docs_to_pdf/302636103705',
    },
  ];

  // Handle clicking on a product
  const handleProductClick = (product) => {
    if (product.url.startsWith('http')) {
      // External link, open in a new tab
      window.open(product.url, '_blank');
    } else {
      // Internal route, navigate to the corresponding route
      navigate(product.url);
    }
  };

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
    <section className="product-section">
      <div className="product-container">
        <h2 className="product-section-title">Our Products</h2>

        {/* Render products */}
        <div className="product-cards">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-card-top">
                <div className="product-card-icon">
                  {product.icon}
                </div>
                <h3 className="product-card-name">{product.title}</h3>
              </div>
              <div className="product-card-bottom">
                <p className="product-card-description">{product.description}</p>
                <div
                  className="product-learn-more"
                  onClick={() => handleProductClick(product)} // Call handleProductClick on click
                >
                  Learn More <FiArrowRight className="arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conditional rendering of product details */}
        <Routes>
          {products.map((product, index) => (
            product.url.startsWith('http') ? null : ( // Skip external links for route rendering
              <Route
                key={index}
                path={product.url}
                element={
                  <div className="product-details">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    {/* Add any more specific details about the product here */}
                  </div>
                }
              />
            )
          ))}
        </Routes>
      </div>
    </section>
  );
};

export default Products;
