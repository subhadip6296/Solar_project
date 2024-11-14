import React from "react";
import { motion } from "framer-motion";
import { Sun, Battery, Leaf, Wrench } from "lucide-react";
import { images } from "../../assets/Assets";

const Hero = () => {
  const stats = [
    { icon: Sun, value: "500+", label: "Installations" },
    { icon: Battery, value: "95%", label: "Satisfaction" },
    { icon: Leaf, value: "30%", label: "Energy Savings" },
    { icon: Wrench, value: "24/7", label: "Support" },
  ];

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 bg-grid-black/[0.2] bg-center">
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="relative">
        <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-[#009a8d]/10 rounded-full text-base font-semibold tracking-wider text-[#009a8d] uppercase">
                BETTER SOLUTIONS, GOOD CHOICE
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold text-gray-900 lg:text-6xl xl:text-7xl">
                Power Your Future with{" "}
                <span className="text-[#009a8d]">Sustainable Energy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 lg:text-xl">
                The future belongs to those who harness the power of the sun.
                Join the renewable energy revolution today.
              </motion.p>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-[#009a8d] rounded-lg hover:bg-[#008075]">
                  Enquire Now
                  <svg
                    className="w-6 h-6 ml-8 -mr-2 transition-transform group-hover:translate-x-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.a>
              </motion.div> */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-[#009a8d]" />
                    </div>
                    <div className="font-bold text-2xl text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden">
                <img
                  className="w-full object-cover"
                  src={images.hero_image}
                  alt="Solar Installation"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
