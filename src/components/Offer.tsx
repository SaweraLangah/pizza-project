'use client'
import React from "react";

type Offer={
  title:string;
  description:string;
}

const SpecialOffers: React.FC = () => {
const offers: Offer[] = [
  {
    title:"Buy 1 Get 1 Free! Tuesdays",
    description:"Every Tuesday, treat yourself! Buy any Pizzato flavor and get another one free of the same size."
  },
  {
    title:"Pizzato Loyalty Rewards",
    description:" Join our loyalty program! For every 5 purchases, get the 6th Pizzato free. Plus, members enjoy early access to new flavors and special deals."
  },
  {
    title:"Family Pack Discount",
    description:"Get a 15% discount on any order of 4 or more Pizza. Perfect for family outings or Pizza parties with friends!"
  }
];

const handleOfferClick=(description:string) => {
  alert(description);
}

return(
  <section className="py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map ((offer, index)=> (
          <button key={index}
          onClick={() => handleOfferClick(offer.description)}
          className="bg-orange-700 shadow-lg rounded-lg text-center hover:bg-orange-500 transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl  text-white font-semibold">{offer.title}</h3>
            <p className="text-white mt-3 mb-3">{offer.description}</p>
          </button>
        ))}

      </div>

    </div>
  </section>
)

}
export default SpecialOffers;
  