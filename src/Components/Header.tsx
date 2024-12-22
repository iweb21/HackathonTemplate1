"use client"
import Link from "next/link";
import react from "react";
 import { FaSearch } from "react-icons/fa";
 import { FaShoppingCart } from "react-icons/fa";
 import { FaRegCircleUser } from "react-icons/fa6";
 import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ShoppingCart from './Addcart';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[60px] flex justify-between items-center px-4 sm:px-6 lg:px-10 bg-white shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-lg sm:text-xl lg:text-3xl font-bold">SHOP.CO</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-2xl"
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-[60px] left-0 w-full bg-white flex flex-col items-start p-4 space-y-3 shadow-lg sm:hidden">
          <li>
            <Link href="/Shop" className="block w-full py-1">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/" className="block w-full py-1">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/new-arrivals" className="block w-full py-1">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link href="/brands" className="block w-full py-1">
              Brands
            </Link>
          </li>
        </ul>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden lg:block">
              <ul className="flex items-center gap-6 text-base">
                <li className="flex items-center">
                  <Link href ="./" className="hover:text-gray-600">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href ="./OnSale" className="hover:text-gray-600">
                    On Sale
                  </Link>
                </li>

                <li>
                  <Link href ="./NewArrival" className="hover:text-gray-600">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href ="./" className="hover:text-gray-600">
                    Brands
                  </Link>
                </li>
                
              </ul>
            </nav>



      {/* Search Input */}
      <div className="flex items-center w-full sm:w-[330px] h-[40px] rounded-full bg-[#F0F0F0] mx-4 sm:mx-0">
        <FaSearch className="text-xl ml-2" aria-label="Search" />
        <input
          placeholder="Search items..."
          className="w-full h-full ml-2 outline-none bg-transparent rounded-full"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 sm:space-x-5">
      <Link href ="./ShoppingCart" className="hover:text-gray-600">
      <FaShoppingCart className="text-2xl" arial-label ="Shopping Cart" />            
       
                  </Link>
     
         {/* <FaShoppingCart className="text-2xl" arial-label ="Shopping Cart" />  */}
        <FaRegCircleUser className="text-2xl" aria-label="User Profile" />
      </div>
    </header>
  );
}


