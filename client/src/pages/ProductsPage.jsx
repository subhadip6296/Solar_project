import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Battery,
  Zap,
  ArrowRight,
  Plus,
  Check,
  Download,
  FileText,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";


const products = [
  {
    "id": 1,
    "category": "Solar Energy Solutions",
    "items": [
      {
        "name": "Solar PV Consulting",
        "description": "Expert guidance on designing, implementing, and optimizing solar photovoltaic systems.",
        "image": "/assets/Images/solarpv.jpg",
        "icon": "Sun",
        "features": [
          "Customized solar solutions",
          "Site analysis and feasibility study",
          "Optimized system design"
        ],
        "specifications": {
          "Service Type": "Consulting & Advisory",
          "Industries Covered": "Residential, Commercial, Industrial",
          "Project Size": "1kW - 100MW"
        },
        "benefits": [
          {
            "title": "Maximized Efficiency",
            "description": "Ensures optimal solar panel placement for maximum energy output."
          },
          {
            "title": "Cost Reduction",
            "description": "Identifies the most cost-effective solutions for solar implementation."
          },
          {
            "title": "Regulatory Compliance",
            "description": "Assists in meeting local and national solar energy regulations."
          }
        ]
      },
      {
        "name": "Solar Rooftop Installation",
        "description": "Solar panel systems installed on rooftops for residential and commercial properties.",
        "image": "/assets/Images/rooftopmain.jpg",
        "icon": "Sun",
        "features": [
          "Space-efficient energy generation",
          "On-grid and off-grid solutions",
          "Quick installation process"
        ],
        "specifications": {
          "System Size": "1kW - 500kW",
          "Panel Type": "Monocrystalline / Polycrystalline",
          "Warranty": "25 Years"
        },
        "benefits": [
          {
            "title": "Cost Savings",
            "description": "Reduce electricity bills by up to 70%."
          },
          {
            "title": "Renewable Energy",
            "description": "Generates clean and sustainable power for long-term use."
          },
          {
            "title": "Smart Monitoring",
            "description": "Allows remote tracking of energy production and usage."
          }
        ]
      },
      {
        "name": "Ground-Mounted Solar Installation",
        "description": "Large-scale solar panel systems installed on open land for industrial and utility-scale projects.",
        "image": "/assets/Images/groundmounted.jpg",
        "icon": "Sun",
        "features": [
          "High energy production capacity",
          "Flexible tilt and tracking options",
          "Ideal for commercial and industrial use"
        ],
        "specifications": {
          "System Capacity": "100kW - 100MW",
          "Mounting Type": "Fixed / Single-axis / Dual-axis",
          "Lifespan": "25+ years"
        },
        "benefits": [
          {
            "title": "Maximum Sunlight Exposure",
            "description": "Adjustable angles increase energy efficiency."
          },
          {
            "title": "Scalability",
            "description": "Designed to accommodate future expansions."
          },
          {
            "title": "Low Maintenance",
            "description": "Requires minimal upkeep for long-term operation."
          }
        ]
      },
      {
        "name": "Solar Microgrid Construction",
        "description": "Self-sustaining solar power grids designed for communities, industries, and remote locations.",
        "image": "/assets/Images/microgrid.jpg",
        "icon": "Sun",
        "features": [
          "Off-grid and hybrid solutions",
          "Battery storage for 24/7 power supply",
          "Supports rural electrification projects"
        ],
        "specifications": {
          "Power Output": "10kW - 10MW",
          "Storage Type": "Lithium-ion / Flow Batteries",
          "Backup Time": "Up to 48 hours"
        },
        "benefits": [
          {
            "title": "Energy Independence",
            "description": "Reduces dependency on central power grids."
          },
          {
            "title": "Reliable Power Supply",
            "description": "Ensures uninterrupted electricity even in remote areas."
          },
          {
            "title": "Environmentally Friendly",
            "description": "Reduces greenhouse gas emissions and fossil fuel dependency."
          }
        ]
      },
      {
        "name": "Solar Water Pump",
        "description": "Solar-powered water pumping systems for agricultural, industrial, and household use.",
        "image": "/assets/Images/waterpump.jpg",
        "icon": "Sun",
        "features": [
          "Operates entirely on solar energy",
          "Works in remote locations without grid access",
          "Ideal for irrigation and drinking water supply"
        ],
        "specifications": {
          "Power Range": "0.5HP - 10HP",
          "Pump Type": "Submersible / Surface",
          "Lifespan": "10-20 years"
        },
        "benefits": [
          {
            "title": "Cost-Free Operation",
            "description": "No electricity or fuel costs required."
          },
          {
            "title": "Sustainable Water Supply",
            "description": "Provides water access in off-grid areas."
          },
          {
            "title": "Durable & Reliable",
            "description": "Designed for long-term use with minimal maintenance."
          }
        ]
      },

      {
        "name": "Solar Water Heater",
        "description": "Efficient solar-powered water heating solutions for residential, commercial, and industrial applications.",
        "image": "/assets/Images/waterheater.jpeg",
        "icon": "Sun",
        "features": [
          "Uses solar energy to heat water",
          "Works efficiently in all seasons",
          "Reduces electricity and gas consumption"
        ],
        "specifications": {
          "Tank Capacity": "100L - 500L",
          "Heating Efficiency": "80-95%",
          "Material": "Stainless Steel / Copper",
          "Lifespan": "15-25 years"
        },
        "benefits": [
          {
            "title": "Energy Savings",
            "description": "Lowers electricity and gas bills significantly."
          },
          {
            "title": "Eco-Friendly Heating",
            "description": "Reduces carbon emissions and reliance on fossil fuels."
          },
          {
            "title": "Reliable Hot Water Supply",
            "description": "Ensures consistent and efficient heating even in cold climates."
          }
        ]
      },
      

      
      {
        "name": "Solar PV Cleaning and Maintenance",
        "description": "Professional cleaning and maintenance services to optimize solar panel performance.",
        "image": "/assets/Images/solarpv.jpg",
        "icon": "Sun",
        "features": [
          "Regular dust and debris removal",
          "Performance monitoring and fault detection",
          "Extends the lifespan of solar panels"
        ],
        "specifications": {
          "Service Type": "Cleaning & Preventative Maintenance",
          "Frequency": "Quarterly / Annually",
          "Tools Used": "Water jets, automated cleaning systems"
        },
        "benefits": [
          {
            "title": "Maximized Energy Efficiency",
            "description": "Keeps panels clean for optimal sunlight absorption."
          },
          {
            "title": "Reduced Downtime",
            "description": "Prevents unexpected breakdowns and power loss."
          },
          {
            "title": "Long-Term Savings",
            "description": "Extends the lifespan and efficiency of solar installations."
          }
        ]
      }
    ]
  }
  
, {
  "id": 2,
  "category": "Electric Mobility",
  "items": [
    {
      "name": "E-Bike Manufacturing",
      "description": "Design and production of high-performance electric bicycles for urban and off-road use.",
      "image": "/assets/Images/ebike.png",
      "icon": "Zap",
      "features": [
        "Custom frame designs",
        "Powerful electric motors",
        "Long-lasting lithium batteries",
        "Smart connectivity options",
        "Eco-friendly production process"
      ],
      "specifications": {
        "Motor Power": "250W - 1000W",
        "Battery Capacity": "36V - 52V",
        "Range Per Charge": "40-120 km",
        "Charging Time": "3-6 hours",
        "Max Speed": "25-50 km/h",
        "Warranty": "2 Years"
      },
      "benefits": [
        {
          "title": "Sustainable Transportation",
          "description": "Reduces carbon footprint and fuel dependency."
        },
        {
          "title": "High Performance & Comfort",
          "description": "Optimized for speed, safety, and smooth rides."
        },
        {
          "title": "Smart Technology Integration",
          "description": "Supports mobile apps and GPS tracking."
        }
      ]
    },
    {
      "name": "E-Bike Repair",
      "description": "Comprehensive maintenance and repair services for all electric bike models.",
      "image": "/assets/Images/ebike2.jpg",
      "icon": "Zap",
      "features": [
        "Battery diagnostics and replacement",
        "Motor and controller repairs",
        "Brake and tire servicing",
        "Software updates and troubleshooting",
        "On-site and remote support"
      ],
      "specifications": {
        "Service Type": "Repair & Maintenance",
        "Coverage": "All E-Bike Brands",
        "Turnaround Time": "24-72 Hours",
        "Warranty on Repairs": "6 Months"
      },
      "benefits": [
        {
          "title": "Extended Bike Lifespan",
          "description": "Ensures your e-bike runs efficiently for years."
        },
        {
          "title": "Quick and Reliable Service",
          "description": "Fast turnaround times for minimal downtime."
        },
        {
          "title": "Cost-Effective Maintenance",
          "description": "Affordable repair solutions compared to replacements."
        }
      ]
    },
    {
      "name": "Convert Your Standard Bike into E-Bike",
      "description": "Upgrade your existing bicycle with an electric conversion kit for an enhanced riding experience.",
      "image": "/assets/Images/ebike3.jpg",
      "icon": "Zap",
      "features": [
        "Plug-and-play electric motor kits",
        "Battery integration with long-range capacity",
        "Customizable speed and assist levels",
        "Easy installation process",
        "Compatible with most standard bikes"
      ],
      "specifications": {
        "Motor Power": "250W - 750W",
        "Battery Capacity": "36V - 48V",
        "Range Per Charge": "40-80 km",
        "Charging Time": "3-5 hours",
        "Conversion Time": "2-4 Hours",
        "Warranty": "1 Year"
      },
      "benefits": [
        {
          "title": "Affordable E-Bike Alternative",
          "description": "Convert your bike at a fraction of the cost of a new e-bike."
        },
        {
          "title": "Eco-Friendly Upgrade",
          "description": "Reuses existing bicycles, reducing waste."
        },
        {
          "title": "Customizable Experience",
          "description": "Choose power levels and assist modes to fit your riding style."
        }
      ]
    }
  ]
}
,

{
  "id": 3,
  "category": "Student Support",
  "items": [
    {
      "name": "Workshops",
      "description": "Interactive training sessions providing hands-on experience in various technical domains.",
      "image": "/assets/Images/stu1.jpg",
      "icon": "Battery",
      "features": [
        "Expert-led sessions",
        "Live demonstrations and hands-on activities",
        "Industry-relevant topics"
      ],
      "specifications": {
        "Duration": "1-4 weeks",
        "Mode": "Online / Offline",
        "Certification": "Provided upon completion"
      },
      "benefits": [
        {
          "title": "Enhanced Learning",
          "description": "Gain practical exposure in various technical fields."
        },
        {
          "title": "Networking Opportunities",
          "description": "Connect with industry experts and professionals."
        },
        {
          "title": "Certification",
          "description": "Earn a certificate that adds value to your career."
        }
      ]
    },
    {
      "name": "Internships",
      "description": "Hands-on internship programs to gain industry exposure and practical knowledge.",
      "image": "/assets/Images/stu2.jpg",
      "icon": "Battery",
      "features": [
        "Real-world project involvement",
        "Mentorship from professionals",
        "Skill enhancement through practical work"
      ],
      "specifications": {
        "Duration": "1-6 months",
        "Mode": "Hybrid (Online & Offline)",
        "Stipend": "Available for selected candidates"
      },
      "benefits": [
        {
          "title": "Career Growth",
          "description": "Internships help in building a strong resume and gaining industry exposure."
        },
        {
          "title": "Practical Knowledge",
          "description": "Transition from theoretical learning to real-world applications."
        },
        {
          "title": "Skill Development",
          "description": "Enhance problem-solving and teamwork skills essential for success."
        }
      ]
    }
  ]
}
]

