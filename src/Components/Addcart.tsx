"use client";

import * as React from "react";
import Image from "next/image";
import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

interface CartItem {
  id: number;
  name: string;
  size: "Small" | "Medium" | "Large";
  color: string;
  price: number;
  image: string;
  quantity: number;
}

export default function ShoppingCart() {
  const [items, setItems] = React.useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/l3.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "/p3.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "/p2.png",
      quantity: 1,
    },
  ]);
  const [promoCode, setPromoCode] = React.useState("");

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (id: number, delta: number) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + delta)) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT20") {
      alert("Promo code applied!");
      // Apply promo logic
    } else {
      alert("Invalid promo code!");
    }
  };

  return (
    <div className="mx-auto max-w-[1340px] px-[16px] md:px-[100px] py-8">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white border border-black/10 rounded-[20px] p-[20px_24px]">
          <div className="flex flex-col gap-6">
            {items.length === 0 ? (
              <div className="text-center text-xl font-medium text-black/60">
                Your cart is empty.
              </div>
            ) : (
              items.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="flex gap-4">
                    <div className="w-[124px] h-[124px] bg-[#F0EEED] rounded-[8.66px] relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 flex justify-between">
                      <div className="flex flex-col justify-between">
                        <div className="space-y-1">
                          <h3 className="font-bold text-xl">{item.name}</h3>
                          <p className="text-sm">Size: {item.size}</p>
                          <p className="text-sm">Color: {item.color}</p>
                        </div>
                        <p className="font-bold text-2xl">${item.price}</p>
                      </div>
                      <div className="flex flex-col justify-between items-end">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash className="h-6 w-6" />
                        </Button>
                        <div className="flex items-center gap-5 px-5 py-3 bg-[#F0F0F0] rounded-[62px]">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-5 w-5 p-0"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="h-5 w-5" />
                          </Button>
                          <span className="font-medium text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-5 w-5 p-0"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-black/10" />
                </React.Fragment>
              ))
            )}
          </div>
        </div>
        <div className="w-full lg:w-[505px] bg-white border border-black/10 rounded-[20px] p-[20px_24px] space-y-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Subtotal</span>
              <span className="text-xl font-bold">${subtotal}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Discount (-20%)</span>
              <span className="text-xl font-bold text-red-500">-${discount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Delivery Fee</span>
              <span className="text-xl font-bold">${deliveryFee}</span>
            </div>
            <div className="border-t border-black/10 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-xl">Total</span>
                <span className="text-2xl font-bold">${total}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#F0F0F0] rounded-[62px]">
              <Input
                type="text"
                placeholder="Add promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-black/40"
              />
            </div>
            <Button
              className="px-4 py-3 h-auto rounded-[62px] bg-black hover:bg-black/90"
              onClick={applyPromoCode}
            >
              Apply
            </Button>
          </div>
          <Button className="w-full h-[60px] rounded-[62px] bg-black hover:bg-black/90 text-base">
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
