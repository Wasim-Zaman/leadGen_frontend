import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import heroImage from '../../assets/hero.png'; 
import curveImage from '../../assets/curve.svg'; 

const HeroSection = ({ showHeroImage }) => {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Leading IT services company</h1>
          <p className="text-lg md:text-2xl mb-6">expertly managing projects across 14+ countries</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">Subscribe</button>
        </div>
        {showHeroImage && (
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img className="w-full md:w-4/5 z-50" src={heroImage} alt="Hero" />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line">
        <img src={curveImage} alt="Curve" className="w-full h-full" />
      </div>
      <div className="absolute bottom-4 left-4 flex space-x-4">
        <a href="#"><i className="fab fa-facebook-f text-2xl"></i></a>
        <a href="#"><i className="fab fa-twitter text-2xl"></i></a>
        <a href="#"><i className="fab fa-linkedin text-2xl"></i></a>
        <a href="#"><i className="fab fa-youtube text-2xl"></i></a>
        <a href="#"><i className="fab fa-whatsapp text-2xl"></i></a>
      </div>
      <a
        href="estimation"
        className="absolute right-4 bottom-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
         Estimation Request 
      </a>
    </header>
  );
};

export default HeroSection;
