import React from 'react';
import Navbar from '../components/landingPage/navbar';
import HeroSection from '../components/landingPage/hero';
import ServiceCards from '../components/landingPage/cards';
import AboutUsSection from '../components/landingPage/about';
import WhyChooseUsSection from '../components/landingPage/whyus';
import ProcessSection from '../components/landingPage/process';
import Footer from '../components/landingPage/footer';
import Pricing from '../components/landingPage/pricing';

const Home = ({ showHeroImage }) => {
  const handleWhatsAppClick = () => {
    window.location.href = "http://wa.me/+919989439202";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+ +91 8121923831";
  };

  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <HeroSection showHeroImage={showHeroImage} />
      <ServiceCards />
      <AboutUsSection />
      <WhyChooseUsSection />
      <Pricing />
      <ProcessSection />
      <Footer />

      {/* Floating Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
        <button onClick={handleWhatsAppClick} className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <i className="fab fa-whatsapp text-2xl"></i>
        </button>
        <button onClick={handleCallClick} className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
          <i className="fas fa-phone-alt text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
