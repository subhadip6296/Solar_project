import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";



const testimonals = [
  
    {
      src: "/assets/Images/solarpv.jpg",
      title: "Solar PV Consulting",
      description: "Expert guidance on designing, implementing, and optimizing solar photovoltaic systems."
    },
    {
      src: "/assets/Images/rooftopmain.jpg",
      title: "Solar Rooftop Installation",
      description: "Solar panel systems installed on rooftops for residential and commercial properties."
    },
    {
      src: "/assets/Images/groundmounted.jpg",
      title: "Ground-Mounted Solar Installation",
      description: "Large-scale solar panel systems installed on open land for industrial and utility-scale projects."
    },
    {
      src: "/assets/Images/microgrid.jpg",
      title: "Solar Microgrid Construction",
      description: "Self-sustaining solar power grids designed for communities, industries, and remote locations."
    },
    {
      src: "/assets/Images/waterpump.jpg",
      title: "Solar Water Pump",
      description: "Solar-powered water pumping systems for agricultural, industrial, and household use."
    },
    {
      src: "/assets/Images/cleaning.jpg",
      title: "Solar PV Cleaning and Maintenance",
      description: "Professional cleaning and maintenance services to optimize solar panel performance."
    },
    {
      src: "/assets/Images/ebike.png",
      title: "E-Bike Manufacturing",
      description: "Design and production of high-performance electric bicycles for urban and off-road use."
    },
    {
      src: "/assets/Images/repair.jpg",
      title: "E-Bike Repair",
      description: "Comprehensive maintenance and repair services for all electric bike models."
    },
    {
      src: "/assets/Images/ebike3.jpg",
      title: "Convert Your Standard Bike into E-Bike",
      description: "Upgrade your existing bicycle with an electric conversion kit for an enhanced riding experience."
    },
    {
      src: "/assets/Images/stu1.jpg",
      title: "Workshops",
      description: "Interactive training sessions providing hands-on experience in various technical domains."
    } 
];




const OurServices = () => {
    const sliderRef = useRef(null);
    const keenSliderRef = useRef(null);
  
    useEffect(() => {
      keenSliderRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: { perView: 3, spacing: 16 },
        breakpoints: {
          "(max-width: 1024px)": {
            slides: { perView: 2, spacing: 12 },
          },
          "(max-width: 768px)": {
            slides: { perView: 1, spacing: 10 },
          },
        },
      });
  
      const autoSlide = setInterval(() => {
        keenSliderRef.current.next();
      }, 2000);
  
      return () => clearInterval(autoSlide);
    }, []);
  
    const scrollLeft = () => {
      keenSliderRef.current.prev();
    };
  
    const scrollRight = () => {
      keenSliderRef.current.next();
    };
  
    return (
      <div>
        <div className="container mx-auto px-6 lg:px-20 pt-16 relative overflow-hidden bg-gradient-to-b from-[#118B50]/10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="relative">
            <button
              className="absolute left-0 top-[38%] transform -translate-y-1/2 bg-white dark:bg-black shadow-lg p-2  rounded-full z-10"
              onClick={scrollLeft}
            >
              <ChevronLeft size={24} />
            </button>
            <div ref={sliderRef} className="keen-slider">
              {testimonals.map((testimonals, index) => (
                <div key={index} className="keen-slider__slide">
<div className="bg-white dark:bg-[#00005c] rounded-lg shadow-md overflow-hidden h-[420px]">
<Link to={'/services'}>
                      <img
                        src={testimonals.src}
                        alt={testimonals.title}
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold">{testimonals.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{testimonals.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-[38%] transform -translate-y-1/2 bg-white dark:bg-black shadow-lg p-2 rounded-full z-10"
              onClick={scrollRight}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="text-center mt-6 mb-4">
          <Link to={"/services"}>
            <Button className="bg-[#118B50] dark:bg-[#0B0B45]  hover:bg-green-900 text-white px-6 py-3 rounded-lg">
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default OurServices;
  