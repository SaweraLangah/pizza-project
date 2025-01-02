'use client'
import { useState } from 'react';
import React from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
<div className="bg-gradient-to-b from-pink-200 to-pink-700">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
       <div className="py-3 px-3 rounded-xl border w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-purple-800 hover:text-pink-700 font-serif font-extrabold sm:text-xl lg:text-2xl text-2xl">
             Pizzato!
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <p className="text-sm text-white">
              Order now and get it within <span className="text-orange-800">15 Minutes!</span>
            </p>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-orange-800 hover:text-pink-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
