'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to backend)
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ backgroundImage: 'linear-gradient(to right, #ADD8E6, #B0E0E6, #ADD8E6, #87CEFA)' }}>
      <div className="w-full mb-6 flex items-center justify-between">
          <a className="text-black-600 font-bold text-lg mr-4" href='/'>&lt; Back</a>
      </div>
      <h1 className="text-center text-4xl font-bold mb-10">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 h-32 resize-none" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-200">Send Message</button>
      </form>
    </main>
  );
};

export default ContactMe;
