import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";

const testimonialsLeft = [
  {
    src: "/assets/Images/residentialsolar.jpg",
    title: "Solar Panel Installation",
    description: "Harness the power of the sun with our efficient solar solutions.",
    link: "https://example.com/solar",
  },
  {
    src: "/assets/Images/blog1-eco.jpg",
    title: "Eco-friendly E-Bikes",
    description: "Experience the future of transportation with our e-bikes.",
    link: "https://example.com/ebike",
  },
  {
    src: "/assets/Images/srrumain.jpg",
    title: "Student Consulting",
    description: "Helping students build innovative renewable energy projects.",
    link: "https://example.com/consulting",
  },
];

const testimonialsRight = [
  {
    src: "/assets/Images/offgrid.jpg",
    title: "Off-Grid Solar System",
    description: "Stay powered anywhere with our off-grid solar solutions.",
    link: "https://example.com/offgrid",
  },
  {
    src: "/assets/Images/ongrid.jpg",
    title: "On-Grid Solar Solutions",
    description: "Save on electricity bills with seamless on-grid solar systems.",
    link: "https://example.com/ongrid",
  },
  {
    src: "/assets/Images/battery.jpeg",
    title: "Solar Battery Storage",
    description: "Store solar energy for uninterrupted power supply.",
    link: "https://example.com/battery",
  },
];

const ImageSlider = () => {
  const [isPausedLeft, setIsPausedLeft] = useState(false);
  const [isPausedRight, setIsPausedRight] = useState(false);

  return (
    <section className="bg-white py-12 space-y-12 dark:bg-black bg-gradient-to-b from-[#118B50]/10 to-transparent">
      {/* Left to Right Infinite Scrolling */}
      <h2 className="text-3xl font-bold text-center mb-12">
            Blogs
          </h2>
      <div
        className="overflow-hidden relative group"
        onMouseEnter={() => setIsPausedLeft(true)}
        onMouseLeave={() => setIsPausedLeft(false)}
      >
        <div
          className="flex items-center gap-6 cursor-pointer scrolling-container"
          style={{
            animation: isPausedLeft ? "none" : "scroll-left 10s linear infinite",
          }}
        >
          {[...testimonialsLeft, ...testimonialsLeft].map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="min-w-[200px] bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-white mt-1 text-xs">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right to Left Infinite Scrolling */}
      <div
        className="overflow-hidden relative group"
        onMouseEnter={() => setIsPausedRight(true)}
        onMouseLeave={() => setIsPausedRight(false)}
      >
        <div
          className="flex items-center gap-6 cursor-pointer scrolling-container"
          style={{
            animation: isPausedRight ? "none" : "scroll-right 10s linear infinite",
          }}
        >
          {[...testimonialsRight, ...testimonialsRight].map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="min-w-[200px] bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-white mt-1 text-xs">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Inline CSS for smooth infinite animations */}
      <style>
        {`
          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          .scrolling-container {
            display: flex;
            white-space: nowrap;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
};

export default ImageSlider;
