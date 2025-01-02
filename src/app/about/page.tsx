import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import React from 'react'

export default function page() {
  return (
    <div className="bg-gradient-to-r from-black to-pink-700">
      <Navbar/>
      <h1 className='text-white justify-self-center items-center font-serif font-extrabold text-6xl  justify-center items-'>About us</h1>
      <p className='text-white mb-10 py-6 px-6'>Welcome to Pizzato, where passion meets flavor! We are dedicated to crafting the perfect pizza experience for our customers, combining fresh, high-quality ingredients with a love for innovation. Whether you&apos;re a fan of classic margherita or bold gourmet creations, every slice is made with care to deliver unparalleled taste. At Pizzato, pizza isn&apos;t just food—it&apos;s a way to bring people together. Join us and savor the difference!</p>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<FaFacebook  />
<a href="https://www.facebook/example/pizzato.com" target='blank' className="text-white">Facebook</a>
</div>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<FaInstagram />
<a href="https://www.instagram/example/pizzato.com" target='blank' className="text-white">Instagram</a>
</div>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<FaTwitter  />
<a href="https://www.twitter/example/pizzato.com" target='blank' className="text-white">Twitter</a>
</div>
<div className="pb-10  text-white hover:text-purple-400 justify-items-center">
<IoMail />
<a href="mailto:www.pizzato@gmail.com" target='blank' className="text-white">@gmail.com</a>
</div>
<Footer/>
    </div>
  )
}