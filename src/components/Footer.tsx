import React from 'react'


export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center w-100%'>
        <div className=' text-pink-300 font-medium bg-gradient-to-l from-pink-200 to-pink-700'>
        <nav className='flex justify-center flex-wrap gap-6'>
          <a className='hover:text-pink-600 text-white' href="/">Home</a>
          <a className='hover:text-pink-600 text-white' href="/about">About</a>
          <a className='hover:text-pink-600 text-white' href="/contact-us">Contact-us</a>
        </nav>

        <p className='text-center text-white hover:text-pink-400 font-medium mb-8 '>
          2025 Sawera Langah. All rights reserved.
        </p>
        <br />
        </div>
      </footer>
    </div>
  )
}