const ProductDetailDialog = ({ product }) => (
  <Dialog>
    <DialogTrigger asChild>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-[#118B50] font-medium flex items-center gap-2">
        Learn More <ArrowRight className="w-4 h-4" />
      </motion.button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        <DialogDescription>
          Discover the features and benefits of our {product.name}
        </DialogDescription>
      </DialogHeader>

      <div className="mt-4 space-y-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Key Features</h3>
          <div className="grid grid-cols-2 gap-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#118B50]" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Technical Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-sm text-gray-500">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Benefits</h3>
          <div className="grid gap-4">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-[#118B50]">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#118B50]">
            <Download className="w-4 h-4" />
            Download Brochure
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#118B50]">
            <FileText className="w-4 h-4" />
            Technical Details
          </button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const ProductCard = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden group">
    <div className="relative h-64 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#118B50] transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {product.description}
      </p>

      <div className="space-y-3">
        {product.features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-gray-600">
            <Check className="w-4 h-4 text-[#118B50]" />
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ProductDetailDialog product={product} />
      </div>
    </div>
  </motion.div>
);

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const getAllProducts = () => {
    return products.reduce((allItems, category) => {
      return [...allItems, ...category.items];
    }, []);
  };
  const getCurrentProducts = () => {
    if (selectedCategory === "All") {
      return getAllProducts();
    }
    return (
      products.find((cat) => cat.category === selectedCategory)?.items || []
    );
  };
  return (
    <div className="min-h-screen bg-white w-full overflow-hidden">
      {/* Hero Section */}
      {/* <div className="bg-[#C1D8C3] text-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6">
              Our Solar Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-black max-w-2xl mx-auto">
              Discover our comprehensive range of solar services designed for
              efficiency, reliability, and sustainability.
            </motion.p>
          </div>
        </div>
      </div> */}

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 w-full overflow-hidden">
        <Tabs defaultValue={selectedCategory} className="space-y-8 ">
        <div className="flex justify-center overflow-hidden bg-black sm:bg-gray-200 w-full sm:w-fit mx-auto">
        <TabsList className="flex justify-center items-center px-2 flex-nowrap scale-75 sm:scale-100 h-8 bg-gray-800 sm:bg-gray-300 text-white sm:text-black">
        <TabsTrigger

                value="All"
                onClick={() => setSelectedCategory("All")}>
                All Services
              </TabsTrigger>
              {products.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.category}
                  onClick={() => setSelectedCategory(category.category)}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="All">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getAllProducts().map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </TabsContent>

          {products.map((category) => (
            <TabsContent key={category.id} value={category.category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {category.items.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-[#C1D8C3] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-black max-w-2xl mx-auto mb-8">
  Explore cutting-edge solutions in renewable energy, e-bikes, and student innovations. Connect with us to power your ideas with sustainable technology.
</p>

         <Link to={"/contact"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#118B50] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#008075] transition-colors">
            Contact Us
          </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
