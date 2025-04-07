import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const items = [
  { type: "image", text: "EvolTriv", img: ["/assets/Images/b1.jpg", "/assets/Images/b11.jpg", "/assets/Images/b3.jpeg"] },
  { type: "text", content: "We offer efficient solar solutions." },
  { type: "image", text: "On-grid and off-grid available.", img: "https://i.gifer.com/origin/1f/1fe682b598a97cee3d5093cfa8c92f7f_w200.gif" },
  { type: "text", content: "Hybrid solar systems maximize efficiency." },
  { type: "text", content: "Custom solar solutions for industries." },
  { type: "image", text: "Our solar systems ensure sustainability.", img: ["/assets/Images/ebb.png", "/assets/Images/c2.jpg", "/assets/Images/c11.jpg"] },
  { type: "text", content: "We offer advanced e-mobility solutions." },
  { type: "image", text: "E-bikes provide clean transportation alternatives.", img: "https://cdn.shopify.com/s/files/1/0592/3766/2905/files/charge_the_ebike_by_pedaling.gif?v=1691983938" },
  { type: "image", text: "Affordable and efficient electric mobility.", img: "https://encrypted-tbn0.gstatic.com/assets/Images?q=tbn:ANd9GcQnSXbJsnv_AkVVc8P-Fa8S0gFmPWz_B6Jglw&s" },
  { type: "text", content: "Reducing fossil fuel dependency daily." },
  { type: "image", text: "Innovative designs for better performance.", img: ["/assets/Images/e1.jpg", "/assets/Images/e2.jpg", "/assets/Images/e11.jpg"] },
  { type: "text", content: "We offer hands-on technical training." },
  { type: "text", content: "Students gain real-world project experience." },
  { type: "image", text: "Learn IoT and renewable energy.", img: "https://www.boldbusiness.com/wp-content/uploads/2018/05/IoT.gif" },
  { type: "text", content: "Practical skills for future innovation." },
  { type: "image", text: "Bridging theory with practical application.", img: ["/assets/Images/d1.jpg", "/assets/Images/d2.jpeg", "/assets/Images/d3.jpg"] },
];

// Text Box Animation (fade & slide in)
const textBoxAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const ScrollImage = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <img src={images[index]} alt="Scrolling Image" className="w-full h-full object-contain transition-opacity duration-700" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}></div>
        ))}
      </div>
    </div>
  );
};
const CompactGrid = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 px-4 py-8 md:px-16">

      {/* Grid Container */}
      <div className="w-full min-h-screen grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
  {items.map((item, index) => {
    const isImage = item.img !== undefined;

    return isImage ? (
      <motion.div key={index} className="relative group w-full h-40 md:h-60 lg:h-full">
        {Array.isArray(item.img) ? (
          <ScrollImage images={item.img} />
        ) : (
          <img
            src={item.img}
            alt={item.text}
            className="w-full h-full object-contain max-w-full h-auto transition-opacity duration-300"
          />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/70 p-2"
        >
          <p className="text-white text-sm text-center">{item.text}</p>
        </motion.div>
      </motion.div>
    ) : (
      <motion.div
        key={index}
        className="flex items-center justify-center p-4 bg-gray-900 text-white text-sm text-center rounded-lg shadow-lg"
        {...textBoxAnimation}
      >
        {item.content}
      </motion.div>
    );
  })}
</div>

      
    </div>
  );
};

export default CompactGrid;


