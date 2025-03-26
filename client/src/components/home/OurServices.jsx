import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";



const testimonals = [
  
    {
      src: "https://thumbs.dreamstime.com/b/solar-power-consultant-expert-roof-installing-panel-345870488.jpg",
      title: "Solar PV Consulting",
      description: "Expert guidance on designing, implementing, and optimizing solar photovoltaic systems."
    },
    {
      src: "https://media.istockphoto.com/id/525206743/photo/solar-panel-on-a-red-roof.jpg?s=612x612&w=0&k=20&c=xcAkdNj8dFDhu8734FpRDAZDtN2bjr48RKEd9j2FL0U=",
      title: "Solar Rooftop Installation",
      description: "Solar panel systems installed on rooftops for residential and commercial properties."
    },
    {
      src: "https://arka360.com/ros/content/images/2023/05/pasted-image-0--1---1--compressed.jpg",
      title: "Ground-Mounted Solar Installation",
      description: "Large-scale solar panel systems installed on open land for industrial and utility-scale projects."
    },
    {
      src: "https://constructive-voices.com/wp-content/uploads/2023/08/renewable-energy-microgrid.jpg",
      title: "Solar Microgrid Construction",
      description: "Self-sustaining solar power grids designed for communities, industries, and remote locations."
    },
    {
      src: "https://kenbrooksolar.com/wp-content/uploads/3HP-solar-water-pump.jpg",
      title: "Solar Water Pump",
      description: "Solar-powered water pumping systems for agricultural, industrial, and household use."
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2022/5/MB/GG/YP/28149614/solar-panel-cleaning-services-500x500.jpg",
      title: "Solar PV Cleaning and Maintenance",
      description: "Professional cleaning and maintenance services to optimize solar panel performance."
    },
    {
      src: "https://prelaunch.com/blog/wp-content/uploads/2023/12/electric-bike-manufacturing-process.jpg",
      title: "E-Bike Manufacturing",
      description: "Design and production of high-performance electric bicycles for urban and off-road use."
    },
    {
      src: "https://media.istockphoto.com/id/2051058317/photo/bike-mechanic-testing-the-rear-gear-shift-and-brakes-of-a-mountain-bike.jpg?s=612x612&w=0&k=20&c=Kt7TqVMeOd_tmYfH4Gsxf_OnMlomOaBjnSA9caC9iYU=",
      title: "E-Bike Repair",
      description: "Comprehensive maintenance and repair services for all electric bike models."
    },
    {
      src: "https://fuell.eu/cdn/shop/files/F2-LIFESTLYE-ERIC-_3670080_aac07b60-2490-4a5b-95b1-d02d8a1eb061.webp?v=1689338110",
      title: "Convert Your Standard Bike into E-Bike",
      description: "Upgrade your existing bicycle with an electric conversion kit for an enhanced riding experience."
    },
    {
      src: "https://www.mohawkcollege.ca/sites/default/files/inline-images/IoT%20Website%20Cover%20Photo%20High%20resolution.jpg",
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
        <div className="container mx-auto px-6 lg:px-20 pt-16 relative overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="relative">
            <button
              className="absolute left-0 top-[38%] transform -translate-y-1/2 bg-white shadow-lg p-2  rounded-full z-10"
              onClick={scrollLeft}
            >
              <ChevronLeft size={24} />
            </button>
            <div ref={sliderRef} className="keen-slider">
              {testimonals.map((testimonals, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={'/services'}>
                      <img
                        src={testimonals.src}
                        alt={testimonals.title}
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold">{testimonals.title}</h3>
                      <p className="text-gray-600 mt-2">{testimonals.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-[38%] transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10"
              onClick={scrollRight}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="text-center mt-6 mb-4">
          <Link to={"/services"}>
            <Button className="bg-[#118B50]  hover:bg-green-900 text-white px-6 py-3 rounded-lg">
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default OurServices;
  