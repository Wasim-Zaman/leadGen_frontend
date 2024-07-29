import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
import Home from './pages/homepage';
import AboutCompany from './pages/aboutus';
import ContactUs from './pages/contactus';
import Career from './pages/career';
import Products from './pages/products';
import Estimation from './pages/estimation';
import ProductsTitles from './pages/titles';
import ConsultationModal from './components/landingPage/conultationpopup'; 
import HeroSection from './components/landingPage/hero';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <BrowserRouter>
      <ConsultationModal isOpen={isModalOpen} onRequestClose={closeModal} />
        <Routes>
          <Route path="/" element={<Home showHeroImage={!isModalOpen} />} />
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/products" element={<ProductsTitles />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/products/:sectionIndex" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
