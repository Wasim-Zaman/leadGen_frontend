import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: 'All Sizes Business',
      description: 'We do websites & mobile apps for all sizes of businesses.',
      icon: 'fas fa-cogs',
    },
    {
      title: 'Experienced Team',
      description: 'We have a strong and expanded team of developers.',
      icon: 'fas fa-users',
    },
    {
      title: 'On-time Delivery',
      description: 'We are always enthusiastic about delivering every project on-time.',
      icon: 'fas fa-clock',
    },
    {
      title: 'Awesome Results',
      description: 'Our Digital Marketing services will give awesome results.',
      icon: 'fas fa-rocket',
    },
  ];

  return (
    <div className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          <span className="text-blue-600">WHY CHOOSE US</span>
        </h2>
        <h3 className="text-xl md:text-3xl font-bold mb-8 text-blue-900">
          <span className="text-red-500">Why Choose </span> Lead Gen?
        </h3>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <ul className="list-none space-y-4 text-lg">
              <li><i className="fas fa-check-circle text-orange-600"></i> We are having more than 15+ years of B2B client services and Industry experience</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We have a highly experienced and creative team of experts who have strong web technology skills</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> Served 1000+ clients worldwide till date</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We believe in customer satisfaction and hence we deliver quality services</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We understand clients’ requirements and deliver tailored services</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We believe in quality services to keep the client long-term relation trusted with the business</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We provide cost-effective services with assurance of productivity</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We analyze and test each application with our high-end quality analysis</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We face the competitive challenges in the market and keep up with the race today</li>
              <li><i className="fas fa-check-circle text-orange-600"></i> We help our clients efficiently and help them achieve organizational growth</li>
            </ul>
            <div className="mt-8">
              <span className="text-3xl font-bold text-orange-600">15+</span> <span className="text-lg">Years of experience</span>
              <span className="mx-4">|</span>
              <span className="text-3xl font-bold text-orange-600">1000+</span> <span className="text-lg">Projects completed</span>
              <span className="mx-4">|</span>
              <span className="text-3xl font-bold text-orange-600">25+</span> <span className="text-lg">Mobile applications</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform hover:bg-orange-500 hover:text-white"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-500 text-white group-hover:bg-white group-hover:text-orange-500 transition-colors">
                  <i className={feature.icon}></i>
                </div>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#"
        className="fixed right-4 bottom-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
       Estimation Request
      </a>
    </div>
  );
};

export default WhyChooseUsSection;
