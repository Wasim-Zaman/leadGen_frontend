import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutUsSection = () => {
  return (
    <div className="relative bg-white text-black py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-blue-600">ABOUT US</span>
          </h2>
          <h3 className="text-xl md:text-3xl font-bold mb-4 text-blue-900">
            Lead Gen - The Best Web Development Company in Vijayawada
          </h3>
          <p className="mb-4">
            Lead Gen is one of the <a href="#" className="text-blue-500 font-bold">The Best and Professional Web Designing, Web Development, Mobile Application Development & Digital Marketing Company in Vijayawada</a> with more than 15 years of experience in designing and developing web applications and has completed more than 1000+ projects for client's around the world. Our main objective is to Design and Develop the website/app based on the Client's customized requirements which helps them to succeed in their business targets.
          </p>
          <p className="mb-4">
            Lead Gen also provides <a href="#" className="text-blue-500 font-bold">Digital Marketing Services</a> for your Business. We not only build your website but also provide Search Engine Optimization Services, Social Media Marketing, PPC management, Facebook and Google Ads Services. We help you reach lakhs of potential customers for your business through online medium. We provide Digital Marketing services mainly in the field of <span className="text-red-500 font-bold">Real Estate, Fashion, Ecommerce and Retail, Tours and Travels, Educational Institutions, Trainings Institutes, Healthcare, and any other Local Businesses.</span>
          </p>
          <p className="mb-4">
            We are among the few companies who can provide the <a href="#" className="text-blue-500 font-bold">Best Website Development Services in Vijayawada</a> based on the Client custom requirements at affordable prices. We are dedicated to provide the best website solutions to small and medium business at a very low price. We understand the uniqueness of your site and your business needs, hence your approach to Lead Gen can be your first step towards achieving the desired success which you have always dream of.
          </p>
          <div className="mt-4 text-lg font-bold">
            <span className="text-blue-600">Leading </span>
            <span className="text-orange-600">Digital Marketing </span>
            <span className="text-gray-600">Company in Vijayawada.</span>
          </div>
        </div>
        {/* <div className="w-full md:w-1/3">
          <img
            src="https://example.com/character.png" // Replace with your character image URL
            alt="Character"
            className="w-full"
          />
        </div> */}
      </div>
      <a
        href="/estimation"
        className="absolute right-4 bottom-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
       Estimation Request
      </a>
    </div>
  );
};

export default AboutUsSection;
