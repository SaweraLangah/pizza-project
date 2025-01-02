import { Products } from "@/types";
import React from 'react'
import Image from "next/image";

interface ProductCardProps extends Products {
  onAddToCart: (product: Products) => void;

}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return(
    <div className="bg-white p-4 rounded-ld shadow-lg hover:150 transition-transform duration-300 ease-in-out">
      <Image 
      src={image} 
      alt={name} 
      width={300}
      height={300}
      className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out"/>
      <h3 className="text-xl text-orange-600 font-semibold mb-2">{name}</h3>
      <p className="text-lg text-pink-800 mb-4">{price}</p>

      <button onClick={() => onAddToCart({ id, name, price, image})}
        className="bg-blue-600 text-white px-4 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"> Add To Cart;

      </button>
    </div>
  );
};

export default ProductCard;