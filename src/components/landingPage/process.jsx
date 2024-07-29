import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      title: 'Discussion',
      description: 'We always give importance to your ideas & your requirements, based on that we will prepare the plan of actions.',
      icon: 'fas fa-comments',
      number: '01',
    },
    {
      title: 'Designing',
      description: 'Based on the planning, our Designing team will design the best & matching design that reflects your concept.',
      icon: 'fas fa-pencil-alt',
      number: '02',
    },
    {
      title: 'Development',
      description: 'Our Team of expert developers will develop the website/app in such a way that it would be complete on time.',
      icon: 'fas fa-code',
      number: '03',
    },
    {
      title: 'Launch',
      description: 'After full fledged testing, we host your website/app. And our team will guide you how to manage your website.',
      icon: 'fas fa-rocket',
      number: '04',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          <span className="text-blue-600">Our</span> <span className="text-red-500">Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105 hover:bg-blue-500 hover:text-white"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-white hover:text-blue-500 transition-colors">
                  <i className={step.icon}></i>
                </div>
                <span className="text-4xl font-bold text-blue-500 ml-4 hover:text-white transition-colors">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
