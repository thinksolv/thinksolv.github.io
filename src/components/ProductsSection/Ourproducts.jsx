import React from 'react';
import Image from 'next/image';
import './Products.css';  // Importing the CSS file for styling

const products = [
  {
    id: 1,
    name: 'Product One',
    description: 'This is a great product for solving problems.',
    image: '/product1.jpg',  // Replace with your actual product image
    price: '$199.99',
  },
  {
    id: 2,
    name: 'Product Two',
    description: 'Innovative and efficient for your business.',
    image: '/product2.jpg',  // Replace with your actual product image
    price: '$299.99',
  },
  {
    id: 3,
    name: 'Product Three',
    description: 'Streamline your workflow with this product.',
    image: '/product3.jpg',  // Replace with your actual product image
    price: '$399.99',
  },
];

const OurProducts = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <div className="product-cards">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-price">{product.price}</span>
                <button className="product-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
