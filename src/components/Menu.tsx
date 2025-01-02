'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProductCard from "./Productcard";
import { Products } from "@/types";

const Menu = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [cart, setCart] = useState<Products[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();

    // Load cart from local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Products) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage: "url('/images/icecreams.jpeg')",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Yummy Pizzatos in our Menu
          </h1>
          <p className="text-xl text-white">
            Yummy your taste buds with our irresistible selection of premium
            Pizzato—order your favorites now!
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="border-4 border-orange-800 text-white py-3 px-6 shadow-md rounded-lg hover:bg-orange-800 transition-transform duration-300 scale-105 ease-in-out"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="bg-white mt-8 p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-pink-800 mb-4">
                Your Cart Items Include:
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul className="flex flex-wrap gap-4">
                  {cart.map((product, index) => (
                  <li
                  key={index}
                  className="flex items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out"
                  >
                 <Image
                  src={product.image}
                 alt={product.name}
                 width={300}
                 height={300}
                 className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform"
                 />
                <span className="ml-4 text-lg font-semibold text-black">
                 {product.name} - ${product.price}
                </span>
                </li>
                ))}
                </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + (product.price || 0),
                        0
                      )}
                    </span>
                  </div>

                  <button
                    onClick={goToCheckout}
                    className="bg-orange-800 text-white py-3 px-8 rounded-lg shadow-md text-lg hover:bg-sky-500 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    Proceed to Checkout
                  </button>

                  <button
                   onClick={() => router.push("/contact-us")}
                   className="bg-pink-800 text-white py-3 px-8 ml-6 rounded-lg text-lg shadow-md hover:bg-pink-600 transition duration-300"
                  >
                   Go to Contact us
                   </button>

                  <button
                    onClick={clearCart}
                    className="bg-pink-800 text-white py-3 px-8 ml-6 rounded-lg shadow-md text-lg hover:bg-pink-800 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    Clear Cart
                  </button>
                </div>
              ) : (
                <p className="text-lg text-purple-500">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>
      </div>

      {isCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
            <h1 className="text-4xl text-orange-800 font-bold mb-4">
              Checkout
            </h1>
            <p className="text-lg text-sky-500">
              Please confirm your order before proceeding
            </p>
            <div className="mt-4">
              <ul>
                {cart.map((product, index) => (
                  <li
                    key={index}
                    className="flex justify-between mb-4 text-black"
                  >
                    <span className="text-xl text-orange-600">
                      {product.name}
                    </span>
                    <span className="text-lg text-sky-600">
                      ${product.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between mt-4 text-black">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  $
                  {cart.reduce(
                    (total, product) => total + (product.price || 0),
                    0
                  )}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsCheckout(false)}
                className="bg-orange-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Close
              </button>

              <button
                onClick={() =>
                  alert("Order confirmed...Will Deliver At Your Door Steps!")
                }
                className="bg-pink-800 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-pink-600 transition duration-300"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;