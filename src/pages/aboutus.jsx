import React from "react";
import Navbar from "../components/landingPage/navbar";
import Footer from "../components/landingPage/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutCompany = () => {
  const services = [
    "Search Engine Optimization (SEO) Services",
    "Search Engine Marketing (SEM) Services - Google Ads",
    "Social Media Marketing (SMM) Services",
    "Social Media Optimization (SMO) Services",
  ];

  const features = [
    {
      title: 'Well Experienced',
      description: 'Our people truly care for our work and for each other.',
      icon: 'fas fa-user-check',
      number: '01',
    },
    {
      title: 'Top Rated',
      description: 'We believe that a culture will build a thriving company.',
      icon: 'fas fa-star',
      number: '02',
    },
    {
      title: 'Skilled Team',
      description: 'We’re driven to becoming the best version of ourselves.',
      icon: 'fas fa-users-cog',
      number: '03',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
              Lead Gen
              <span className="text-red-500"> - Best Web Development Company in Vijayawada</span>
            </h1>
            <p className="text-lg text-gray-700">
              There are so many no. of website development companies in Vijayawada, among them Lead Gen
              (also known as Lead gen advertisements pvt ltd.) is one of the Best and Leading Website Designing
              and Development Company with more than 15 years of strong web designing and development experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">About Company</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our main motto is to provide The Best Quality of website based on the client’s customized
                requirements to help them in achieving their exact business targets which is not possible in
                building website with some open-source technologies. Being a Leading Digital Marketing Company in
                Vijayawada, we always focus on developing the website with all SEO (Search Engine Optimization)
                standards that will be compatible with all popular search engines.
              </p>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Digital Marketing Services</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="flex justify-center items-center">
                <div className="bg-blue-500 text-white rounded-lg p-8 shadow-lg text-center">
                  <h2 className="text-6xl font-bold mb-2">
                    <i className="fas fa-users"></i>
                  </h2>
                  <p className="text-3xl">25+</p>
                  <p className="text-xl">Professional Employees</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center">
                      <i className={feature.icon}></i>
                    </div>
                    <span className="text-5xl font-bold text-blue-500 ml-4">{feature.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Our mission is to work along and across the continents, to continue on our quest for excellence.
                </p>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Our Vision</h3>
                <p className="text-lg text-gray-700">
                  Our vision is to always focus on the Client’s requirements and give them the best output in every work.
                  With the help of the latest technologies and trends not only in development, but in system analysis,
                  testing and project management, we tend to provide the skilled products and services for your business needs.
                </p>
              </div>
              <div className="relative">
                <div className="flex justify-center items-center">
                  <div className="bg-blue-500 text-white rounded-lg p-8 shadow-lg text-center">
                    <h2 className="text-6xl font-bold mb-2">
                      <i className="fas fa-users"></i>
                    </h2>
                    <p className="text-3xl">25+</p>
                    <p className="text-xl">Professional Employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Business Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <i className="fas fa-briefcase text-6xl text-blue-500"></i>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Business Philosophy</h3>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li>Understand Clients Needs</li>
                  <li>Partner with Clients</li>
                  <li>Earn clients trust and confidence</li>
                  <li>Achieve client’s goal expected from us</li>
                  <li>Maintain HR after accomplishment of business</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-blue-500 text-white py-12">
              <div className="container mx-auto flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <h3 className="text-5xl font-bold">14+</h3>
                  <p className="text-xl">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-5xl font-bold">998+</h3>
                  <p className="text-xl">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-5xl font-bold">24+</h3>
                  <p className="text-xl">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutCompany;
