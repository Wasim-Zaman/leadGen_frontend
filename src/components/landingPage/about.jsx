import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <p className="text-gray-700 leading-relaxed">
              We are a leading IT services company providing top-notch solutions for businesses of all sizes. Our team of experienced professionals is dedicated to delivering high-quality services tailored to meet your unique needs.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img src="path/to/your/image.jpg" alt="About Us" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
