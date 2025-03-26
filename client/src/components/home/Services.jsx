import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import ThunderEffect from '../home/ThunderEffect'
import GridShowCase from '../home/GridShowCase'
import Gif from '../home/Gif'
import {
  Shield,
  Target,
  Users,
  Sun,
  Award,
  Rocket,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  TrendingUp,
  Medal,
  Leaf,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import OurServices from "./OurServices";





const values = [
  {
    icon: Sun,
    title: "Solar Energy Solutions",
    description:
      "Providing high-efficiency solar installations for homes, businesses, and industries.",
  },
  {
    icon: Zap,
    title: "Electric Mobility",
    description:
      "Developing cutting-edge electric bicycles for sustainable and smart mobility.",
  },
  {
    icon: Users,
    title: "Student Consulting",
    description:
      "Empowering students with hands-on projects and industry-driven learning experiences.",
  },
];

const images = [
  {
    src: "/src/assets/Images/oneevol.jpg",
    title: "Driving Sustainable Energy, Smart Mobility Solutions, and Student Innovation",
    description: "Student Driven Innovations, EvolTriv promises in shaping a greener and smarter future. With advancements in solar energy integration, we harness renewable power to drive sustainable solutions. Our vision is to create efficient and eco-friendly technologies for a better tomorrow."    
  },
  {
    src: "/src/assets/Images/thirdevol.jpeg",
    title: "Hands-On Technical Training for Students",
    description: "Comprehensive educational programs designed to empower students with real-world skills. We focus on interactive learning, mentorship, and hands-on experience. Helping students build a strong foundation for their future careers."    
      },
  {
    src: "/src/assets/Images/twoevolll.jpg",
    title: "E-Bike Manufacturing",
    description: "Design and production of high-performance electric bicycles for urban and off-road use. Our e-bikes are engineered for efficiency, offering long battery life and powerful motors. Perfect for eco-friendly commuting and adventure enthusiasts alike."  
   }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};


export function WobbleCardDemo() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  return (
    <>

{/* banner images */}
      <div className="p-0 m-0">
        <div className="relative h-[90vh] w-full overflow-hidden ">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 w-full h-full ${currentIndex === index ? "block" : "hidden"}`}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{image.title}</h1>
                  <p className="text-lg md:text-xl text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>



{/* <ThunderEffect/> */}


      <div className="max-w-7xl mx-auto w-full space-y-8 mt-12 ">
        <div className="relative py-20 bg-gradient-to-b from-[#118B50]/10 to-transparent overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative max-w-7xl mx-auto px-4 text-center space-y-8 mb-6"
          >
            <motion.h3
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Driving the Future with <span className="text-[#118B50]  relative">Clean Energy, Smart Mobility, and Hands-On Learning</span>
            </motion.h3>
            <motion.p {...fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
              We aim to revolutionize renewable energy, smart mobility, and hands-on technical guidance to build a sustainable and innovation-driven future.
            </motion.p>
          </motion.div>
        </div>


        {/* <Gif/> */}

        {/* Mission & Vision Section */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#118B50]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div whileHover={{ rotate: 15 }} className="p-3 bg-[#118B50]/10 rounded-xl">
                    <Sun className="text-[#118B50] w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To accelerate India's transition to sustainable energy by providing innovative solar solutions, advancing e-bike technology, and empowering students through hands-on consulting.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#009a8d]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div whileHover={{ rotate: -15 }} className="p-3 bg-[#118B50]/10 rounded-xl">
                    <Target className="text-[#009a8d] w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading provider of sustainable energy solutions in India by pioneering solar innovations, advancing e-bike technology, and empowering students through hands-on consulting.
                </p>
              </div>
            </motion.div>
          </div>
        </div>



        <GridShowCase/>

  
        {/* core values */}
        <div className="bg-gradient-to-b to-[#118B50]/10 from-transparent pb-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <value.icon className="w-12 h-12 text-[#118B50] mx-auto mb-1" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        
<OurServices/>


      </div>
    </>
  );
}

