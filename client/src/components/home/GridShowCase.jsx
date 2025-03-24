import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const items = [
  { type: "image", text: "EvolTriv", img: ["https://thumbs.dreamstime.com/b/solar-power-consultant-expert-roof-installing-panel-345870488.jpg", "https://media.istockphoto.com/id/525206743/photo/solar-panel-on-a-red-roof.jpg?s=612x612&w=0&k=20&c=xcAkdNj8dFDhu8734FpRDAZDtN2bjr48RKEd9j2FL0U=", "https://arka360.com/ros/content/images/2023/05/pasted-image-0--1---1--compressed.jpg"] },
  { type: "text", content: "We offer efficient solar solutions." },
  { type: "image", text: "On-grid and off-grid available.", img: "https://i.gifer.com/origin/1f/1fe682b598a97cee3d5093cfa8c92f7f_w200.gif" },
  { type: "text", content: "Hybrid solar systems maximize efficiency." },
  { type: "text", content: "Custom solar solutions for industries." },
  { type: "image", text: "Our solar systems ensure sustainability.", img: ["https://vancke.com/wp-content/uploads/2023/01/1842065947_1462233368_1600_1200.webp", "https://prelaunch.com/blog/wp-content/uploads/2023/12/electric-bike-manufacturing-process.jpg", "https://media.istockphoto.com/id/2051058317/photo/bike-mechanic-testing-the-rear-gear-shift-and-brakes-of-a-mountain-bike.jpg?s=612x612&w=0&k=20&c=Kt7TqVMeOd_tmYfH4Gsxf_OnMlomOaBjnSA9caC9iYU="] },
  { type: "text", content: "We offer advanced e-mobility solutions." },
  { type: "image", text: "E-bikes provide clean transportation alternatives.", img: "https://senadabikes.com/cdn/shop/files/herald-oleg_-1-1000_665_1080x.jpg?v=1726107969" },
  { type: "image", text: "Affordable and efficient electric mobility.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSXbJsnv_AkVVc8P-Fa8S0gFmPWz_B6Jglw&s" },
  { type: "text", content: "Reducing fossil fuel dependency daily." },
  { type: "image", text: "Innovative designs for better performance.", img: ["https://manekancor.com/wp-content/uploads/2024/12/01-3.jpg", "https://static.vecteezy.com/system/resources/thumbnails/000/695/297/small_2x/business-candle-stick-graph-chart-of-stock-market-investment.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtFH98psLFOiNbj1JOEk5P_qj77UaTkD2q30mv4f822Ror-YiG0irqYNlNNigwTeD67w&usqp=CAU"] },
  { type: "text", content: "We offer hands-on technical training." },
  { type: "text", content: "Students gain real-world project experience." },
  { type: "image", text: "Learn IoT and renewable energy.", img: "https://i.ytimg.com/vi/G8YcFNGauoY/hqdefault.jpg" },
  { type: "text", content: "Practical skills for future innovation." },
  { type: "image", text: "Bridging theory with practical application.", img: ["https://static.tildacdn.com/tild6362-3266-4730-b938-356131323931/shutterstock_2130028.jpg", "https://media.walkabouts.com/media/v4lmx53u/11-17-23-blog-post.png?anchor=center&mode=crop&width=455&height=290&rnd=133449770751130000", "https://wvutoday.wvu.edu/files/b6e3a0eb-a738-421e-83aa-24a8780af0f1/1200x800?cb=bad360cacee3ebd0f2a7d471f27f578b"] },
];

// // Slow Scrolling Text Animation
// const scrollText = {
//   animate: { y: ["100%", "-100%"], transition: { repeat: Infinity, duration: 30, ease: "linear" } },
// };

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
      <img src={images[index]} alt="Scrolling Image" className="w-full h-full object-cover transition-opacity duration-700" />
      {/* White dots for indication */}
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
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 px-16 py-8">
      {/* Left & Right Scrolling Text */}
      {/* {["left-12 md:left-20", "right-12 md:right-20"].map((pos, i) => ( */}
   {/* <motion.div 
  //   key={i} 
  //   className={`absolute top-1/2 transform -translate-y-1/2 ${pos} text-white text-4xl font-bold overflow-hidden h-[500px] hidden md:block`}
  // >
  //   <motion.div className="flex flex-col" {...scrollText}>
  //     {["We", "offer ","solar", "e-mobility", "and", "hands-on", "technical", "training", "solutions."].map((letter, index) => (
  //       <span key={index} className="leading-none">{letter}</span>
  //     ))}
  //   </motion.div>
  // </motion.div>
// ))} */}

      {/* Grid Container */}
      <div className="w-[70vw] h-[90vh] grid grid-cols-4 grid-rows-4 gap-0">
        {items.map((item, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;
          const shouldBeImage = (row % 2 === 0) ? (col % 2 === 0) : (col % 2 !== 0);

          return shouldBeImage ? (
            <motion.div key={index} className="relative group w-full h-full">
              {Array.isArray(item.img) ? (
                <ScrollImage images={item.img} />
              ) : (
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/70 p-1"
              >
                <p className="text-white text-[12px] text-center">{item.text}</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-900 text-white text-[12px] text-center rounded-lg shadow-lg"
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
