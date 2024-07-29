import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-white">
        <p className="mb-4">&copy; 2024 Lead Gen. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
