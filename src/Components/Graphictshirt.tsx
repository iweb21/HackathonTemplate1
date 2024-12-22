import React from "react";
import Image from "next/image";

export default function GraphicTShirt() {
  const reviews = [
    {
      name: "Samantha D.",
      date: "August 14, 2023",
      review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      rating: 4.5,
    },
    {
      name: "Alex M.",
      date: "August 15, 2023",
      review:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      rating: 5,
    },
    {
      name: "Ethan R.",
      date: "August 16, 2023",
      review:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      rating: 4.5,
    },
    {
      name: "Olivia P.",
      date: "August 17, 2023",
      review:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      rating: 5,
    },
    {
      name: "Liam K.",
      date: "August 18, 2023",
      review:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      rating: 4,
    },
    {
      name: "Ava H.",
      date: "August 19, 2023",
      review:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: 4.5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Product Images */}
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image
              src="graphict.png"
              alt="Main Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            {["graphict.png", "graphict.png", "graphict.png"].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="w-20 h-20 rounded-lg border object-cover cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.39 7.26H22l-6.19 4.5L17.8 22 12 17.27 6.2 22l1.99-8.24L2 9.26h7.61L12 2z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600 font-medium">4.5/5</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-gray-800">$260</span>
            <span className="text-lg text-gray-400 line-through">$300</span>
            <span className="text-lg font-semibold text-red-500">-40%</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            This graphic t-shirt is perfect for any occasion. Crafted from soft,
            breathable fabric, it offers superior comfort and style.
          </p>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-semibold mb-2">Select Colors</h3>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black"></div>
              <div className="w-8 h-8 rounded-full bg-green-600 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-indigo-600 cursor-pointer"></div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-semibold mb-2">Choose Size</h3>
            <div className="flex gap-2">
              {["Small", "Medium", "Large", "X-Large"].map((size, i) => (
                <button
                  key={i}
                  className={`border rounded-full px-4 py-2 ${
                    size === "Large"
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg px-4 py-2 gap-4">
              <button className="text-gray-800 font-semibold">-</button>
              <span>1</span>
              <button className="text-gray-800 font-semibold">+</button>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Customer Reviews ({reviews.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-2">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.39 7.26H22l-6.19 4.5L17.8 22 12 17.27 6.2 22l1.99-8.24L2 9.26h7.61L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Reviewer Details */}
              <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
              <p className="text-gray-600 mt-2">{review.review}</p>
              <p className="text-sm text-gray-400 mt-2">Posted on {review.date}</p>
            </div>
          ))}
        </div>

        {/* Load More Reviews */}
        <div className="mt-6 text-center">
          <button className="w-full sm:w-[358px] md:w-[210px] h-[52px] flex justify-center items-center px-6 py-4 bg-white text-black outline rounded-[62px] hover:bg-gray-300 mb-6 sm:mb-[38px]">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Cards (Product suggestions) */}
          {["polo1.png", "gradiant2.png", "polo3.png", "blackstriped4.png"].map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center"
            >
              <Image
                src={`/{Image}`}
                alt="Product"
                className="w-full h-[200px] object-contain mb-4"
              />
              <h3 className="text-lg font-bold mb-1">Product {index + 1}</h3>
              <div className="flex justify-center items-center mb-2">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-500"
                  >
                    <path d="M12 2l3.09 6.26L22 12l-6.91 6.01L12 20.91l-6.09-6.26L2 12l6.91-6.01L12 2z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-500 ml-1">4.0/5</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-lg font-semibold">$212</p>
                <p className="text-gray-400 line-through">$242</p>
                <p className="text-red-500 text-sm font-bold">-20%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
