import React from "react";
import { IoStarSharp } from "react-icons/io5";

// Define the TypeScript interface for customer data
interface Customer {
  id: number | string;
  name: string;
  verified: boolean;
  review: string;
  rating: number;
}

// Sample customer data
const customerData: Customer[] = [
  {
    id: 1,
    name: "Sarah M.",
    verified: true,
    review:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex K.",
    verified: false,
    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
    rating: 4,
  },
  {
    id: 3,
    name: "James L.",
    verified: true,
    review:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends",
    rating: 5,
  },
  
];

export default function HappyCustomers() {
  return (
    <div className="relative my-5 sm:my-8 md:my-10 mx-4 sm:mx-6 md:ml-[100px]">
      {/* Header */}
      <h1 className="text-2xl text-center md:text-start sm:text-2xl md:text-[48px] font-bold leading-tight sm:leading-snug md:leading-[57.6px] mb-5 sm:mb-8 md:mb-10">
        OUR HAPPY CUSTOMERS
      </h1>

      {/* Customer Reviews */}
      <div className="flex overflow-x-auto items-center justify-start md:justify-between gap-4 sm:gap-5 contain-content pb-4 md:pb-0">
        {customerData.map((customer: Customer) => (
          <div
            key={customer.id}
            className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[386px] h-auto sm:h-[220px] md:h-[240px] text-base sm:text-lg md:text-xl border border-[#0000001A] rounded-[20px] p-4 sm:p-5 md:py-[28px] md:px-[32px] flex flex-col gap-3 sm:gap-4 md:gap-5 flex-shrink-0"
          >
            {/* Star Ratings */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <IoStarSharp
                  key={index}
                  color={index < customer.rating ? "yellow" : "gray"}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              ))}
            </div>

            {/* Customer Name and Verification */}
            <p className="text-base sm:text-lg md:text-lg font-semibold flex items-center gap-2">
              {customer.name}
              {customer.verified && (
                <span className="text-white bg-green-600 rounded-full text-xs sm:text-sm p-0.5">
                  ✔
                </span>
              )}
            </p>

            {/* Customer Review */}
            <p className="text-xs sm:text-sm md:text-sm">{customer.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
