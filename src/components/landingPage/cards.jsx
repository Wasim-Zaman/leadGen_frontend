import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceCards = () => {
  const services = [
    {
      title: 'Web Designing',
      description: 'Lead Gen is one of the Creative Web Designing Company in Hyderabad with specialized web designers...',
      icon: 'fas fa-globe',
      link: '#',
    },
    {
      title: 'Web Development',
      description: 'We have wide-ranging web development skills blended with the top quality essence of expertise...',
      icon: 'fas fa-code',
      link: '#',
    },
    {
      title: 'Digital Marketing',
      description: 'We provide Digital Marketing Services for all kinds of businesses to improve their online presence & traffic...',
      icon: 'fas fa-chart-line',
      link: '#',
    },
    {
      title: 'Mobile App Development',
      description: 'We provide Android & iOS Mobile App Development services for small, medium & large enterprises...',
      icon: 'fas fa-mobile-alt',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg p-6 bg-white transform hover:scale-105 transition-transform hover:bg-orange-500 hover:text-white"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white transition-colors group-hover:bg-white group-hover:text-orange-500">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold ml-4">{service.title}</h3>
            </div>
            <p className="mb-4">{service.description}</p>
            <a href={service.link} className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-white hover:text-orange-500 transition-colors">
              Read More <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
