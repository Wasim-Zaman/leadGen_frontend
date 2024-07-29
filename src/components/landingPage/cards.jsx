import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We offer professional web development services.',
      icon: 'fas fa-code',
    },
    {
      title: 'Mobile Apps',
      description: 'Get high-quality mobile apps for both Android and iOS.',
      icon: 'fas fa-mobile-alt',
    },
    {
      title: 'Digital Marketing',
      description: 'Boost your business with our digital marketing services.',
      icon: 'fas fa-bullhorn',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
                <div className="mb-4">
                  <i className={`${service.icon} text-4xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
