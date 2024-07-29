import React from 'react';
import { FaLink, FaShoppingCart, FaDollarSign, FaStar, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const WaveSvg = () => (
  <svg
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-x-0 -top-12 -z-10"
  >
    <path
      fill="#1E3A8A"
      fillOpacity="1"
      d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,202.7C672,213,768,235,864,218.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-blue-900 text-white pt-16 pb-12">
      <WaveSvg />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <FaStar className="mr-2" /> Our Services
          </h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Web Designing</a></li>
            <li><a href="#" className="hover:text-gray-300">Web Development</a></li>
            <li><a href="#" className="hover:text-gray-300">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-gray-300">Mobile App Development</a></li>
            <li><a href="#" className="hover:text-gray-300">E-commerce Development</a></li>
            <li><a href="#" className="hover:text-gray-300">Web Hosting Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Website Maintenance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <FaShoppingCart className="mr-2" /> Our Products
          </h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">E-commerce Portal</a></li>
            <li><a href="#" className="hover:text-gray-300">Online Exam Portal</a></li>
            <li><a href="#" className="hover:text-gray-300">Online Bus Tickets</a></li>
            <li><a href="#" className="hover:text-gray-300">Matrimonial Portal</a></li>
            <li><a href="#" className="hover:text-gray-300">Classified Portal</a></li>
            <li><a href="#" className="hover:text-gray-300">Real Estate Portal</a></li>
            <li><a href="#" className="hover:text-gray-300">Online Job Portal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <FaDollarSign className="mr-2" /> Our Prices
          </h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Our Prices</a></li>
            <li><a href="#" className="hover:text-gray-300">Web Designing Prices</a></li>
            <li><a href="#" className="hover:text-gray-300">SEO Packages</a></li>
            <li><a href="#" className="hover:text-gray-300">Mobile App Prices</a></li>
            <li><a href="#" className="hover:text-gray-300">Web Hosting Prices</a></li>
            <li><a href="#" className="hover:text-gray-300">Bulk SMS Prices</a></li>
          </ul>
        </div>
        {/* <div>
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <FaStar className="mr-2" /> Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Our Testimonials</a></li>
            <li><a href="#" className="hover:text-gray-300">Our Technologies</a></li>
            <li><a href="#" className="hover:text-gray-300">Our Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Policies</a></li>
            <li><a href="#" className="hover:text-gray-300">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div> */}
      </div>
      <div className="text-center mt-8">
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com" className="text-white"><FaFacebook /></a>
          <a href="https://www.twitter.com" className="text-white"><FaTwitter /></a>
          <a href="https://www.linkedin.com" className="text-white"><FaLinkedin /></a>
          <a href="https://www.youtube.com" className="text-white"><FaYoutube /></a>
          <a href="https://wa.me/+919989439202" className="text-white"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
