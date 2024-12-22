import React from "react";
import Arrivals from "@/Components/Arrival";
import DressStyle from "@/Components/Dresstyle";
import HappyCustomers from "@/Components/Happycustomer";
import Hero from "@/Components/Hero";
import LogoBar from "@/Components/Herobottom";
import Header from "@/Components/Header";
import Selling from "@/Components/Selling";

export default function Home() {
  return (
  <>
  <Hero/>
  <Header/>
  <LogoBar/>
  <div className="md:px-[100px] ">
  <Arrivals/>
  <Selling/>
  <DressStyle/>
  <HappyCustomers/>
  
  </div>
  </>
  );
}
