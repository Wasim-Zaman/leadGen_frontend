import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Pricing = () => {
  const pricingPlans = [
    {
      type: 'CMS Website (Dynamic)',
      price: '₹ 15,000/-',
      description: 'Dynamic websites are websites where you can have Content Management System (CMS) through which you can Manage your content.',
      features: ['10 To 15 Pages', '1 My SQL Data Base', 'Content Management'],
      developmentTime: '1 Week',
      buttonText: 'Contact Us',
      buttonLink: '#',
      highlight: false,
      icon: 'fas fa-globe',
    },
    {
      type: 'Advance CMS Website (Dynamic)',
      price: '₹ 25,000/-',
      description: 'Dynamic websites are websites where you can have Content Management System (CMS) through which you can Manage your content.',
      features: ['15 To 30 Pages', '1 My SQL Data Base', 'Content Management'],
      developmentTime: '10 Days',
      buttonText: 'Contact Us',
      buttonLink: '#',
      highlight: false,
      icon: 'fas fa-rocket',
    },
    {
      type: 'Concept Website',
      price: '₹ 35,000/-',
      description: 'Concept Website is a website which contains some concept along with Content Management System (CMS) with Admin Panel.',
      features: ['Unlimited Pages', '1 My SQL Data Base', 'Content Management'],
      developmentTime: '15 Days',
      buttonText: 'Contact Us',
      buttonLink: '#',
      highlight: false,
      icon: 'fas fa-lightbulb',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-blue-600">Our</span> <span className="text-blue-600">Pricing</span> <span className="text-blue-600">Plans</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105 ${plan.highlight ? 'bg-blue-500 text-white' : 'bg-white text-dark hover:bg-blue-500 hover:text-white'}`}
            >
              <div className="flex justify-center items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'} hover:bg-white hover:text-blue-500 transition-colors`}>
                  <i className={plan.icon}></i>
                </div>
                <span className={`text-4xl font-bold ml-4 ${plan.highlight ? 'text-white' : 'text-blue-500 hover:text-white transition-colors'}`}>{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
              <p className="text-xl font-bold mb-2">{plan.price}</p>
              <p className="mb-4">{plan.description}</p>
              <ul className="mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2 flex items-center">
                    <i className="fas fa-check-circle text-blue-500 mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
              <p className="font-semibold mb-4">Development Time: {plan.developmentTime}</p>
              <a href={plan.buttonLink} className={`block text-center py-2 px-4 rounded transition-colors ${plan.highlight ? 'bg-white text-blue-500 hover:bg-blue-600 hover:text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                {plan.buttonText} <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
