import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";
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



const values = [
  {
    icon: Sun,
    title: "Solar Energy Solutions",
    description:
      "Providing high-efficiency solar installations for homes, businesses, and industries.",
  },
  {
    icon: Zap,
    title: "E-Bike Innovation",
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

const products = [
  {
    id: 1,
    category: "Renewable Services",
    heading: "Harnessing the Power of the Sun",
    description:
      "Our renewable energy solutions focus on sustainability and efficiency. Whether it's solar street lights, rooftop solar panels, or solar water pumps, we provide cost-effective and long-term energy solutions for residential and commercial use.",
    items: [
      {
        name: "Solar Rooftop Installation",
        description: "Solar panel systems installed on rooftops for residential and commercial properties.",
        image: "https://media.istockphoto.com/id/525206743/photo/solar-panel-on-a-red-roof.jpg?s=612x612&w=0&k=20&c=xcAkdNj8dFDhu8734FpRDAZDtN2bjr48RKEd9j2FL0U=",
      },
      {
               name: "E-Bike Manufacturing",
               description: "Design and production of high-performance electric bicycles for urban and off-road use.",
              image: "https://prelaunch.com/blog/wp-content/uploads/2023/12/electric-bike-manufacturing-process.jpg",
      },
      {
           name: "Workshops",
           description: "Interactive training sessions providing hands-on experience in various technical domains.",
          image: "https://www.mohawkcollege.ca/sites/default/files/inline-images/IoT%20Website%20Cover%20Photo%20High%20resolution.jpg",
     },
    ],
  },
 
];

const images = [
  {
    src: "https://www.sembcorp.com/media/cj4fyspz/rtsbanner-1510x450.jpg?width=1510&height=450&quality=100&v=133685230918630000&format=webp",
    title: "Driving Sustainable Energy, Smart Mobility Solutions, and Student Innovation",
    description: "Student Driven Innovations, EvolTriv promises in shaping a greener and smarter future."
  },
  {
    src: "https://media.istockphoto.com/id/525206743/photo/solar-panel-on-a-red-roof.jpg?s=612x612&w=0&k=20&c=xcAkdNj8dFDhu8734FpRDAZDtN2bjr48RKEd9j2FL0U=",
    title: "Solar Rooftop Installation",
    description: "Solar panel systems installed on rooftops for residential and commercial properties."
  },
  {
    src: "https://prelaunch.com/blog/wp-content/uploads/2023/12/electric-bike-manufacturing-process.jpg",
    title: "E-Bike Manufacturing",
    description: "Design and production of high-performance electric bicycles for urban and off-road use."
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
    }, 4000);
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

{/* me */}
<div className="p-0 m-0">
<div className="relative h-[70vh] w-full overflow-hidden ">
          {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 w-full h-full ${currentIndex === index ? "block" : "hidden"}`}
          >
            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center justify-center">
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


<div className="max-w-7xl mx-auto w-full space-y-8 mt-12">

<div className="relative py-20 bg-gradient-to-b from-[#118B50]/10 to-transparent overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center space-y-8 mb-6">
            <motion.div {...fadeInUp} className="space-y-4">
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              Driving the Future with{" "}
                <span className="text-[#118B50] relative">
                Clean Energy, Smart Mobility, and Hands-On Learning
                  
                </span>
              </h3>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
                                We aim to Revolutionizing renewable energy, smart mobility and hands-on technical guidance to build a sustainable and innovation-driven future

              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>  


       {/* Mission & Vision Section */}
            <div className="max-w-7xl mx-auto px-4 mb-20 mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mission Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#118B50]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
      
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#118B50]/10 rounded-xl">
                        <Sun className="text-[#118B50] w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold">Our Mission</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
        To accelerate India's transition to sustainable energy by providing innovative 
        solar solutions, advancing e-bike technology, and empowering students through 
        hands-on consulting, ensuring a greener and smarter future.
      </p>
      
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <Leaf className="text-[#118B50] w-5 h-5" />
                        <span className="text-gray-700">
                          Sustainable Energy Solutions
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="text-[#009a8d] w-5 h-5" />
                        <span className="text-gray-700">
                          Efficient Implementation
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
      
                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#009a8d]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
      
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#118B50]/10 rounded-xl">
                        <Target className="text-[#009a8d] w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold">Our Vision</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
        To be the leading provider of sustainable energy solutions in India by pioneering 
        solar innovations, advancing e-bike technology, and empowering students through 
        hands-on consulting, driving the nation towards a cleaner and greener future.
      </p>
      
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <Leaf className="text-[#118B50] w-5 h-5" />
                        <span className="text-gray-700">
                          Sustainable Energy Solutions
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="text-[#118B50] w-5 h-5" />
                        <span className="text-gray-700">
                          Efficient Implementation
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
                


<div className="bg-gradient-to-b to-[#118B50]/10 from-transparent ">
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
      {products.map((product, index) => (
        <div
          key={product.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
        
          {/* Product Cards (Three Larger Cards) */}
          <div className="col-span-1 lg:col-span-2 flex flex-wrap justify-center gap-6">
            {product.items.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-[350px] h-[400px] flex flex-col items-center p-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <h4 className="text-xl font-semibold text-gray-800 mt-3">
                  {item.name}
                </h4>
                <p className="text-gray-600 text-center text-md mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* Explore More Button */}
<div className="col-span-1 lg:col-span-2 text-center mt-6 mb-16">
  <Link to={"/services"}>
    <Button className="bg-[#118B50] hover:bg-green-900 text-white px-6 py-3 rounded-lg">
      Explore More
    </Button>
  </Link>
</div>


        </div>
      ))}

      
    </div>
    </>
  );
}

