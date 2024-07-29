import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/landingPage/navbar';

const productsData = [
  { sectionTitle: 'Education' },
  { sectionTitle: 'Health' },
  { sectionTitle: 'Food' },
  { sectionTitle: 'Real Estate' },
  { sectionTitle: 'Finance' },
  { sectionTitle: 'Delivery Segments' },
  { sectionTitle: 'Transports and Travels' },
  { sectionTitle: 'Communication' },
  { sectionTitle: 'Politics' },
  { sectionTitle: 'Construction' },
  { sectionTitle: 'Billing Software & POS & Others' },
];

const ProductsTitles = () => {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/products/${index}`);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((section, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg p-6 bg-white transform hover:scale-105 transition-transform cursor-pointer bg-gradient-to-r from-blue-500 to-blue-300 text-white"
                onClick={() => handleCardClick(index)}
              >
                <h3 className="text-2xl font-bold text-center">{section.sectionTitle}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsTitles;
