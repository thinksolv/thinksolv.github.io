import React from 'react';
import HeroSection from '../components/Hero';
import FeaturesSection from '../components/Feature';
import AboutSection from '../components/About';
import Testimonials from '../components/Testimonials';
// import CTASection from '@/app/components/CTA';
// import PricingSection from '@/app/components/Pricing';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import Faq from '../components/FAQ';

const Page = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Testimonials />

      <Faq />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
