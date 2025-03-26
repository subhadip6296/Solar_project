"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  { src: "https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg", text: ["Creative Design", "Innovative Ideas"] }, // Top Large Image
  { slides: ["https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg", "https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg", "https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg"] }, // Right Vertical Scrolling Images
  { src: "https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg", text: ["Explore More", "Limitless Possibilities"] }, // Bottom Left
  { slides: ["https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg", "https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg", "https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg"] }, // Bottom Right Scrolling Images
];

export default function ImageGrid() {
  const [textIndex, setTextIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % images[0].text.length);
    }, 3000);

    const rightInterval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % images[1].slides.length);
    }, 4000);

    const bottomInterval = setInterval(() => {
      setBottomIndex((prev) => (prev + 1) % images[3].slides.length);
    }, 4000);

    return () => {
      clearInterval(textInterval);
      clearInterval(rightInterval);
      clearInterval(bottomInterval);
    };
  }, []);

  return (
    <>

    <div className="max-w-7xl mx-auto px-4 overflow-hidden position-relative">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            </div>
            <div className="w-screen h-screen grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 p-4">
      
      {/* Top Large Image (Occupying Two Columns) */}
      <div className="col-span-2 row-span-1 relative">
        
        <img src={images[0].src} alt="Top Image" className="w-full h-full object-cover rounded-lg" />
        <motion.p
          key={textIndex}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black/40"
        >
          {images[0].text[textIndex]}
        </motion.p>
      </div>

      {/* Right Side Vertical Scrolling Image */}
      <div className="col-span-1 row-span-3 relative overflow-hidden">
        <motion.img
          key={rightIndex}
          src={images[1].slides[rightIndex]}
          alt="Right Vertical Image"
          className="w-full h-full object-cover rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images[1].slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === rightIndex ? "bg-white" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Left Image */}
      <div className="col-span-1 row-span-2 relative">
        <img src={images[2].src} alt="Bottom Left" className="w-full h-full object-cover rounded-lg" />
        <motion.p
          key={textIndex}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-black/40"
        >
          {images[2].text[textIndex]}
        </motion.p>
      </div>

      {/* Bottom Right Scrolling Image */}
      <div className="col-span-1 row-span-2 relative overflow-hidden">
        <motion.img
          key={bottomIndex}
          src={images[3].slides[bottomIndex]}
          alt="Bottom Right Image"
          className="w-full h-full object-cover rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images[3].slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === bottomIndex ? "bg-white" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
