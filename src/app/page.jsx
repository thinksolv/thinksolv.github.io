'use client';

import React from 'react';
import { useEffect, useState } from 'react';
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
      <Products />
      <Services />
      <Testimonial />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Page;
