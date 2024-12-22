import * as SliderPrimitive from "@radix-ui/react-slider";
import React, { useState } from "react";

export const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold">Price Range</h3>

      <SliderPrimitive.Root
        value={priceRange}
        onValueChange={setPriceRange}
        min={50}
        max={500}
        step={1}
        aria-label="Price Range"
        className="relative flex items-center select-none w-full h-5"
      >
        <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-1">
          <SliderPrimitive.Range className="absolute bg-blue-600 rounded-full h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block w-5 h-5 bg-blue-600 rounded-full" />
      </SliderPrimitive.Root>

      <div className="flex justify-between text-sm mt-2">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};
