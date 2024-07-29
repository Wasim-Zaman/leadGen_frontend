import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/landingPage/footer';
import Navbar from '../components/landingPage/navbar';

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-semibold mb-4">Many ways to Reach us</h3>
              <ul className="space-y-4">
                <li><i className="fas fa-map-marker-alt mr-2"></i> INFO SIGHT 2nd Floor,Survey No.78/2, Junction, Tadepalle, Prathuru, Andhra Pradesh 522501</li>
                <li><i className="fas fa-phone-alt mr-2"></i>+91 9392123831 </li>
                <li><i className="fas fa-envelope mr-2"></i> LeadgenGroup97@gmail.com </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-gray-300 transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-gray-300 transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-gray-300 transition-colors"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-gray-300 transition-colors"><i className="fab fa-youtube"></i></a>
                <a href="#" className="hover:text-gray-300 transition-colors"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Ready to Get Started?</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="mobile">Your Mobile No</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="mobile" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="city" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="subject" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">How can we help you?</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4"></textarea>
                </div>
                <div className="mb-4 flex items-center">
                  <input type="checkbox" id="not-robot" className="mr-2" />
                  <label className="text-gray-700" htmlFor="not-robot">I'm not a robot</label>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactUs;
