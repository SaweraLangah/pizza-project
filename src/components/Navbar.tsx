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

        </div>
        </div>
      </div>
    </div>
  );
}
