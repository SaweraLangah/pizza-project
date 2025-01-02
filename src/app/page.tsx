import Banner from '@/components/Banner'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Offer from '@/components/Offer'
import ProductList from '@/components/Productlist'
import Progressor from '@/components/Progressor'
import Reservation from '@/components/Reservation'
import React from 'react'




export default function App() {
  return (
    <div className='bg-gradient-to-r from-black to-pink-700 min-h-screen text-white'>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Menu/>
      <ProductList/>
      <Banner/>
      <Offer/>
      <Reservation/>
      <Footer/>
    </div>
  )
}
