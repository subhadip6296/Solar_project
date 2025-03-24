import React from "react";
import { WobbleCardDemo } from "@/components/home/Services";
import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import Number from "@/components/home/Number";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";
import AboutPage from "../pages/AboutPage"
import Gif from '../components/home/Gif'

const HomePage = () => {
  return (
    <main >
      {/* <div><Hero /></div> */}
      <div ><WobbleCardDemo /></div>
      <div className="pt-1 pb-8"><AboutPage/></div>
{/* <Gif/> */}
      {/* <Products /> */}
      {/* <Testimonial /> */}
      {/* <Number /> */}
      {/* <Cta /> */}
    </main>
  );
};

export default HomePage;
