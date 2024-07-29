import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import Footer from '../components/landingPage/footer';
import Navbar from '../components/landingPage/navbar';

const Estimation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    projectDescription: '',
    city: '',
    whatsappNumber: '',
    notRobot: false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, notRobot: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.notRobot) {
      fetch('https://leadback.leadgenadvertisements.com/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            alert(data.message);
          } else {
            alert(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error sending your message.');
        });
    } else {
      alert('Please confirm you are not a robot.');
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Get an Estimation</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Fill in your details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Your Phone Number</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="projectDescription">Project Description</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="projectDescription"
                  rows="4"
                  value={formData.projectDescription}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="whatsappNumber">WhatsApp Number</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="not-robot"
                  className="mr-2"
                  checked={formData.notRobot}
                  onChange={handleCheckboxChange}
                />
                <label className="text-gray-700" htmlFor="not-robot">I'm not a robot</label>
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Estimation;
