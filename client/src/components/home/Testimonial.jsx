import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";

const testimonialsLeft = [
  {
    src: "https://t3.ftcdn.net/jpg/02/70/35/00/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg",
    title: "Solar Panel Installation",
    description: "Harness the power of the sun with our efficient solar solutions.",
    link: "https://example.com/solar",
  },
  {
    src: "https://t4.ftcdn.net/jpg/03/70/45/50/360_F_370455050_fYaeGIDwOoKz5Ul3p0OwCQuysZebQU8a.jpg",
    title: "Eco-friendly E-Bikes",
    description: "Experience the future of transportation with our e-bikes.",
    link: "https://example.com/ebike",
  },
  {
    src: "https://t3.ftcdn.net/jpg/04/70/95/10/360_F_470951051_W1Qe1NvJSdkSj8D1zWcQvuD58VYc3XEP.jpg",
    title: "Student Consulting",
    description: "Helping students build innovative renewable energy projects.",
    link: "https://example.com/consulting",
  },
];

const testimonialsRight = [
  {
    src: "https://t3.ftcdn.net/jpg/05/10/25/20/360_F_510252021_GIkHlT3xErDd9Qu9Ij3uh2zVLSWyFjU5.jpg",
    title: "Off-Grid Solar System",
    description: "Stay powered anywhere with our off-grid solar solutions.",
    link: "https://example.com/offgrid",
  },
  {
    src: "https://t3.ftcdn.net/jpg/06/10/75/30/360_F_610753030_Zt0Rk5fM6wx1J8EIlv92FR3vL5ABX8c6.jpg",
    title: "On-Grid Solar Solutions",
    description: "Save on electricity bills with seamless on-grid solar systems.",
    link: "https://example.com/ongrid",
  },
  {
    src: "https://t4.ftcdn.net/jpg/07/20/85/40/360_F_720854040_kJTbQ7Bxi2hZKMeBSMv9xrsLfHVJJJ9D.jpg",
    title: "Solar Battery Storage",
    description: "Store solar energy for uninterrupted power supply.",
    link: "https://example.com/battery",
  },
];

const ImageSlider = () => {
  const [isPausedLeft, setIsPausedLeft] = useState(false);
  const [isPausedRight, setIsPausedRight] = useState(false);

  return (
    <section className="bg-white py-12 space-y-12">
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
              <div className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-gray-600 mt-1 text-xs">{item.description}</p>
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
              <div className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-gray-600 mt-1 text-xs">{item.description}</p>
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
