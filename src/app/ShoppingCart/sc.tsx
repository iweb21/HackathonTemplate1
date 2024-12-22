import React from "react";
import Image from 'next/image';

const Cart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/gradiant2.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "./blackstriped4.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/jeans2.png"
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-600">
        <a href="#" className="hover:underline">Home</a> &gt; <span>Cart</span>
      </nav>

      {/* Cart Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

          {/* Item List */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">${item.price}</span>
                <div className="flex items-center border rounded-lg">
                  <button className="px-3 py-1 text-gray-600 hover:text-black">-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button className="px-3 py-1 text-gray-600 hover:text-black">+</button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 6h18M8 6V4h8v2m-1 15H9V9h8v12m-7-12h6"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-medium">${deliveryFee}</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full border rounded-md p-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Apply
            </button>
          </div>
          <div className="mt-4">
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 flex items-center justify-center">
              Go to Checkout
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
