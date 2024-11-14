'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from '../components/HeroSection/Hero';
import AboutUs from '../components/AboutusSection/About';
import Testimonial from '../components/TestimonialsSection/Testimonials';
import Products from '../components/ProductsSection/Products';
import Services from '../components/ServicesSection/Services';
// import CTASection from '@/app/components/CTA';
// import PricingSection from '@/app/components/Pricing';
import ContactForm from '../components/ContactSection/ContactForm';
import Footer from '../components/FooterSection/Footer';
import Faq from '../components/FAQSection/FAQ';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will only run on the client
  }, []);

  if (!isClient) {
    return null; // Return null or a loading spinner until client-side hydration
  }

  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* Add other routes for the product details */}
        <Route path="/https://workspace.google.com/marketplace/app/merge_docs_pro/61337277026" element={<div>Merge Docs Pro Details</div>} />
        <Route path="/docs-to-wp-pro" element={<div>Docs to WP Pro Details</div>} />
        {/* Continue for other products */}
      </Routes>
      </Router>
      <Services />
      <Testimonial />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Page;
