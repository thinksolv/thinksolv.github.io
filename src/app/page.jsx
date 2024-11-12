'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection/Hero';
import FeaturesSection from '../components/Feature';
import AboutSection from '../components/AboutusSection/About';
import Testimonials from '../components/Testimonials';
import OurProducts from '../components/ProductsSection/Ourproducts';
// import CTASection from '@/app/components/CTA';
// import PricingSection from '@/app/components/Pricing';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import Faq from '../components/FAQ';

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
      <AboutSection />
      <OurProducts />
      <FeaturesSection />
      <Testimonials />
      <Faq />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
