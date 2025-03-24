import React from "react";
import { motion } from "framer-motion";
import { Sun, Target } from "lucide-react"; // Ensure you have lucide-react installed

// Variants for animating words one by one
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each word
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// Animated Heading Component
const AnimatedHeading = () => {
  const text = "Driving the Future with Clean Energy, Smart Mobility, and Hands-On Learning";
  const words = text.split(" "); // Split the sentence into words

  return (
    <motion.h3
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl md:text-6xl font-bold tracking-tight text-center"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.h3>
  );
};

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-8 mt-12">
      {/* Background Section */}
      <div className="relative py-20 bg-gradient-to-b from-[#118B50]/10 to-transparent overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto px-4 text-center space-y-8 mb-6"
        >
          {/* Animated Heading */}
          <AnimatedHeading />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
          >
            We aim to revolutionize renewable energy, smart mobility, and hands-on technical guidance to build a sustainable and innovation-driven future.
          </motion.p>
        </motion.div>
      </div>

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
    </div>
  );
};

export default Page;
