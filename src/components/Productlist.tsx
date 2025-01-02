import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Slice Pizza",
    category: "Yummy",
    price: "15.00$",
    imageURL:
      "/images/download.jpg",
    bgColor: "bg-orange-500",
  },
  {
    id: 2,
    title: "Hot Pizza",
    category: "Yummy",
    price: "10.00$",
    imageURL:
      "/images/download (6).jpg",
    bgColor: "bg-sky-500",
  },
  {
    id: 3,
    title: "Cheezy Pizza",
    category: "Yummy",
    price: "20.00$",
    imageURL:
      "/images/download (1).jpg",
    bgColor: "bg-orange-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-4 flex flex-wrap items-center justify-center gap-6 mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col items-center justify-between m-4 relative overflow-hidden ${product.bgColor} rounded-xl shadow-lg group max-w-xs`}
        >
          {/* Background SVG */}
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform duration-300"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          {/* Image Section */}
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute w-40 h-40 bottom-0 left-0 -mb-20 ml-3"
              style={{
                background: "radial-gradient(circle, black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            />
            <Image className="relative w-32 h-32 object-cover"
              src={product.imageURL}
              alt={product.title}
              width={128}
              height={128}>
              </Image>
          </div>

          {/* Product Details */}
          <div className="relative text-white px-5 py-4">
            <span className="block text-sm opacity-75 mb-2">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-bold text-lg">{product.title}</span>
              <span className="block bg-white rounded-full text-pink-800 text-xs font-bold px-2 py-1">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}