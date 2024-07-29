import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import Footer from '../components/landingPage/footer';
import Navbar from '../components/landingPage/navbar';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    resume: null,
    previousLinks: '',
    notRobot: false
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, notRobot: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.notRobot) {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      fetch('https://leadback.leadgenadvertisements.com/apply', {
        method: 'POST',
        body: formDataToSend,
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Join Our Team</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Apply Now</h3>
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
                <label className="block text-gray-700 mb-2" htmlFor="mobile">Your Mobile No</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="resume">Upload Resume</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="file"
                  id="resume"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="previousLinks">Upload Previous Work Links</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="previousLinks"
                  value={formData.previousLinks}
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
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Career;
