
"use client";
import Image from 'next/image';

import { BsSliders2Vertical } from "react-icons/bs"; // Ensure the import path is correct
import React, { useState } from "react";

import { ChevronDown, ChevronUp } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/Components/ui/collapsible";

const categories = [
  "T-shirts",
  "Shorts",
  "Shirts",
  "Hoodie",
  "Jeans",
];

const colors = [
  { name: "Green", class: "bg-[#00C12B]" },
  { name: "Red", class: "bg-[#F50606]" },
  { name: "Yellow", class: "bg-[#F5DD06]" },
  { name: "Orange", class: "bg-[#F57906]" },
  { name: "Light Blue", class: "bg-[#06CAF5]" },
  { name: "Blue", class: "bg-[#063AF5]" },
  { name: "Purple", class: "bg-[#7D06F5]" },
  { name: "Pink", class: "bg-[#F506A4]" },
  { name: "White", class: "bg-white" },
  { name: "Black", class: "bg-black" },
];

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const dressStyles = [
  "Casual",
  "Formal",
  "Party",
  "Gym",
];

export function FiltersSidebar() {
  const [priceRange, setPriceRange] = React.useState([50, 200]);
  const [openSections, setOpenSections] = React.useState({
    categories: true,
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  return (
    <div className="box-border flex flex-col items-start w-[295px] min-h-[1220px] p-[20px_24px] gap-6 border border-black/10 rounded-[20px] bg-white font-['Satoshi']">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl font-bold">Filters</h2>
        <Image src="/filterlogo.png" alt="logo" width={24} height={24} />
      </div>

      <div className="w-full h-px bg-black/10" />

      {/* Categories */}
      <Collapsible
        open={openSections.categories}
        onOpenChange={(open: any) => setOpenSections({ ...openSections, categories: open })}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Categories</h3>
          <CollapsibleTrigger>
            {openSections.categories ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {categories.map((category) => (
            <div key={category} className="flex justify-between items-center">
              <span className="text-base text-black/60">{category}</span>
              <ChevronDown className="w-4 h-4 text-black/60" />
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Price Range */}
      <Collapsible
        open={openSections.price}
        onOpenChange={(open: any) => setOpenSections({ ...openSections, price: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Price</h3>
          <CollapsibleTrigger>
            {openSections.price ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-4">
          <div className="w-full">
            <BsSliders2Vertical />
            <input
              type="range"
              value={priceRange[0]}
              max={200}
              min={50}
              step={1}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-full"
            />
            <input
              type="range"
              value={priceRange[1]}
              max={200}
              min={50}
              step={1}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Colors */}
      <Collapsible
        open={openSections.colors}
        onOpenChange={(open: any) => setOpenSections({ ...openSections, colors: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Colors</h3>
          <CollapsibleTrigger>
            {openSections.colors ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="grid grid-cols-5 gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                className={`w-[37px] h-[37px] rounded-full border border-black/20 ${color.class}`}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Sizes */}
      <Collapsible
        open={openSections.size}
        onOpenChange={(open: any) => setOpenSections({ ...openSections, size: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Size</h3>
          <CollapsibleTrigger>
            {openSections.size ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-5 py-2.5 rounded-[62px] text-sm ${
                  size === "Large"
                    ? "bg-black text-white font-medium"
                    : "bg-[#F0F0F0] text-black/60"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Dress Style */}
      <Collapsible
        open={openSections.dressStyle}
        onOpenChange={(open: any) => setOpenSections({ ...openSections, dressStyle: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Dress Style</h3>
          <CollapsibleTrigger>
            {openSections.dressStyle ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="space-y-5">
            {dressStyles.map((style) => (
              <div key={style} className="flex justify-between items-center">
                <span className="text-base text-black/60">{style}</span>
                <ChevronDown className="w-4 h-4 text-black/60" />
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Apply Filter Button */}
      <button className="w-full h-12 bg-black text-white rounded-[62px] text-sm font-medium mt-4">
        Apply Filter
      </button>
    </div>
  );
}
