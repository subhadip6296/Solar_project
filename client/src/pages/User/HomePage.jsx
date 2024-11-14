import React from "react";
import { WobbleCardDemo } from "@/components/home/Services";
import Cta from "../../components/home/Cta";
import Hero from "../../components/home/Hero";
import Number from "../../components/home/Number";
import Products from "../../components/home/Products";
import Testimonial from "../../components/home/Testimonial";

const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <WobbleCardDemo />
      <Products />
      <Testimonial />
      <Number />
      <Cta />
    </main>
  );
};

export default HomePage;
