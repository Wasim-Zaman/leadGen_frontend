import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConsultationModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    company: '',
    project: '',
    marketing: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://leadback.leadgenadvertisements.com/sendConsultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          alert('Email sent successfully');
          onRequestClose();
        } else {
          alert('Failed to send email');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '900px',
          padding: '0',
          border: 'none',
          borderRadius: '8px',
          maxHeight: '90vh',
          overflow: 'auto'
        },
      }}
      contentLabel="Consultation Form"
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/3 bg-blue-900 text-white p-8">
          <h2 className="text-2xl font-bold mb-4">We're Here to Help.</h2>
          <h3 className="text-xl mb-4">Let's talk!</h3>
          <p className="mb-8">We listen to your app requirements, analyze and suggest the best approach possible for your development.</p>
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <p className="mb-2"><i className="fas fa-phone-alt mr-2"></i> +91 9392123831</p>
          <p className="mb-2"><i className="fas fa-envelope mr-2"></i> LeadgenGroup97@gmail.com</p>
        </div>
        <div className="w-full md:w-2/3 p-8 overflow-y-auto">
          <button onClick={onRequestClose} className="float-right text-2xl font-bold text-gray-500">&times;</button>
          <h2 className="text-3xl font-bold text-center mb-4">We Offer FREE Consultation</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Full name *</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Your email *</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="country">Country *</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number *</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="company">Your Company name</label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="project">Brief about the project *</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="project"
                name="project"
                rows="4"
                value={formData.project}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                className="mr-2"
                checked={formData.marketing}
                onChange={handleChange}
              />
              <label className="text-gray-700" htmlFor="marketing">Yes, I want to receive the latest marketing tips from Expert App Devs.</label>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-l transition-colors" type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ConsultationModal;
