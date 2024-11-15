import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/Assets";
import {
  Sun,
  Building2,
  Battery,
  Wrench,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";

const services = [
  {
    title: "Residential Installation",
    image: images.residentialsolar,
    icon: Sun,
    description:
      "Residential solar services provide homeowners with the opportunity to harness the power of the sun to generate clean, renewable energy.",
    benefits: [
      "Reduce electricity bills",
      "Increase property value",
      "Environmental impact",
      "Energy independence",
      "25+ years of reliability",
      "Government incentives",
    ],
    stats: {
      installations: "500+",
      satisfaction: "98%",
      savings: "40%",
    },
  },
  {
    title: "Commercial Installation",
    image: images.commercialinst,
    icon: Building2,
    description:
      "Our commercial solar installation services are designed to help businesses reduce energy costs while promoting sustainability.",
    benefits: [
      "Lower operational costs",
      "Enhanced brand value",
      "Tax benefits",
      "Sustainable operations",
      "ROI within 4-5 years",
      "24/7 monitoring",
    ],
    stats: {
      installations: "100+",
      satisfaction: "95%",
      savings: "60%",
    },
  },
  {
    title: "Backup Power",
    image: images.backuppower,
    icon: Battery,
    description:
      "Ensure uninterrupted power supply with our top-of-the-line backup power solutions.",
    benefits: [
      "Uninterrupted power",
      "Smart integration",
      "Quick switchover",
      "Mobile monitoring",
      "Extended battery life",
      "Weather resistant",
    ],
    stats: {
      reliability: "99.9%",
      response: "2hrs",
      backup: "48hrs",
    },
  },
  {
    title: "Solar Maintenance & Support",
    image: images.services,
    icon: Wrench,
    description:
      "Our dedicated service department offers comprehensive maintenance solutions designed to keep your solar energy system operating at peak performance.",
    benefits: [
      "Regular inspections",
      "Performance monitoring",
      "Preventive maintenance",
      "Emergency support",
      "System optimization",
      "Extended warranty",
    ],
    stats: {
      uptime: "99.9%",
      response: "4hrs",
      support: "24/7",
    },
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={images.rooftop_solar}
          alt="Rooftop Solar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Powering Your Future with Solar Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                From residential rooftops to large commercial projects, we
                deliver efficiency and savings for every property.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#009a8d] hover:bg-[#008075] text-white px-8 py-3 rounded-lg flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <service.icon className="absolute bottom-6 right-6 w-12 h-12 text-white" />
                </motion.div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600">{service.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-[#009a8d]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  {Object.entries(service.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-[#009a8d]">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#009a8d] py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Switch to Solar?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and learn how you can
              start saving with solar energy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#009a8d] px-8 py-3 rounded-lg flex items-center mx-auto">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
