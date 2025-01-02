'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='bg-pink-700 min-h-screen'>
      <Navbar />
      <div className='flex items-center justify-center mt-10 p-4'>
        <form onSubmit={handleSubmit} method='post' className='bg-gradient-to-l from-orange-700 to-pink-400700 rounded-lg shadow-lg p-10 max-w-lg w-full'>
          <fieldset>
            <legend className='text-white font-bold text-4xl text-center mb-8'>Contact Us</legend>

            {/* Name Input */}
            <label className='text-pink-800 font-bold mb-2 block'>Name:</label>
            <input
              type="text"
              name="name"
              className='w-full p-3 rounded-lg border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-700 mb-5'
              placeholder='Enter your name...'
              required
            />

            {/* Email Input */}
            <label className='text-purple-800 font-bold mb-2 block'>Email:</label>
            <input
              type="email"
              name="email"
              className='w-full p-3 rounded-lg border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-700 mb-5'
              placeholder='Enter your email...'
              required
            />

            {/* Message Input */}
            <label className='text-purple-800 font-bold mb-2 block'>Message:</label>
            <textarea
              name="message"
              className='w-full p-3 rounded-lg border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-700 mb-5'
              placeholder="Enter your message..."
              rows={3}
              required
            ></textarea>

            {/* Description Input */}
            <label className='text-purple-800 font-bold mb-2 block'>Description:</label>
            <textarea
              name="description"
              className='w-full p-3 rounded-lg border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-700 mb-5'
              placeholder="Enter your message description..."
              rows={5}
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className='w-full  bg-pink-700 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500'>
              Send Message
            </button>

            {/* Success Message */}
            {submitted && (
              <p className='text-purple-800 font-semibold text-center mt-5'>
                Thank you for contacting us! We&apos;ll get back to you soon.
              </p>
            )}
          </fieldset>
        </form>
      </div>
      <Footer/>
    </div>
  );
}