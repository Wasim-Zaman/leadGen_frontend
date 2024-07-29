import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/landingPage/footer';
import Navbar from '../components/landingPage/navbar';

const servicesData = [
  {
    sectionTitle: 'Influencer Marketing',
    services: [
      {
        title: 'Influencer Marketing Strategy',
        description: 'We help you reach a wider audience by leveraging the power of influencers to promote your brand.',
        icon: 'fas fa-bullhorn',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Influencer Selection',
        description: 'We assist you in selecting the right influencers who align with your brand values and goals.',
        icon: 'fas fa-user-check',
        link: '#',
        bgColor: 'bg-gradient-to-r from-pink-500 to-pink-300 text-white',
      },
      {
        title: 'Campaign Management',
        description: 'We manage your influencer marketing campaigns from start to finish, ensuring maximum impact.',
        icon: 'fas fa-tasks',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Performance Analytics',
        description: 'We provide detailed analytics on the performance of your influencer campaigns.',
        icon: 'fas fa-chart-line',
        link: '#',
        bgColor: 'bg-gradient-to-r from-pink-500 to-pink-300 text-white',
      },
    ],
  },
  {
    sectionTitle: 'Freelance Works',
    services: [
      {
        title: 'Freelance Projects',
        description: 'We provide a platform for freelancers to find projects and for businesses to hire freelancers for various tasks.',
        icon: 'fas fa-briefcase',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Talent Marketplace',
        description: 'Connect with skilled freelancers from various fields to get your projects done efficiently.',
        icon: 'fas fa-users',
        link: '#',
        bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white',
      },
      {
        title: 'Freelance Consulting',
        description: 'Get expert advice on managing freelance projects and maximizing their impact.',
        icon: 'fas fa-comments',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Project Management Tools',
        description: 'Access tools and resources to manage your freelance projects effectively.',
        icon: 'fas fa-toolbox',
        link: '#',
        bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white',
      },
    ],
  },
  {
    sectionTitle: 'Hire Developer',
    services: [
      {
        title: 'Find Developers',
        description: 'Looking for skilled developers? We help you find and hire the right talent for your projects.',
        icon: 'fas fa-code',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Dedicated Development Teams',
        description: 'Hire dedicated development teams to work on your projects full-time or part-time.',
        icon: 'fas fa-laptop-code',
        link: '#',
        bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white',
      },
      {
        title: 'Remote Developers',
        description: 'Hire remote developers to work on your projects from anywhere in the world.',
        icon: 'fas fa-globe',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Project-Based Hiring',
        description: 'Hire developers on a project basis for short-term or long-term projects.',
        icon: 'fas fa-project-diagram',
        link: '#',
        bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white',
      },
    ],
  },
  {
    sectionTitle: 'IT Consultancy',
    services: [
      {
        title: 'IT Strategy Consulting',
        description: 'Our IT consultancy services help businesses improve their IT infrastructure and strategy.',
        icon: 'fas fa-laptop-code',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Technology Assessment',
        description: 'We provide technology assessment services to evaluate your current IT setup and recommend improvements.',
        icon: 'fas fa-cogs',
        link: '#',
        bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white',
      },
      {
        title: 'Cloud Consulting',
        description: 'We offer cloud consulting services to help you migrate to and manage cloud-based solutions.',
        icon: 'fas fa-cloud',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Cybersecurity Consulting',
        description: 'Our cybersecurity consulting services help you protect your business from cyber threats.',
        icon: 'fas fa-shield-alt',
        link: '#',
        bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white',
      },
    ],
  },
  {
    sectionTitle: 'UI/UX Design',
    services: [
      {
        title: 'User Interface Design',
        description: 'We provide top-notch UI design services to create engaging and user-friendly interfaces.',
        icon: 'fas fa-pencil-ruler',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'User Experience Design',
        description: 'Enhance user satisfaction with our expert UX design services that focus on usability and accessibility.',
        icon: 'fas fa-users',
        link: '#',
        bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white',
      },
      {
        title: 'Prototyping & Wireframing',
        description: 'We create prototypes and wireframes to help you visualize the design and functionality of your application.',
        icon: 'fas fa-drafting-compass',
        link: '#',
        bgColor: 'bg-white',
      },
      {
        title: 'Design Audits',
        description: 'We perform design audits to identify areas for improvement in your existing applications.',
        icon: 'fas fa-search',
        link: '#',
        bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white',
      },
    ],
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {servicesData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">{section.sectionTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`rounded-lg shadow-lg p-6 ${service.bgColor} transform hover:scale-105 transition-transform`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white">
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="text-xl font-bold ml-4">{service.title}</h3>
                    </div>
                    <p className="mb-4">{service.description}</p>
                    <a
                      href={service.link}
                      className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                    >
                      Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
