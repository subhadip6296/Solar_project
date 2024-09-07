import Cta from "../../components/homeCompo/Cta";
import Hero from "../../components/homeCompo/Hero";
import Number from "../../components/homeCompo/Number";
import Partner from "../../components/homeCompo/Partner";
import Products from "../../components/homeCompo/Products";
import Services from "../../components/homeCompo/Services";
import Testimonial from "../../components/homeCompo/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Products />
      <Partner />
      <Testimonial />
      <Number />
      <Cta />
    </main>
  );
};

export default HomePage;
